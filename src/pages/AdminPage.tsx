import React from "react";

export default function AdminPage() {
  return (
		<div style={styles.page}>
			<h1>Admin Dashboard</h1>
			<p>Per Scholas Mentorship Platform Overview</p>

			{/* Overview */}
			<section style={styles.card}>
				<h2>platform activity</h2>
				<table className="table-fixed">
					<thead>
						<tr>
							<th>Active Tutors:</th>
							<th>Sessions This Week:</th>
							<th>Skils:</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Rilakkuma Solo</td>
							<td>Zuko loves Katara</td>
							<td>Eww Airbenders</td>
						</tr>
						<tr>
							<td>Helia Prince</td>
							<td>David loves Noni</td>
							<td>Zutara 4eva</td>
						</tr>
						<tr>
							<td>Flora Suguru</td>
							<td>Earth, Wind, and Fire</td>
							<td>I'll make your life better</td>
						</tr>
					</tbody>
				</table>
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
					style={styles.primaryBtn}>
					Approve New Tutors
				</button>
				<button style={styles.secondaryBtn}>View Feedback </button>
				<button style={styles.thirdBTn}> Export Reports</button>
			</section>
		</div>
	);
}


const styles = {
	body: { background: 'bg-sky-500' },
	page: { padding: "20px", fontFamily: "Arial", color:'black' },
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
    margin: "5px"
	},
	thirdBTn: {
		padding: "10px",
		border: "none",
		borderRadius: "5px",
		background: "yellow"
	},
};
