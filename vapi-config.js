export default function handler(req, res) {
  res.status(200).json({
    apiKey: process.env.VAPI_API_KEY,
    assistant: process.env.VAPI_ASSISTANT_ID,
  });
}
