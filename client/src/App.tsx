import "./styles/App.css";
import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Create} from "./pages/Create";
import {Edit} from "./pages/Edit";
import {MainLayout} from "./layout/MainLayout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
            <Route path="/posts/create" element={<MainLayout><Create/></MainLayout>}/>
            <Route path="/posts/edit/:id" element={<MainLayout><Edit/></MainLayout>}/>
        </Routes>
    );
}

export default App;
