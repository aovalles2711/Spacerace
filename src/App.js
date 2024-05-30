import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Header } from "./components";
import { Destination, Crew, Technology } from "./pages";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Header />}></Route>
        <Route path="/destination" exact element={<Destination />}></Route>
        <Route path="/crew" exact element={<Crew />}></Route>
        <Route path="/technology" exact element={<Technology />}></Route>
      </Routes>
    </Router>
  )
}

export default App;