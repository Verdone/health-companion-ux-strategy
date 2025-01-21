export type Resource = {
  name: string;
  url: string;
  licenseUrl: string;
  licenseText: string;
  fullLicenseName: string;
};

export const resources: Resource[] = [
  {
    name: 'Baymard Institute - Free UX Research',
    url: 'https://baymard.com/free-ux-research',
    licenseUrl: 'https://baymard.com/terms-and-conditions',
    licenseText: 'Baymard Institute has an online platform with access to industry-specific UX insights and design examples.',
    fullLicenseName: 'Baymard Institute Terms and Conditions'
  },
  {
    name: 'Flowbite',
    url: 'https://flowbite.com/docs/',
    licenseUrl: 'https://flowbite.com/docs/getting-started/license/',
    licenseText: 'Flowbite is a free and open-source HTML, Tailwind CSS and vanilla JS UI kit.',
    fullLicenseName: 'MIT License'
  },
  {
    name: 'Lifestyle icons created by Andrean Prabowo - Flaticon',
    url: 'https://www.flaticon.com/free-icons/lifestyle',
    licenseUrl: 'https://www.flaticon.com/legal',
    licenseText: 'Andrean Prabowo is the creator of the favicon used on this website.',
    fullLicenseName: 'Flaticon Basic License'
  },
  {
    name: 'SvelteKit',
    url: 'https://kit.svelte.dev/',
    licenseUrl: 'https://github.com/sveltejs/kit/blob/main/LICENSE',
    licenseText:
      'SvelteKit simplifies the process of creating full-stack web applications with the Svelte JavaScript framework.',
    fullLicenseName: 'MIT License'
  },
  {
    name: 'Shadcn-svelte',
    url: 'https://next.shadcn-svelte.com/',
    licenseUrl: 'https://github.com/huntabyte/shadcn-svelte/blob/main/LICENSE.md',
    licenseText:
      'An unofficial port of shadcn/ui to Svelte by shadcn and huntabyte.',
    fullLicenseName: 'MIT License'
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    licenseUrl: 'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE',
    licenseText:
      "Tailwind CSS is a utility-first CSS framework that's great for prototyping because it promotes rapid development and easily customizable styles.",
    fullLicenseName: 'MIT License'
  },
  {
    name: 'Unsplash',
    url: 'https://unsplash.com/',
    licenseUrl: 'https://unsplash.com/license',
    licenseText: 'Unsplash is a website dedicated to sharing stock photography.',
    fullLicenseName: 'Unsplash License'
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    licenseUrl: 'https://github.com/vercel/vercel/blob/main/LICENSE',
    licenseText:
      'Vercel is a cloud platform for frontend development and serverless functions. It allows anyone to deploy and host their own websites/applications.',
    fullLicenseName: 'Apache License 2.0'
  }
];