import User from "../components/user";

function UserList({ users }) {
	return (
		<>
			<h1>Lists of users</h1>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<User user={user} />
					</div>
				);
			})}
		</>
	);
}
export default UserList;

export async function getStaticProps() {
	const responce = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await responce.json();
	console.log(data);
	return {
		props: {
			users: data,
		},
	};
}
