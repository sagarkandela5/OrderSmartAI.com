let sessions = {};

export default async function handler(req, res) {

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

    // SEND DATA TO GOOGLE SHEETS
    await fetch("https://script.google.com/macros/s/AKfycbxowQoDqnmen9zn5ZqZh6gDAHrAoGSFhLtT5RTCKU4K2s0aPx7Lm3peVFdA1mOXrKqhdg/exec", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: session.name,
        time: message
      })

    });

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

  // HELLO
  else if (message.toLowerCase().includes("hello")) {

    reply = "Hello 👋 Welcome to OrderSmartAI";
  }

  // DEFAULT
  else {

    reply = "I can help with bookings and automation.";
  }

  res.status(200).json({ reply });
}