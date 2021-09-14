import express from "express";

import { router } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
	return res.json({ msg: "Olá mundo!" });
});

app.listen(port, () => console.log(`Api rodando na porta ${port}`));
