function sendMessage(option) {

  const chatBody =
    document.getElementById("chatBody");

  const userMessage =
    document.createElement("p");

  userMessage.innerHTML =
    "You: " + option;

  userMessage.style.textAlign = "right";

  chatBody.appendChild(userMessage);

  const botReply =
    document.createElement("p");

  botReply.className = "bot";

  if(option === "Emergency") {

    botReply.innerHTML =
      'Book here:<br><a href="https://calendly.com/ordersmartai-support/30min" target="_blank">Open Booking</a>';

  }

  if(option === "Book Consultation") {

    botReply.innerHTML =
      "Great 😊 We offer free Other consultations.";

  }

  chatBody.appendChild(botReply);

}