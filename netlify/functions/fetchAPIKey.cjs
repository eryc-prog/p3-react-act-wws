exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({ apiKey: process.env.REACT_APP_API_KEY }), // Ensure API_KEY is set in Netlify environment variables
  };
};
