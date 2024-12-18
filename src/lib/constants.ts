export const PLATFORM_CONFIGS = {
  instagram: {
    name: 'Instagram',
    urlPattern: /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_\.]+\/?$/,
    placeholder: 'https://instagram.com/username',
  },
  youtube: {
    name: 'YouTube',
    urlPattern: /^https?:\/\/(www\.)?youtube\.com\/(c\/|channel\/|user\/)?[a-zA-Z0-9_\-]+\/?$/,
    placeholder: 'https://youtube.com/c/channel',
  },
  facebook: {
    name: 'Facebook',
    urlPattern: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9_\-\.]+\/?$/,
    placeholder: 'https://facebook.com/page',
  },
  twitter: {
    name: 'Twitter',
    urlPattern: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
    placeholder: 'https://twitter.com/username',
  },
  linkedin: {
    name: 'LinkedIn',
    urlPattern: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_\-]+\/?$/,
    placeholder: 'https://linkedin.com/in/profile',
  },
} as const;