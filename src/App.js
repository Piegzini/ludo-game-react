import Welcome from "./components/templates/Welcome/Welcome";
import Lobby from "./components/templates/Lobby/Lobby";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Welcome/>}/>
                        <Route path="lobby" element={<Lobby/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
