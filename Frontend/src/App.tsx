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
import Blogs from "./Component/Shared/Blogs/Blogs";
import Update from "./Component/Shared/StayUpdate/Update";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
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

          <Route
            path="/About"
            element={
              <>
                <About />
                <Drives />
                <Teams />
                <Touch />
              </>
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Contact"
            element={
              <>
                <Contact />
                 <HelpCenter /> 
                <Connect />
              </>
            }
          /> 

          <Route
            path="/Blog"
            element={
              <>
                <BlogPage />
                <Blogs />
                <Update />
              </>
            }
          />

          {/* <Route
            path="/WriteBlog"
            element={
              <>
                <WriteBlog /> <Write/>
              </>
            }
          /> */}
        </Routes> 
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
