// Timeline.tsx
import React from "react";
import '../assets/styles/Timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

interface TimelineItem {
  title: string;
  company: string;
  subtitle: string;
  date: string;
  points: string[];
}

const timelineData: TimelineItem[] = [
  {
    title: "AI Engineer",
    company: "Keyphase",
    subtitle: "Frisco, Texas | Keyphase",
    date: "Jan 2025 – Present",
    points: ["Built an AI-powered triage platform that automatically extracts critical information from emergency requests, improving triage efficiency by 30%."
    "Developed an automated request classification system to prioritize emergency cases in real time, increasing triage accuracy by 25%."
    ]
  },
  {
    title: "Data Engineer",
    company: "Eden Software & Consulting Inc.",
    subtitle: "Hyderabad, India | Eden Software & Consulting Inc., Client: CallHealth",
    date: "Oct 2021 – Nov 2023",
    points: [
      "Built Azure data pipelines (ADF, Databricks) to integrate SAP, POS, and vendor data, enabling pre-business reporting and improving dashboard performance by ~40%."
      "Automated ingestion and incremental pipelines using ADF, Azure Functions, and CI/CD, reducing manual effort by ~90% and runtime by ~30%."
    ]
  }
];

function Timeline() {
  return (
    <div id="history" className="timeline-container">
      <h1>Career History</h1>
      <div className="timeline-cards">
        {timelineData.map((item, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <h4>{item.subtitle}</h4>
              <p className="timeline-date">{item.date}</p>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
