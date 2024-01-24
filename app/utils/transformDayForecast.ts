import { format } from 'date-fns/format';

import { Name, SMHIServiceResponse } from '@/types/smhiServiceResponse';

// SMHI Seems to be displaying the highest temp on their site
export const getHighestValue = (data: SMHIServiceResponse, parameterName: Name) => {
  const today = data.timeSeries.filter(
    (entry) => format(entry.validTime, 'yyyy/MM/dd') === format(new Date(), 'yyyy/MM/dd')
  );

  return today.reduce(
    (max, entry) => {
      const parameter =
        entry.parameters.find((param) => param.name === parameterName)?.values[0] || -Infinity;
      const wsymb2Value =
        entry.parameters.find((param) => param.name === 'Wsymb2')?.values[0] || -Infinity;

      if (parameter > max.parameter) {
        return { parameter, wsymb2Value };
      } else {
        return max;
      }
    },
    { parameter: -Infinity, wsymb2Value: -Infinity }
  );
};
