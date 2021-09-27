import express from "express";
import {join, login} from "../controllers/userController";
import {trending, search} from "../controllers/videoController"; //export의 default값이 없어서 import {  } 괄호가 필요함



const globalRouter = express.Router();



globalRouter.get("/",trending);
globalRouter.get("/join",join);
globalRouter.get("/login",login);




export default globalRouter; //default는 내가 원하는 이름으로 import 설정할수 있음
