'use server';

import { SMHIServiceResponse } from '@/types/smhiServiceResponse';

export const getForecast = async (
  longitude: number,
  latitude: number
): Promise<SMHIServiceResponse> => {
  try {
    const response = await fetch(
      `${process.env.SMHI_ENDPOINT}/geotype/point/lon/${longitude}/lat/${latitude}/data.json`
    );

    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch application data');
  }
};
