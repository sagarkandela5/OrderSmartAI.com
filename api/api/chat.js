export default function handler(req, res) {

  const message = req.body.message.toLowerCase();

  let reply = "";

  // Simple chatbot logic

  if (message.includes("hello")) {
    reply = "Hello 👋 Welcome to OrderSmartAI";
  }

  else if (message.includes("price")) {
    reply = "Plans start from £99/month.";
  }

  else if (message.includes("book")) {
    reply = "Great 👍 Please share your name and contact.";
  }

  else if (message.includes("help")) {
    reply = "I can help with bookings, pricing, and automation.";
  }

  else {
    reply = "Thanks for your message. We will contact you shortly.";
  }

  res.status(200).json({ reply });
}