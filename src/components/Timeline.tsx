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
    title: "Data Engineer",
    company: "Keyphase",
    subtitle: "Frisco, Texas | Keyphase",
    date: "Jan 2025 – Present",
    points: [
      "Built and managed hybrid batch and streaming pipelines processing 10M+ events/hour with 99.9% availability, supporting AI and analytics workloads with 1-minute end-to-end latency and 40% improved scalability.",
      "Ingested data via Debezium and Kafka, transformed with Spark and Flink, and loaded into Snowflake and S3—handling millions of records/day with 3% consumer lag and 99.5% reduction in operational issues.",
      "Managed pipelines with Airflow and Databricks, implementing scheduling, dependency handling, and failure recovery, achieving 99.8% reliability and operational stability.",
      "Designed pipelines with replay, back-pressure handling, and data quality checks. Collaborated with AI/ML teams to unblock dependencies, align solutions, and improve cross-team adoption."
    ]
  },
  {
    title: "Data Engineer",
    company: "Eden Software & Consulting Inc.",
    subtitle: "Hyderabad, India | Eden Software & Consulting Inc., Client: CallHealth",
    date: "Oct 2021 – Nov 2023",
    points: [
      "Designed and managed pipelines using Azure Data Factory, Azure Databricks (PySpark), and Snowflake, handling large datasets with strong SLAs and improved data availability across analytics systems.",
      "Built Snowflake fact and dimension models with Databricks optimizations, clustering, and partitioning, boosting dashboard performance by 40%.",
      "Streamlined data workflows with ADF triggers and Azure Functions, cutting manual effort by 90%, implementing incremental SCD logic to reduce runtime by 30%, and lowering compute costs.",
      "Implemented validation, monitoring, and security with Azure Monitor, SQL/Synapse checks, Key Vault, and RBAC; standardized CI/CD using GitHub Actions and Terraform, improving data trust and stakeholder confidence."
  
    ]
  },
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