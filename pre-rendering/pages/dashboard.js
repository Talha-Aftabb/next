import { useState, useEffect } from "react";

function Dashboard() {
	// return <h1>This is the dashboard</h1>;
	const [isLoading, setIsLoading] = useState(true);
	const [dashboardData, setDashboardData] = useState(null);

	useEffect(() => {
		async function fetchDashboardData() {
			const responce = await fetch("http://localhost:4000/dashboard");
			const data = await responce.json();
			setDashboardData(data);
			setIsLoading(false);
		}
		fetchDashboardData();
	}, []);
	if (isLoading) {
		return <h2>Loading....</h2>;
	}
	return (
		<div>
			<h2>Dashboard</h2>
			<h2>Posts - {dashboardData.posts}</h2>
			<h2>Likes - {dashboardData.likes}</h2>
			<h2>Followers - {dashboardData.followers}</h2>
			<h2>Following - {dashboardData.following}</h2>
		</div>
	);
}
export default Dashboard;
