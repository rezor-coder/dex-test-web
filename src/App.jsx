import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import RezorWallet from "./pages/rezorwallet";
import GetInTouch from "./pages/GetInTouch";
import BlogDescription from "./pages/blogDescription";
import RezorSwap from "./pages/rezorSwap"; 
import NewsDescription from "./pages/newsDescription";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsdescription" element={<NewsDescription />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermAndConditions />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/rezorwallet" element={<RezorWallet />} />
        <Route path="/rezorswap" element={<RezorSwap />} />
        <Route path="/blogdescription" element={<BlogDescription />} /> 
      </Routes>
    </Router>
  );
}

export default App;
