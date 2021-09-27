import express from "express";
import {join, login} from "../controllers/userController";
import {home, search} from "../controllers/videoController"; //export의 default값이 없어서 import {  } 괄호가 필요함



const globalRouter = express.Router();



globalRouter.get("/",home);
globalRouter.get("/join",join);
globalRouter.get("/login",login);
globalRouter.get("/search", search);




export default globalRouter; //default는 내가 원하는 이름으로 import 설정할수 있음
