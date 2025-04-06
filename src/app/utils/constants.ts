export const GRADIENTS = {
    primary: {
      from: '#ee0979',
      to: '#ff6a00'
    }
  } as const;
export const appConfig= {
  CLIENT_BASE_URL: process.env.CLIENT_BASE_URL || 'http://localhost:3001',
  API_BASE_URL : process.env.API_BASE_URL || 'http://localhost:3000/api/v1',
  CONTACT_EMAIL_ADDRESS : process.env.CONTACT_EMAIL_ADDRESS || "",
  CONTACT_ADDRESS : process.env.CONTACT_ADDRESS || "",
  TWITTER_URL: process.env.TWITTER_URL || '',
  INSTAGRAM_URL: process.env.INSTAGRAM_URL || '', 
  ANDROID_DOWNLOAD_LINK: process.env.ANDROID_DOWNLOAD_LINK || '',
  IOS_DOWNLOAD_LINK: process.env.IOS_DOWNLOAD_LINK || '',
};


