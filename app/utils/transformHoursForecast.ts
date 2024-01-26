import { format, parseISO } from 'date-fns';

import { Name, SMHIServiceResponse, TimeSeries } from '@/types/smhiServiceResponse';

interface ExtendedSMHIServiceResponse extends SMHIServiceResponse {
  timeSeries: ExtendedTimeSeries[];
}

interface ExtendedTimeSeries extends TimeSeries {
  date?: string;
  hour?: string;
}

interface TransformedForecast {
  date: string;
  hour: string;
  [key: string]: number[] | string; // Allow other dynamic properties
}

interface ForecastByDateAndHour {
  date: string;
  hour: string;
  pmin: number[];
  t: number[];
  ws: number[];
  r: number[];
  Wsymb2: number[];
}

export interface Forecast {
  date: string;
  items: {
    hour: string;
    pmin?: number[];
    t?: number[];
    ws?: number[];
    r?: number[];
    Wsymb2?: number[];
  }[];
}

const formatDate = (dateString: string): string => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, 'd/M');
};

const formatHour = (dateString: string): string => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, 'HH');
};

export const transformHoursForecast = (data: SMHIServiceResponse) => {
  const forecast: ExtendedSMHIServiceResponse = { ...data };

  // Filter out non relevant parameters and convert validTime
  forecast.timeSeries.forEach((entry) => {
    entry.date = formatDate(entry.validTime.toString());
    entry.hour = formatHour(entry.validTime.toString());

    entry.parameters = entry.parameters.filter((parameter) => {
      const allowedNames = [Name.T, Name.Pmin, Name.Ws, Name.R, Name.Wsymb2];
      return allowedNames.includes(parameter.name);
    });
  });

  // Keep date, hour and parameters and flatten into new array
  const flattenedData = forecast.timeSeries.map((entry) => {
    entry.parameters.flatMap((parameter) => parameter.values);
    return {
      date: entry.date ?? '',
      hour: entry.hour ?? '',
      parameters: entry.parameters,
    };
  });

  // Pair parameter name to values
  const pairedData: TransformedForecast[] = flattenedData.map((data) => {
    const transformedObject: TransformedForecast = {
      date: data.date,
      hour: data.hour,
    };

    data.parameters.forEach((parameter) => {
      transformedObject[parameter.name] = parameter.values;
    });

    return transformedObject;
  });

  // Group the data by date
  const groupedData: Forecast[] = Object.values(
    pairedData.reduce(
      (acc, item) => {
        const itemDate = item.date;
        if (!acc[itemDate]) {
          acc[itemDate] = { date: itemDate, items: [] };
        }

        const { date, ...parameters } = item;
        acc[itemDate].items.push({ ...parameters });

        return acc;
      },
      {} as { [key: string]: Forecast }
    )
  );

  return groupedData;
};
