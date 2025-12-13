import React from "react";

export default function LearnerPage() {
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

        <div style={styles.buttonRow}>
          <button style={styles.primaryBtn}>Get AI Help</button>
          <button style={styles.secondaryBtn}>Request a Tutor</button>
        </div>
      </section>

      {/* AI Study Assistant */}
      <section style={styles.card}>
        <h2>AI Study Assistant 🤖</h2>
        <p><strong>Suggested Explanation:</strong></p>
        <p>
          A loop allows you to repeat a block of code until a condition is met.
          Common JavaScript loops include <code>for</code> and <code>while</code>.
        </p>

        <p><strong>Helpful Resources:</strong></p>
        <ul>
          <li>Short concept summary</li>
          <li>Example code snippet</li>
          <li>Practice challenge</li>
        </ul>

        <p><strong>Recommended Next Step:</strong></p>
        <p>Schedule a 30-minute session with a JavaScript tutor.</p>
      </section>

      {/* Recommended Tutors */}
      <section style={styles.card}>
        <h2>Recommended Tutors</h2>

        <div style={styles.tutorCard}>
          <p><strong>Alex R.</strong> — JavaScript</p>
          <p>Alumni · Software Engineer</p>
          <p>⭐ 5.0 | 🏅 Top Mentor</p>
          <button style={styles.primaryBtn}>Request Session</button>
        </div>
      </section>

      {/* Progress */}
      <section style={styles.card}>
        <h2>Your Learning Progress</h2>
        <p>Sessions Completed: 3</p>
        <p>Topics Mastered: JavaScript Basics</p>
        <p>Level: Explorer 🌱</p>
        <p>Points Earned: 120</p>
      </section>
    </div>
  );
}

const styles = {
  page: { padding: "20px", fontFamily: "Arial" },
  card: { background: "black", padding: "15px", marginBottom: "20px", borderRadius: "8px" },
  input: { width: "100%", padding: "8px", marginBottom: "10px" },
  textarea: { width: "100%", height: "80px", padding: "8px" },
  buttonRow: { display: "flex", gap: "10px", marginTop: "10px" },
  primaryBtn: { padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px" },
  secondaryBtn: { padding: "10px", background: "#ddd", border: "none", borderRadius: "5px" },
  tutorCard: { padding: "10px", background: "white", borderRadius: "5px" }
};
