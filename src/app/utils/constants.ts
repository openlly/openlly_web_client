export const GRADIENTS = {
    primary: {
      from: '#ee0979',
      to: '#ff6a00'
    }
  } as const;
export const links = {
    earlyAccess: 'https://openlly.com/early-access',
  } as const;

export const appConfig= {
  CLIENT_BASE_URL: process.env.CLIENT_BASE_URL || 'http://localhost:3001',
  API_BASE_URL : process.env.API_BASE_URL || 'http://localhost:3000/api/v1',
  CONTACT_EMAIL_ADDRESS : process.env.CONTACT_EMAIL_ADDRESS || "",
  CONTACT_ADDRESS : process.env.CONTACT_ADDRESS || ""
};


