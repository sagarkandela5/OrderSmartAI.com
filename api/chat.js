let sessions = {};

export default function handler(req, res) {

  const message = req.body.message;
  const userId = "user";

  if (!sessions[userId]) {
    sessions[userId] = {
      step: 0,
      name: ""
    };
  }

  let session = sessions[userId];
  let reply = "";

  // START BOOKING
  if (message.toLowerCase().includes("book")) {

    session.step = 1;

    reply = "Great 👍 What is your name?";
  }

  // GET NAME
  else if (session.step === 1) {

    session.name = message;

    session.step = 2;

    reply =
      `Nice to meet you ${message} 👋\n` +
      `Please tell me your preferred date and time.`;
  }

  // GET TIME
  else if (session.step === 2) {

    reply =
      `✅ Booking Confirmed!\n\n` +
      `Name: ${session.name}\n` +
      `Time: ${message}\n\n` +
      `One of our team members will get back to you.\nThank you 🙏`;

    sessions[userId] = {
      step: 0,
      name: ""
    };
  }

  // OTHER MESSAGES
  else if (message.toLowerCase().includes("hello")) {

    reply = "Hello 👋 Welcome to OrderSmartAI";
  }

  else if (message.toLowerCase().includes("price")) {

    reply = "Plans start from £99/month.";
  }

  else {

    reply = "I can help with booking, pricing, and automation.";
  }

  res.status(200).json({ reply });
}
