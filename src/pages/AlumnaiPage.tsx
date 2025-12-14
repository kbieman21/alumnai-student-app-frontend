import { useNavigate } from "react-router-dom";

export default function TutorPage() {
    const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <div className="mb-5">
      <h1 className="text-5xl">Welcome, Tutor 🎓</h1>
      <p>Thank you for giving back to Per Scholas learners.</p>
      </div>

      {/* Profile */}
      <section style={styles.card}>
        <h2 className="mb-2"><strong>Your Tutor Profile</strong></h2>
        <div >
        <p className="pl-8">Skills: JavaScript, React, Career Prep</p>
        <p className="">Availability: Weekdays, Evenings</p>
        <p className="pl-12">Experience: Alumni – 3+ Years Industry</p>
        </div>
      </section>

      {/* Requests */}
      <section style={styles.card} className=" text-center">
        <h2 ><strong>Learner Requests</strong></h2>

        <div style={styles.requestCard}>
          <p className="pl-9">Topic: JavaScript Loops</p>
          <p >Difficulty: Beginner</p>
          <p className="mb-8">
            AI Summary: Learner needs help understanding loops
            and applying them in projects.
          </p>
          <div style={styles.buttonRow}className="ml-115">
            <button onClick={()=>{
                navigate("/sessionaccept")
            }}  style={styles.primaryBtn} >Accept Session</button>
            <button onClick={()=>{
                alert('Session Declined');
            }} style={styles.secondaryBtn}>Decline</button>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section style={styles.card}>
        <h2 className="mb-1"><strong>AI Tutor Assistant</strong> 🤖</h2>
        <p className="pl-9">Suggested Session Plan:</p>
        <ul>
          <li>Explain loop basics</li>
          <li className="pl-5">Walk through example</li>
          <li className="pr-3">Hands-on practice</li>
          <li>Q&A</li>
        </ul>
      </section>

      {/* Rewards */}
      <section style={styles.card}>
        <h2 className="mb-2"><strong>Your Impact & Rewards</strong></h2>
        <p>Total Sessions: 8</p>
        <p className="pl-6">Learners Helped: 6</p>
        <p className="pl-6">Points Earned: 450</p>
        <p className="pl-12">Rank: Silver Mentor 🥈</p>
        <p>Badges: 🏅 First Session | 🔥 Consistent Mentor</p>
      </section>
    </div>
  );
}

const styles = {
  page: { padding: "20px", font:"Helvetica, sans-serif"},
  card: { border: 'solid' , borderColor:'white', borderWidth:'1px', padding: "15px", marginBottom: "20px"},
  requestCard: { padding: "10px", borderRadius: "5px" },
  buttonRow: { display: "flex", gap: "10px", marginTop: "10px"},
  primaryBtn: { padding: "10px", background: "#B1AB86", color: "white", border: "none", borderRadius: "5px" },
  secondaryBtn: { padding: "10px", background: "#FEFAE0", border: "none", borderRadius: "5px",color:"black" }
};
