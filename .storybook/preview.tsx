import type { Preview } from '@storybook/react';
import { Rubik } from 'next/font/google';

import '../app/globals.css';

const rubik = Rubik({ subsets: ['latin'] });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main style={{ padding: '0' }} className={rubik.className}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
