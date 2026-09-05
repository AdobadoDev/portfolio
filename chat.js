function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
    chatWindow.style.display = "flex";
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
    botMsg.textContent = "Zzz... I'll reply when I wake up! 🛏️";
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  var profileImg = document.getElementById("profileImg");
  var root = document.documentElement;

  if (profileImg) {
    profileImg.addEventListener("mouseenter", function() {
      profileImg.src = "img/poker_face.png";
    });

    profileImg.addEventListener("mouseleave", function() {
      var currentTheme = root.getAttribute("data-theme");
      if (currentTheme === "dark") {
        profileImg.src = "img/sleeping_face.png";
      } else {
        profileImg.src = "img/img-1.jpeg";
      }
    });
    
    // Observe theme changes to swap image
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === "data-theme") {
          var newTheme = root.getAttribute("data-theme");
          if (newTheme === "dark") {
            profileImg.src = "img/sleeping_face.png";
          } else {
            profileImg.src = "img/img-1.jpeg";
          }
        }
      });
    });
    
    observer.observe(root, { attributes: true });
    
    // Initial check
    if (root.getAttribute("data-theme") === "dark") {
      profileImg.src = "img/sleeping_face.png";
    }
  }
});
