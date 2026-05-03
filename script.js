async function sendMessage() {

  const input = document.getElementById("input");
  const message = input.value;

  if (!message) return;

  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

  input.value = "";

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  chatBox.innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
}