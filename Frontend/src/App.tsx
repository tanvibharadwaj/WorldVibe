import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Shared/Header/Header";
import Footer from "./Component/Shared/Footer/Footer";
import Home from "./Component/Pages/HomePage/Home";
import Articles from "./Component/Shared/Articles/Articles";
import SubscribeSection from "./Component/Shared/Subscription/Subscription";
import Login from "./Component/Shared/LoginPage/Login";
import Signup from "./Component/Shared/SignUpPage/Signup";
import About from "./Component/Pages/AboutPage/About";
import Drives from "./Component/Shared/WhatDrivesUs/Drives";
import Teams from "./Component/Shared/MeetOurTeam/Teams";
import Touch from "./Component/Shared/GetInTouch/Touch";
import Contact from "./Component/Pages/ContactPage/Contact";
import HelpCenter from "./Component/Shared/HelpCenter/Help";
import Connect from "./Component/Shared/Connections/connect";
import BlogPage from "./Component/Pages/BlogPage/BlogPage";
import WriteBlog from "./Component/Pages/WriteBlogPage/WriteBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Articles />
              <SubscribeSection />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Drives />
              <Teams />
              <Touch />
            </>
          }
        />

        {/* Auth */}
        <Route path="/login"  element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <HelpCenter />
              <Connect />
            </>
          }
        />

        {/* Blog listing */}
        <Route path="/blog" element={<BlogPage />} />

        {/* Write a blog (auth-guarded inside the component) */}
        <Route path="/write" element={<WriteBlog />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
