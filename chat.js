function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  if (!chatWindow) return;
  
  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "flex";
    const input = document.getElementById("chatInput");
    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  } else {
    chatWindow.style.display = "none";
  }
}

function handleChatKeyPress(event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  if (!input) return;
  
  const message = input.value.trim();
  if (!message) return;

  const chatBody = document.getElementById("chatBody");

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);
  
  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Add bot reply after a short delay
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-message bot";
    botMsg.textContent = "Hi! Thanks for reaching out. Leave your contact info or email me directly at lanceesquilla@gmail.com! 🚀";
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);
}
