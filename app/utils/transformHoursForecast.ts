import { format, parseISO } from 'date-fns';

import { Name, SMHIServiceResponse, TimeSeries } from '@/types/smhiServiceResponse';

interface Forecast extends SMHIServiceResponse {
  timeSeries: ExtendedTimeSeries[];
}

interface ExtendedTimeSeries extends TimeSeries {
  formattedTime?: string;
}

export interface TransformedForecast {
  formattedTime: string;
  [key: string]: number[] | string; // Allow other dynamic properties
}

const formatDate = (dateString: string): string => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, 'dd/MM, HH');
};

export const transformHoursForecast = (data: SMHIServiceResponse) => {
  const forecast: Forecast = { ...data };

  forecast.timeSeries.forEach((entry) => {
    entry.formattedTime = formatDate(entry.validTime.toString());

    entry.parameters = entry.parameters.filter((parameter) => {
      const allowedNames = [Name.T, Name.Pmin, Name.Ws, Name.R, Name.Wsymb2];
      return allowedNames.includes(parameter.name);
    });
  });

  const transformedData = forecast.timeSeries.map((entry) => {
    entry.parameters.flatMap((parameter) => parameter.values);
    return {
      formattedTime: entry.formattedTime ?? '',
      parameters: entry.parameters,
    };
  });

  const finalData: TransformedForecast[] = transformedData.map((data) => {
    const transformedObject: TransformedForecast = {
      formattedTime: data.formattedTime,
    };

    data.parameters.forEach((parameter) => {
      transformedObject[parameter.name] = parameter.values;
    });

    return transformedObject;
  });

  return finalData;
};
