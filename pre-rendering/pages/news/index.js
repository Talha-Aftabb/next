function NewsArticleList({ articles }) {
	return (
		<>
			<h1>News Article List</h1>
			{articles.map((article) => {
				return (
					<div key={article.id}>
						<h2>
							{article.id} {article.title} | {article.category}
						</h2>
					</div>
				);
			})}
		</>
	);
}
export default NewsArticleList;

export async function getServerSideProps() {
	const responce = await fetch("http://localhost:4000/news");
	const data = await responce.json();

	return {
		props: {
			articles: data,
		},
	};
}
