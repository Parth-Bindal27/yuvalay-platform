import { useState, useEffect, useRef } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import "./aiYuva.css";

import { askGemini } from "../../ai/gemini";
import { searchKnowledge } from "../../ai/aiEngine";

const SUGGESTIONS = [
  "🤖 Robotics",
  "🧠 AI",
  "📅 Events",
  "💼 Internship",
  "🏫 Programs",
  "📞 Contact"
];

const HINTS = [
  "👋 Need help?",
  "✨ Ask AI Yuva",
  "🚀 Explore Robotics",
  "📅 Discover Events",
  "🎓 Find the perfect program",
  "💼 Looking for internships?"
];

export default function AIYuva() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "👋 Hi! I'm AI Yuva. I can help you explore Yuvalay, our programs, events, makerspace and much more."
    }
  ]);

  const [hintIndex, setHintIndex] = useState(0);

  const [showHint, setShowHint] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open) return;

    const first = setTimeout(() => {
      setShowHint(true);

      setTimeout(() => {
        setShowHint(false);
      }, 4000);
    }, 2500);

    const interval = setInterval(() => {
      setHintIndex((prev) => (prev + 1) % HINTS.length);

      setShowHint(true);

      setTimeout(() => {
        setShowHint(false);
      }, 4000);
    }, 25000);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    if (location.pathname === "/programs") {
      addAIMessage(
        "You're currently viewing Programs. Ask me which course suits you best."
      );
    }

    if (location.pathname === "/events") {
      addAIMessage(
        "Looking for upcoming events? Ask me what's happening this month."
      );
    }
  }, [location.pathname]);

  function addAIMessage(text) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text
      }
    ]);
  }

  function addUserMessage(text) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text
      }
    ]);
  }

  async function handleSend(customText) {
    const question = (customText || input).trim();

    if (!question) return;

    addUserMessage(question);

    setInput("");

    setTyping(true);

    try {
      const local = searchKnowledge(question);

      if (local) {
        setTyping(false);

        addAIMessage(local.answer);

        if (local.link) {
          setTimeout(() => {
            navigate(local.link);
          }, 1200);
        }

        return;
      }

      const reply = await askGemini(question);

      setTyping(false);

      addAIMessage(reply);
    } catch (err) {
      console.error(err);

      setTyping(false);

      addAIMessage(
        "Sorry, I'm unable to respond right now. Please try again in a moment."
      );
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }
    return (
    <>
      {!open && (
        <div className="aiFabContainer">

          {showHint && (
            <div className="aiHint">
              {HINTS[hintIndex]}
            </div>
          )}

          <button
            className="aiYuvaFAB"
            onClick={() => setOpen(true)}
          >
            🤖
          </button>

        </div>
      )}

      {open && (
        <div className="aiYuva">

          <div className="aiSheetHandle"></div>

          <div className="aiYuvaHeader">

            <div className="aiYuvaHeaderLeft">

              <div className="aiYuvaLogo">
                🤖
              </div>

              <div>

                <h3>AI Yuva</h3>

                <span>
                  Your Smart Yuvalay Assistant
                </span>

              </div>

            </div>

            <button
              className="aiClose"
              onClick={() => setOpen(false)}
            >
              <FiX />
            </button>

          </div>

          <div
            className="aiYuvaChat"
            ref={chatRef}
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "userMessage"
                    : "aiMessage"
                }
              >

                {msg.text}

              </div>

            ))}

            {typing && (

              <div className="aiTyping">

                <div className="typingBubble">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <small>AI Yuva is typing...</small>

              </div>

            )}

          </div>

          <div className="aiSuggestions">

            {SUGGESTIONS.map((item) => (

              <button
                key={item}
                onClick={() => handleSend(item)}
              >

                {item}

              </button>

            ))}

          </div>

          <div className="aiInput">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
            />

            <button
              onClick={() => handleSend()}
            >

              <FiSend />

            </button>

          </div>

        </div>
      )}

    </>
  );

}