const URL_BASE = 'https://webweavers-app.onrender.com';
const ENDPOINT = '/products';

interface APIResponse<T> {
  status: number;
  data: T;
}

export async function fetchDataFromAPI<T>(
  params: Record<string, string | number> = {}
): Promise<APIResponse<T>> {
  try {
    const url = new URL(ENDPOINT, URL_BASE);
    const searchParams = new URLSearchParams();
    for (const key in params) {
      searchParams.append(key, String(params[key]));
    }

    url.search = searchParams.toString();
    const response = await fetch(url.toString());
    const responseData: APIResponse<T> = await response.json();

    return responseData;
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    throw error;
  }
}
