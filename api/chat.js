export default function handler(req, res) {

  const message = req.body.message.toLowerCase();

  let reply = "";

  if (message.includes("hello")) {
    reply = "Hello 👋 Welcome to OrderSmartAI";
  }

  else if (message.includes("price")) {
    reply = "Plans start from £99/month.";
  }

  else if (message.includes("book")) {
    reply = "Sure 👍 Please share your details.";
  }

  else if (message.includes("help")) {
    reply = "I can help with automation, booking, and AI systems.";
  }

  else {
    reply = "Thanks for your message. We will get back to you.";
  }

  res.status(200).json({ reply });
}