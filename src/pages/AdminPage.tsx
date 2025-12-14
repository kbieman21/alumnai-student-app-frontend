import React from "react";

export default function AdminPage() {
  return (
    <div style={styles.page}>
      <h1>Admin Dashboard</h1>
      <p>Per Scholas Mentorship Platform Overview</p>

      {/* Overview */}
      <section style={styles.card}>
        <h2>Platform Activity</h2>
        <p>Total Learners: 120</p>
        <p>Active Tutors: 45</p>
        <p>Sessions This Week: 32</p>
        <p>Avg Response Time: 5 minutes</p>
      </section>

      {/* AI Insights */}
      <section style={styles.card}>
        <h2>AI Insights & Trends 🤖</h2>
        <p><strong>Most Requested Skills:</strong></p>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>IT Support</li>
        </ul>

        <p>
          <strong>AI Recommendation:</strong> Recruit more JavaScript alumni
          tutors to meet learner demand.
        </p>
      </section>

      {/* Engagement */}
      <section style={styles.card}>
        <h2>Community Engagement</h2>
        <p>Badges Awarded: 78</p>
        <p>Total Points Earned: 9,400</p>

        <p><strong>Top Tutors This Month:</strong></p>
        <ol>
          <li>Alex R. – 12 sessions</li>
          <li>Maria L. – 10 sessions</li>
          <li>John D. – 8 sessions</li>
        </ol>
      </section>

      {/* Controls */}
      <section style={styles.card}>
        <h2>Admin Controls</h2>
        <button onClick={()=>{
                alert('Alex has been approved');
            }}  style={styles.primaryBtn}>Approve New Tutors</button>
        <button style={styles.secondaryBtn}>View Feedback </button>
        <button style={styles.secondaryBtn}> Export Reports</button>
      </section>
    </div>
  );
}

const styles = {
  page: { padding: "20px", fontFamily: "Arial" },
  card: { background: "gray", padding: "15px", marginBottom: "20px", borderRadius: "8px" },
  primaryBtn: { padding: "10px", marginRight: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px" },
  secondaryBtn: { padding: "10px", background: "gray", border: "none", borderRadius: "5px" }
};
