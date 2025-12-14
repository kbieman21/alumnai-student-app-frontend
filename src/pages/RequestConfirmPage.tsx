// import CommonButton from "../components/CommonButtons";
 import { useNavigate } from "react-router-dom";
// import LearnerPage from "./LearnerPage";


// function RquestConfirmPage() {
//     const [sessionRequested, setSessionRequested] = useState(false);
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1 className="text-5xl font-bold mb-4">Rquest Confirm Page</h1>

//       {/* <p className="text-gray-300 text-lg mb-8">
//        Your request has been shared with an alumni tutor.
// You’ll be notified when the tutor accepts.
//       </p> */}
//       {sessionRequested && (
//   <section style={styles.card}>
//     <h3>✅ Session Request Sent!</h3>
//     <p>Your request has been shared with an alumni tutor.</p>
//     <p><strong>Status:</strong> Pending ⏳</p>
//     <p><strong>Estimated Response:</strong> ~5 minutes</p>
//     <p>🎉 You earned +10 points for taking action!</p>
//   </section>
// )}

//        <CommonButton
//             label="Back to Learner's Page"
//             color="gray"
//             onClick={() => navigate("/learner")}
//           />

     

//       {/* <ProjectsPage/> */}
//     </div>
//   );
// }
// export default RquestConfirmPage;


import CommonButton from "../components/CommonButtons";

export default function SessionConfirmation() {
     const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Session Request Sent!</h1>

        <p style={styles.subtitle}>
          Your request has been successfully shared with an alumni tutor.
        </p>

        <hr style={styles.divider} />

        {/* Session Details */}
        <section>
          <h3>Session Details</h3>
          <p><strong>Topic:</strong> JavaScript</p>
          <p><strong>Difficulty:</strong> Beginner</p>
          <p><strong>Tutor:</strong> Alex R. (Alumni)</p>
          <p><strong>Status:</strong> Pending ⏳</p>
          <p><strong>Estimated Response Time:</strong> ~5 minutes</p>
        </section>

        <hr style={styles.divider} />

        {/* AI Summary */}
        <section>
          <h3>AI Summary Sent to Tutor 🤖</h3>
          <p style={styles.aiBox}>
            Learner is struggling with JavaScript loops and needs help
            understanding how to apply them in real projects. Beginner-level
            explanation requested.
          </p>
        </section>

        <hr style={styles.divider} />

        {/* Gamification */}
        <section style={styles.rewardBox}>
          <h3>🎉 Points Earned</h3>
          <p>+10 points for requesting help</p>
          <p><strong>New Total:</strong> 130 points</p>
        </section>

        <hr style={styles.divider} />

        {/* Next Actions */}
        <section>
          <h3>What Happens Next?</h3>
          <ul>
            <li>An alumni tutor will review your request</li>
            <li>You’ll be notified once the session is accepted</li>
            <li>In the meantime, continue learning with AI support</li>
          </ul>
        </section>

        {/* Actions */}
        <div style={styles.buttonRow}>
          {/* <button style={styles.primaryBtn}>Return to Dashboard</button> */}
           <CommonButton
             label="Back to Learner's Page"
             color="gray"
             onClick={() => navigate("/learner")}
           />
          <button onClick={()=>{
            navigate("/ai")
          }} style={styles.secondaryBtn}>Get More AI Help</button>
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
    background: "white",
    maxWidth: "600px",
    width: "100%",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    color: 'black'
  },
  subtitle: {
    color: "#9699a0ff",
    marginBottom: "10px",
  },
  divider: {
    margin: "20px 0",
    border: "none",
    borderTop: "1px solid #eee",
  },
  aiBox: {
    background: "lightgray",
    padding: "12px",
    borderRadius: "6px",
    fontStyle: "italic",
  },
  rewardBox: {
    background: "lightgray",
    padding: "12px",
    borderRadius: "6px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },
  primaryBtn: {
    padding: "10px 16px",
    background: "#4CAF50",
    color: "gray",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 16px",
    background: "gray",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
