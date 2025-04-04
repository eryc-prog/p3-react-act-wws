export async function handler(event, context) {
  const apiKey = process.env.API_KEY;
  const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip`;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Success" }), // Message
  };
}
