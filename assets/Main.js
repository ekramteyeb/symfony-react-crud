import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot }from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/ProjectList"
import ProjectCreate from "./pages/ProjectCreate"
import ProjectEdit from "./pages/ProjectEdit"
import ProjectShow from "./pages/ProjectShow"

// converted react 17 to react 18
const container = document.getElementById('app')
const root = createRoot(container)

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<ProjectList/>} />                
                <Route path="/create"  element={<ProjectCreate/>} />
                <Route path="/edit/:id"  element={<ProjectEdit/>} />
                <Route path="/show/:id"  element={<ProjectShow/>} />
            </Routes>
        </Router>
    );
}
   
export default Main;
   
if (container) {
    root.render(<Main />);
}