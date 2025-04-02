exports.handler = async function (event, context) {
  const apiKey = process.env.API_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "This is from your netlify functions!" }), // Message
  };
};
