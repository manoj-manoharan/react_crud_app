import "./styles/App.css";
import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Create} from "./pages/Create";
import {Edit} from "./pages/Edit";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts/create" element={<Create/>}/>
                <Route path="/posts/edit/{id}" element={<Edit/>}/>
            </Routes>
        </div>
    );
}

export default App;
