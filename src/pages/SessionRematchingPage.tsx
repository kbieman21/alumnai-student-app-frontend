import { useNavigate } from "react-router-dom";

export default function SessionRematching() {
    const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>🔄 Finding Another Tutor</h1>

        <p style={styles.subtitle}>
          The tutor was unavailable, but no worries — we’re already working on it.
        </p>

        <hr style={styles.divider} />

        {/* Status */}
        <section>
          <h3>Session Status</h3>
          <p>
            <strong>Status:</strong>{" "}
            <span style={styles.rematching}>Re-matching in progress ⏳</span>
          </p>
          <p><strong>Estimated Wait Time:</strong> ~3 minutes</p>
        </section>

        <hr style={styles.divider} />

        {/* AI Action */}
        <section>
          <h3>What the AI Is Doing 🤖</h3>
          <ul>
            <li>Searching for the next best alumni tutor</li>
            <li>Matching based on skill, availability, and experience</li>
            <li>Reusing your original request — no need to retype anything</li>
          </ul>

          <div style={styles.aiBox}>
            <em>
              “Your learning request has been safely re-queued and prioritized.”
            </em>
          </div>
        </section>

        <hr style={styles.divider} />

        {/* Reassurance */}
        <section>
          <h3>What You Can Do Now</h3>
          <ul>
            <li>Continue learning with the AI Study Assistant</li>
            <li>Review suggested prep materials</li>
            <li>Relax — we’ll notify you once a tutor accepts</li>
          </ul>
        </section>

        <hr style={styles.divider} />

        {/* Motivation */}
        <section style={styles.rewardBox}>
          <h3>👍 You’re Doing the Right Thing</h3>
          <p>Your request is still active and your progress is saved.</p>
          <p>💡 Learners who wait are matched within minutes on average.</p>
        </section>

        {/* Actions */}
        <div style={styles.buttonRow}>
          <button onClick={() => navigate("/ai")} style={styles.primaryBtn}>Get AI Help</button>
          <button onClick={() => navigate("/tutor")} style={styles.secondaryBtn}>Return to Dashboard</button>
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
    maxWidth: "600px",
    width: "100%",
    padding: "26px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    color:'black'
  },
  subtitle: {
    color: "#555",
    marginBottom: "10px",
  },
  divider: {
    margin: "20px 0",
    border: "none",
    borderTop: "1px solid #eee",
  },
  rematching: {
    color: "#f57c00",
    fontWeight: "bold",
  },
  aiBox: {
    background: "#eef6ff",
    padding: "12px",
    borderRadius: "6px",
    marginTop: "10px",
    fontStyle: "italic",
  },
  rewardBox: {
    background: "#f0fff4",
    padding: "12px",
    borderRadius: "6px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "24px",
  },
  primaryBtn: {
    padding: "10px 16px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 16px",
    background: "#e0e0e0",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
