// import { useRouter } from "next/router";
function Post({ post }) {
	// const router = useRouter();

	// if (router.isFallback) {
	// 	return <h1>Loading..........</h1>;
	// }

	return (
		<>
			<h2>
				{post.id}
				&nbsp;
				{post.title}
			</h2>
			<p>{post.body}</p>
		</>
	);
}
export default Post;
export async function getStaticPaths() {
	// const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
	// const data = await responce.json();

	// const paths = data.map((post) => {
	// 	return {
	// 		params: {
	// 			postId: `${post.id}`,
	// 		},
	// 	};
	// });
	return {
		paths: [
			{
				params: { postId: "1" },
			},
			{
				params: { postId: "2" },
			},
			{
				params: { postId: "3" },
			},
		],
		// paths,
		fallback: "blocking",
	};
}
export async function getStaticProps(context) {
	const { params } = context;
	const responce = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = await responce.json();
	if (!data.id) {
		return {
			notFound: true,
		};
	}

	console.log(`Generating page for /posts/${params.postId}`);
	return {
		props: {
			post: data,
		},
	};
}
