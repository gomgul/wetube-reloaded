import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("it's better than ever");
};
const handleLogin = (req, res) => {
    return res.send("Login here");
};


app.get("/", handleHome);
app.get("/Login", handleLogin);

const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🙄`);

app.listen(4000, handleListening); //외부접속