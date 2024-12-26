
  
  export async function getRandomSuggestion(id : string): Promise<string> {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    // Simulate a network call to fetch question data
    const url = `${baseUrl}/question/suggestion/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched data:', data);
    return data.data;
  }