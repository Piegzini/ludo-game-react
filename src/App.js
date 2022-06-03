import Welcome from "./components/templates/Welcome/Welcome";
import Lobby from "./components/templates/Lobby/Lobby";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {useSelector} from "react-redux";


function App() {
    const user = useSelector(state => state.user)


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Welcome/>}/>
                        <Route path="lobby"
                               element={user.id ? <Lobby/> : <Navigate replace to="/"/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
