async function askBot() {
    const query = document.getElementById("query").value;
    const responseDiv = document.getElementById("response");
  
    if (!query.trim()) {
      responseDiv.innerText = "⚠️ Please enter a query.";
      return;
    }
  
    responseDiv.innerText = "🤖 Thinking...";
  
    try {
      const res = await fetch("https://your-bot-url.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
  
      const data = await res.json();
      responseDiv.innerText = data.response || "❌ No response from bot.";
    } catch (err) {
      responseDiv.innerText = "❌ Error talking to bot.";
      console.error(err);
    }
  }
  
  function copyResponse() {
    const text = document.getElementById("response").innerText;
    navigator.clipboard.writeText(text);
    alert("✅ Copied to clipboard!");
  }
  