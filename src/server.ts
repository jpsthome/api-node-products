import express from "express";

const app = express();
const port = 3333;

app.get("/", (req, res) => {
	return res.json({ msg: "Olá mundo!" });
});

app.listen(port, () => console.log(`Api rodando na porta ${port}`));
