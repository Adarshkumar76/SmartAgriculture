import React, { useState } from "react";
import Header from "./Header";

const Ai = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Hello! Ask me anything about crops or smart agriculture.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyB-LvKVsEolyU2Lw_klznrcRwrMRu8h1g0"; // Replace with your actual API key

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const payload =
      "Act as a smart agriculture assistant. Answer the user's question about crops, soil, or weather. Provide detailed and helpful information. and also give suggestions for crop management. Be concise and clear. and also give restrictions: don't tell about any other then agriculture and crops. Don't give any other information";
    const inputWithPrompt = `${payload} ${input}`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: inputWithPrompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "❌ No valid response from Gemini.";

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "❌ Error communicating with Gemini." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: 900,
          margin: "40px auto",
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 10,
        }}
      >
        <h2>🌱 Smart Agri - ChatBot</h2>
        <div
          style={{
            height: 400,
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
            padding: 10,
            marginBottom: 10,
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{ textAlign: msg.role === "user" ? "right" : "left" }}
            >
              <p>
                <strong>{msg.role === "user" ? "You" : "AgriBot"}:</strong>{" "}
                {msg.text}
              </p>
            </div>
          ))}
          {loading && <p>AgriBot is typing...</p>}
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your crop question..."
            style={{ width: "80%", padding: 8 }}
          />
          <button onClick={handleSend} style={{ padding: 8, marginLeft: 10 }}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Ai;
