import React from "react";
import { Link } from "react-router-dom";
import "../styles/news.css";

const news = [
  {
    id: 1,
    type: "Announcement",
    title: "Admissions Open for Robotics Bootcamp",
    description:
      "Registrations are now open for the upcoming Robotics Bootcamp.",
    date: "24 Jul 2026",
  },
  {
    id: 2,
    type: "Achievement",
    title: "Yuvalay Students Win State Innovation Challenge",
    description:
      "Our students secured first place in the state-level innovation competition.",
    date: "22 Jul 2026",
  },
  {
    id: 3,
    type: "Workshop",
    title: "AI for Beginners Workshop",
    description:
      "Join our free AI workshop designed for school and college students.",
    date: "18 Jul 2026",
  },
];

export default function News() {
  return (
    <section className="news-page">
      <div className="news-header">
        <span>Latest Updates</span>
        <h1>News & Announcements</h1>
        <p>
          Stay updated with the latest events, achievements, workshops and
          announcements from Yuvalay Makerspace.
        </p>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-top">
              <span className="news-tag">{item.type}</span>
              <span>{item.date}</span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <Link to="/" className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}