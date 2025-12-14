import React, { useState } from "react";

const DEMO_MODE = true; // 🔁 CHANGE TO false FOR LIVE OPENAI

export default function LearnerPage() {
  const [showFakeAI, setShowFakeAI] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAIHelp = () => {
    if (DEMO_MODE) {
      setShowFakeAI(true);
    } else {
      getLiveAIHelp();
    }
  };

  const getLiveAIHelp = async () => {
    setLoading(true);
    setAiResponse("");

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful and supportive tutor for Per Scholas learners. Explain concepts simply.",
              },
              {
                role: "user",
                content:
                  "Explain JavaScript loops simply and give one short example.",
              },
            ],
          }),
        }
      );

      const data = await response.json();
      setAiResponse(data.choices[0].message.content);
    } catch (error) {
      setAiResponse("AI is currently unavailable. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <h1>Welcome back, Learner 👋</h1>
      <p>Get fast help from AI and Per Scholas alumni tutors.</p>

      {/* Request Help */}
      <section style={styles.card}>
        <h2>Get Help Now</h2>

        <label>Topic / Skill</label>
        <select style={styles.input}>
          <option>JavaScript</option>
          <option>Python</option>
          <option>IT Support</option>
          <option>AWS</option>
          <option>Cybersecurity</option>
        </select>

        <label>Difficulty Level</label>
        <select style={styles.input}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label>Describe Your Question</label>
        <textarea
          style={styles.textarea}
          placeholder="I’m struggling to understand JavaScript loops and how to use them in projects."
        />

        <button style={styles.primaryBtn} onClick={handleAIHelp}>
          Get AI Help
        </button>
      </section>

      {/* Demo AI Response */}
      {showFakeAI && (
        <section style={styles.card}>
          <h2>AI Study Assistant 🤖</h2>
          <p>
            A loop allows you to repeat a block of code until a condition is met.
            In JavaScript, a <code>for</code> loop is commonly used to run code a
            specific number of times.
          </p>
          <pre style={styles.codeBlock}>
{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
          </pre>
          <p>
            <strong>Next Step:</strong> Practice writing a loop that prints
            numbers from 1 to 10.
          </p>
        </section>
      )}

      {/* Live AI Response */}
      {loading && <p>AI is thinking...</p>}

      {aiResponse && (
        <section style={styles.card}>
          <h2>AI Study Assistant 🤖</h2>
          <p>{aiResponse}</p>
        </section>
      )}

      {/* Recommended Tutor */}
      <section style={styles.card}>
        <h2>Recommended Tutor</h2>
        <p>
          <strong>Alex R.</strong> — JavaScript Alumni Tutor
        </p>
        <p>⭐ 5.0 | 🏅 Top Mentor</p>
        <button style={styles.secondaryBtn}>Request Session</button>
      </section>

      {/* Progress */}
      <section style={styles.card}>
        <h2>Your Learning Progress</h2>
        <p>Sessions Completed: 3</p>
        <p>Level: Explorer 🌱</p>
        <p>Points Earned: 120</p>
      </section>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#f9f9f9",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    marginBottom: "10px",
  },
  primaryBtn: {
    padding: "10px 15px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "8px 12px",
    background: "#ddd",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  codeBlock: {
    background: "#222",
    color: "#0f0",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "10px",
  },
};

