import React from "react";
import { FaBookOpen, FaUsers, FaChartLine } from "react-icons/fa";
import bgImage from "../../../assets/bg-img.webp";

const Home: React.FC = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const stats = [
    {
      icon: <FaBookOpen size={36} color="#a855f7" />,
      number: "500+",
      label: "Articles Published",
    },
    {
      icon: <FaUsers size={36} color="#a855f7" />,
      number: "10K+",
      label: "Active Readers",
    },
    {
      icon: <FaChartLine size={36} color="#a855f7" />,
      number: "50K+",
      label: "Monthly Views",
    },
  ];

  const styles = {
    wrapper: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as "column",
      textAlign: "center" as "center",
      padding: "20px",
      color: "#fff",
    },
    heading: {
      fontSize: "48px",
      fontWeight: 700,
      marginBottom: "16px",
    },
    highlight: {
      background: "linear-gradient(90deg, #9469deff, #c088caff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subheading: {
      fontSize: "18px",
      maxWidth: "800px",
      lineHeight: 1.6,
      fontWeight: 500,
      marginBottom: "32px",
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      flexWrap: "wrap" as "wrap",
      marginBottom: "40px",
    },
    btnPrimary: {
      background: "linear-gradient(90deg, #b388ff , #e1bee7)",
      padding: "10px 24px",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "none",
    },
    btnSecondary: {
      padding: "10px 24px",
      color: "#fff",
      border: "2px solid #fff",
      borderRadius: "8px",
      background: "transparent",
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "none",
    },
    stats: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap" as "wrap",
      gap: "100px",
      marginTop: "50px",
    },
    statBox: {
      textAlign: "center" as "center",
      gap: "28px",
      minWidth: "140px",
    },
    statIcon: {
      marginBottom: "20px",
    },
    statNumber: {
      fontSize: "30px",
      fontWeight: 700,
    },
    statLabel: {
      fontSize: "25px",
      color: "#ddd",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>
        Welcome to <span style={styles.highlight}>WordVibe</span>
      </h1>
      <p style={styles.subheading}>
        Step into the world of WordVibe — a place where creativity meets clarity. Whether you're a passionate writer or an eager reader, our platform lets you explore, express, and elevate your thoughts through powerful storytelling, insightful articles, and engaging conversations that leave an impact.
      </p>

      <div style={styles.buttons}>
        <a href="/blog" style={styles.btnPrimary}>
          Explore Blogs →
        </a>
        <a href={isLoggedIn ? "/write" : "/signup"} style={styles.btnSecondary}>
          Start Writing
        </a>
      </div>

      <div style={styles.stats}>
        {stats.map((item, index) => (
          <div key={index} style={styles.statBox}>
            <div style={styles.statIcon}>{item.icon}</div>
            <div style={styles.statNumber}>{item.number}</div>
            <div style={styles.statLabel}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
