import { useNavigate } from "react-router-dom";

export default function SessionAccepted() {
    const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>🎉 Session Accepted!</h1>

        <p style={styles.subtitle}>
          Great news! An alumni tutor has accepted your request and is ready to help.
        </p>

        <hr style={styles.divider} />

        {/* Session Overview */}
        <section>
          <h3>Session Overview</h3>
          <p><strong>Topic:</strong> JavaScript Loops</p>
          <p><strong>Difficulty:</strong> Beginner</p>
          <p><strong>Tutor:</strong> Alex R. (Alumni Software Engineer)</p>
          <p><strong>Session Type:</strong> 1:1 Tutoring</p>
          <p><strong>Duration:</strong> 30 minutes</p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={styles.accepted}>Scheduled ✅</span>
          </p>
        </section>

        <hr style={styles.divider} />

        {/* AI Preparation */}
        <section>
          <h3>AI Session Prep 🤖</h3>
          <div style={styles.aiBox}>
            <p><strong>Before your session, try this:</strong></p>
            <ul>
              <li>Review what a loop does in JavaScript</li>
              <li>Look at a simple <code>for</code> loop example</li>
              <li>Write down 2 questions you want to ask</li>
            </ul>
          </div>
        </section>

        <hr style={styles.divider} />

        {/* Tutor Prep (Transparency) */}
        <section>
          <h3>How Your Tutor Is Preparing</h3>
          <p>
            AI has shared a summary of your request with your tutor so they can
            focus on what you need most during the session.
          </p>

          <div style={styles.aiBox}>
            <em>
              “Learner is a beginner struggling with JavaScript loops and wants
              help applying them in real projects.”
            </em>
          </div>
        </section>

        <hr style={styles.divider} />

        {/* Gamification */}
        <section style={styles.rewardBox}>
          <h3>🏆 Progress & Rewards</h3>
          <p>+20 points for scheduling a tutoring session</p>
          <p><strong>New Total:</strong> 150 points</p>
          <p><strong>Current Level:</strong> Explorer 🌱</p>
        </section>

        <hr style={styles.divider} />

        {/* What’s Next */}
        <section>
          <h3>What Happens Next?</h3>
          <ul>
            <li>Your tutor will guide you through the topic step-by-step</li>
            <li>You’ll receive a session summary after completion</li>
            <li>You can rate the session and earn more points</li>
          </ul>
        </section>

        {/* Actions */}
        <div style={styles.buttonRow}>
          <button onClick={()=>{
            navigate('/learner');
          }} style={styles.primaryBtn}>Return to Dashboard</button>
          <button onClick={()=>{
            navigate('/learner');
          }} style={styles.secondaryBtn}>Review AI Prep</button>
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
    color: "#555",
    marginBottom: "12px",
  },
  divider: {
    margin: "22px 0",
    border: "none",
    borderTop: "1px solid #eee",
  },
  accepted: {
    color: "#2e7d32",
    fontWeight: "bold",
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
    marginTop: "28px",
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
