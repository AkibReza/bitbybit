import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Visualizer from "./pages/Visualizer";
import Challenges from "./pages/Challenges";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/visualizer" element={<Visualizer />} />
            <Route path="/challenges" element={<Challenges />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
