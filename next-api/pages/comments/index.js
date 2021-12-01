import { useState } from "react";

function CommentsPage() {
	const [comments, setComments] = useState([]);

	const [comment, setComment] = useState("");
	//GET REQUEST
	const fetchComments = async () => {
		const response = await fetch("/api/comments");
		const data = await response.json();
		setComments(data);
	};
	//POST REQUEST
	const submitComment = async () => {
		const response = await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({ comment }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		console.log(data);
	};

	//DELETE REQUEST

	const deleteComment = async (commentId) => {
		const response = await fetch(`/api/comments/${commentId}`, {
			method: "DELETE",
		});
		const data = await response.json();
		console.log(data);
		fetchComments();
	};
	return (
		<>
			<input
				type="text"
				defaultValue={comment}
				onClick={(e) => setComment(e.target.value)}
			/>
			<button onClick={submitComment}>Submit Comment</button>
			<button onClick={fetchComments}>Load Comments</button>
			{comments.map((comment) => {
				return (
					<div key={comment.id}>
						{comment.id} {comment.text}
						<button onClick={() => deleteComment(comment.id)}>Delete</button>
					</div>
				);
			})}
		</>
	);
}
export default CommentsPage;
