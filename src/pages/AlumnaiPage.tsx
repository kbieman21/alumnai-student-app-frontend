import React from "react";

export default function TutorPage() {
  return (
    <div style={styles.page}>
      <h1>Welcome, Tutor 🎓</h1>
      <p>Thank you for giving back to Per Scholas learners.</p>

      {/* Profile */}
      <section style={styles.card}>
        <h2>Your Tutor Profile</h2>
        <p><strong>Skills:</strong> JavaScript, React, Career Prep</p>
        <p><strong>Availability:</strong> Weekdays, Evenings</p>
        <p><strong>Experience:</strong> Alumni – 3+ Years Industry</p>
      </section>

      {/* Requests */}
      <section style={styles.card}>
        <h2>Learner Requests</h2>

        <div style={styles.requestCard}>
          <p><strong>Topic:</strong> JavaScript Loops</p>
          <p><strong>Difficulty:</strong> Beginner</p>
          <p>
            <strong>AI Summary:</strong> Learner needs help understanding loops
            and applying them in projects.
          </p>
          <div style={styles.buttonRow}>
            <button style={styles.primaryBtn}>Accept Session</button>
            <button style={styles.secondaryBtn}>Decline</button>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section style={styles.card}>
        <h2>AI Tutor Assistant 🤖</h2>
        <p><strong>Suggested Session Plan:</strong></p>
        <ul>
          <li>Explain loop basics</li>
          <li>Walk through example</li>
          <li>Hands-on practice</li>
          <li>Q&A</li>
        </ul>
      </section>

      {/* Rewards */}
      <section style={styles.card}>
        <h2>Your Impact & Rewards</h2>
        <p>Total Sessions: 8</p>
        <p>Learners Helped: 6</p>
        <p>Points Earned: 450</p>
        <p>Rank: Silver Mentor 🥈</p>
        <p>Badges: 🏅 First Session | 🔥 Consistent Mentor</p>
      </section>
    </div>
  );
}

const styles = {
  page: { padding: "20px", fontFamily: "Arial" },
  card: { background: "black", padding: "15px", marginBottom: "20px", borderRadius: "8px" },
  requestCard: { background: "white", padding: "10px", borderRadius: "5px" },
  buttonRow: { display: "flex", gap: "10px", marginTop: "10px" },
  primaryBtn: { padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px" },
  secondaryBtn: { padding: "10px", background: "#ddd", border: "none", borderRadius: "5px" }
};
