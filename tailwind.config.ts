import type { Config } from 'tailwindcss';

// If you want to support toggling dark mode manually
// instead of relying on the operating system preference,
//  use the selector strategy instead of the media strategy:

import flowbite from 'flowbite/plugin';
const config: Config = {
  darkMode: 'selector',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './node_modules/flowbite/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [flowbite],
};
export default config;
