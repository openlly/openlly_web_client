interface EmailData {
    name: string;
    email: string;
    message: string;
  }
  
  export async function sendEmail(data: EmailData): Promise<void> {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const url = `${baseUrl}/contact`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  }