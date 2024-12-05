import express from "express";
import mainRoutes from "./routes/index.js"

const app = express();

app.use(express.json());
app.use("/", mainRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
