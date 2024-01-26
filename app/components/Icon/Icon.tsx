import Image from 'next/image';

import { getIcon } from './getIcon';

interface Props {
  number: string;
}

export const Icon = ({ number }: Props) => {
  const src = getIcon(Number(number));

  return <Image src={src ?? ''} alt="Weather symbol" fill />;
};
