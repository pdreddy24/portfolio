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
      "Owned a low-latency hybrid streaming data pipeline using Python and SQL delivering 10M+/hour, powering AI and data analytical workloads with 99.9% data availability.",
      "Built batch and streaming pipelines with medallion layers, achieving 1-minute end-to-end latency and 40% scalability improvement.",
      "Integrated low-latency and highly scalable ETL pipelines by ingesting data via Debezium and Kafka, transforming with Spark and Flink, loading into Snowflake and S3, processing millions of records/day with 3% consumer lag and 99.5% reduced operational issues.",
      "Orchestrated pipelines with Airflow and Databricks jobs for scheduling, dependency management and failure recovery resulting in 99.8% reliability and improved operational stability."
    ]
  },
  {
    title: "Data Engineer",
    company: "Eden Software & Consulting Inc.",
    subtitle: "Hyderabad, India | Eden Software & Consulting Inc., Client: CallHealth",
    date: "Oct 2021 – Nov 2023",
    points: [
      "Designed pipelines using Azure Data Factory, Azure Databricks (PySpark) and Snowflake, handling large data volumes with strong SLAs and improved data availability across analytics systems.",
      "Built Snowflake fact and dimension models with Azure Databricks optimizations, clustering, and partitioning, improving dashboard performance by 40%.",
      "Automated ingestion and orchestration with ADF triggers and Azure Functions, cutting manual effort by 90% and implementing incremental SCD logic to reduce runtime by 30% and lower compute costs.",
      "Implemented validation, monitoring, and security controls using Azure SQL/Synapse checks, Azure Monitor, Key Vault, and RBAC, proactively catching anomalies and meeting enterprise compliance standards.",
      "Operated pipelines as production systems, standardizing CI/CD with GitHub Actions and Terraform, prioritizing data trust, schema drift handling, and cost efficiency, resulting in fewer reporting issues and higher stakeholder confidence."
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
