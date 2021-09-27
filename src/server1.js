
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";




console.log(process.cwd());

const app = express();
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() +"/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); // form을 자바스크립트 형태로 통역해줌 req.body
app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/videos",videoRouter);



export default app;



/*
const handleListening = () => 
console.log(`Server listening on http://localhost:${PORT}🙄`);

app.listen(4000, handleListening);
*/