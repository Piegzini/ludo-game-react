import {io} from "socket.io-client";
import {createContext} from "react";
import {apiAddress} from "../helpers/constants";

const socket = io(apiAddress);


const SocketContext = createContext()

function SocketProvider({children}) {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export {SocketProvider, SocketContext}
