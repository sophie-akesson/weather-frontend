import { SVGProps } from 'react';

export const SvgSv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="44" cy="45" r="40" fill="#0052B5" />
    <path
      d="M24.8592 39.5V9.8683C28.1529 8.06999 31.7273 6.72138 35.5 5.90498V39.8152H83.6671C83.8867 41.5124 84 43.243 84 45C84 46.757 83.8867 48.4876 83.6671 50.1848L35.5 50.3592V84.095C31.781 83.2902 28.2547 81.9683 25 80.2082L24.8592 50.3592L4.33295 50.1848C4.11328 48.4876 4 46.757 4 45C4 43.1341 4.12776 41.298 4.37502 39.5H24.8592Z"
      fill="#FFDB44"
    />
  </svg>
);
