

export default function PostSessionSummary() {
  return (
    
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>✅ Session Complete!</h1>

        <p style={styles.subtitle}>
          Great work! Here’s a summary of what you learned and what’s next.
        </p>

        <hr style={styles.divider} />

        {/* Session Info */}
        <section>
          <h3>Session Details</h3>
          <p><strong>Topic:</strong> JavaScript Loops</p>
          <p><strong>Tutor:</strong> Alex R.</p>
          <p><strong>Duration:</strong> 30 minutes</p>
        </section>

        <hr style={styles.divider} />

        {/* AI Summary */}
        <section>
          <h3>AI Learning Summary 🤖</h3>
          <div style={styles.aiBox}>
            <ul>
              <li>Learned how <code>for</code> loops work in JavaScript</li>
              <li>Practiced looping through arrays</li>
              <li>Understood common beginner mistakes</li>
            </ul>
          </div>
        </section>

        <hr style={styles.divider} />

        {/* Next Steps */}
        <section>
          <h3>Recommended Next Steps</h3>
          <ul>
            <li>Practice writing loops without examples</li>
            <li>Apply loops in a small project</li>
            <li>Schedule another session if needed</li>
          </ul>
        </section>

        <hr style={styles.divider} />

        {/* Gamification */}
        <section style={styles.rewardBox}>
          <h3>🏆 Rewards Earned</h3>
          <p>+30 points for completing a session</p>
          <p><strong>Total Points:</strong> 180</p>
          <p><strong>Level:</strong> Explorer 🌱</p>
        </section>

        <hr style={styles.divider} />

        {/* Feedback */}
        <section>
          <h3>Rate Your Session</h3>
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>Your feedback helps improve tutor matching.</p>
        </section>

        {/* Actions */}
        <div style={styles.buttonRow}>
          <button style={styles.primaryBtn}>Schedule Another Session</button>
          <button style={styles.secondaryBtn}>Return to Dashboard</button>
        </div>
      </div>
    </div>
    
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "oklch(68.5% 0.169 237.323)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    maxWidth: "650px",
    width: "100%",
    padding: "28px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    color:'black'
  },
  subtitle: {
    color: "#060606ff",
    marginBottom: "10px",
  },
  divider: {
    margin: "22px 0",
    border: "none",
    borderTop: "1px solid #eee",
  },
  aiBox: {
    background: "#eef6ff",
    padding: "14px",
    borderRadius: "8px",
  },
  rewardBox: {
    background: "#f0fff4",
    padding: "14px",
    borderRadius: "8px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "26px",
  },
  primaryBtn: {
    padding: "12px 18px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 18px",
    background: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
