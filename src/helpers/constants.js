import {io} from "socket.io-client";

const socket = io("http://localhost:4000");

const apiAddress = "http://localhost:4000"


export {apiAddress, socket}
