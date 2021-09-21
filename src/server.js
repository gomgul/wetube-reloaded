/*
import express from "express";
import morgan from "morgan"; // middleware를 return 해준다
*/
const PORT = 4000;

const app = express();
const logger = morgan("dev");



const handleHome = (req, res) => {
    console.log("I will respond");
    return res.send("Hello");
};
const login = (req, res) => {
    return res.send("login");
};

/*
const routerLogger = (req, res, next) => {
    console.log("PATH", req.path);
    next();
};
const methodLogger = (req, res, next) => {
    console.log("METHOD", req.method);
    next();
};
const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if ( url === "/protected") {
        return res.send("<h1> Not Allowed </h1>")
    }
    console.log("Allowed, you may continue");
    next();
};
const handelProtected = (req, res, next) => {
    return res.send("welcome to the private lounge");
}

*/




app.use(logger);

app.get("/", handleHome); //routes만들고 controllers 만든 것
app.get("/login", login);
/*
app.get("/", (req,res) => res.send("hello"));
app.use(logger);
app.get("/protected", handelProtected);
*/

const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🙄`);

app.listen(4000, handleListening); //외부접속