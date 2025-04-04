export async function handler(event, context) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip`;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" }), // Message
  };
}
