import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();
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
        <p>
          <strong>Most Requested Skills:</strong>
        </p>
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

        <p>
          <strong>Top Tutors This Month:</strong>
        </p>
        <ol>
          <li>Alex R. – 12 sessions</li>
          <li>Maria L. – 10 sessions</li>
          <li>John D. – 8 sessions</li>
        </ol>
      </section>

      {/* Controls */}
      <section style={styles.card}>
        <h2>Admin Controls</h2>
        <button
          onClick={() => {
            alert("Alex has been approved");
          }}
          style={styles.primaryBtn}
        >
          Approve New Tutors
        </button>
        <button onClick={()=>{
            navigate('/learner');
          }} style={styles.secondaryBtn}>View Feedback </button>
        <button onClick={()=>{
            navigate('/tutor');
          }} style={styles.thirdBTn}> Export Reports</button>
      </section>
    </div>
  );
}

const styles = {
  body: { background: "bg-sky-500" },
  page: { padding: "20px", fontFamily: "Arial", color: "black" },
  card: {
    background: "white",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  primaryBtn: {
    padding: "10px",
    marginRight: "10px",
    background: "#4CAF50",
    color: "white",
    borderRadius: "5px",
  },
  secondaryBtn: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "blue",
    margin: "5px",
  },
  thirdBTn: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "yellow",
  },
};
