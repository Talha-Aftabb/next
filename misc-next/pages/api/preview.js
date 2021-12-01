export default function handler(req, res) {
	res.setPreviewData({ user: "Talha" });
	res.redirect(req.query.redirect);
}
