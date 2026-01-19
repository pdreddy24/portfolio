import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faDatabase, faServer, faCogs, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsLanguages = ["Python", "SQL", "Bash"];
const labelsCloud = [
    "AWS (S3, EMR, Glue, Redshift)",
    "GCP (BigQuery)",
    "Azure (ADLS, Synapse, ADF)",
    "Snowflake"
];
const labelsDatabases = [
    "PostgreSQL", "MySQL", "MongoDB", "Cassandra",
    "Data Lakes (S3, ADLS)", "OLTP", "Transactional DBs"
];
const labelsDataEngineering = [
    "Apache Spark", "PySpark", "Apache Airflow",
    "Kafka", "Flink", "dbt"
];
const labelsDevOps = [
    "Docker", "Kubernetes", "CI/CD Pipelines",
    "Grafana", "GitHub Actions"
];
const labelsAI = [
    "LangChain", "OpenAI API", "Hugging Face",
    "Qdrant", "Groq", "RAG pipelines", "Agent orchestration"
];

function ExpertiseDataEngineering() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Data Engineering & AI Expertise</h1>
                <div className="skills-grid">

                    {/* Languages */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x"/>
                        <h3>Languages</h3>
                        <p>Proficient in programming and scripting languages essential for data processing and analytics.</p>
                        <div className="flex-chips">
                            {labelsLanguages.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Cloud & Data Platforms */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCloud} size="3x"/>
                        <h3>Cloud & Data Platforms</h3>
                        <p>Experience with multiple cloud platforms and data warehouses for scalable, enterprise-grade solutions.</p>
                        <div className="flex-chips">
                            {labelsCloud.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Databases</h3>
                        <p>Working knowledge of relational, NoSQL, and transactional databases along with large-scale data lakes.</p>
                        <div className="flex-chips">
                            {labelsDatabases.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Data Engineering & Analytics */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x"/>
                        <h3>Data Engineering & Analytics</h3>
                        <p>Building ETL/ELT pipelines, stream processing, and analytics-ready datasets using modern data engineering tools.</p>
                        <div className="flex-chips">
                            {labelsDataEngineering.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* DevOps & Observability */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x"/>
                        <h3>DevOps & Observability</h3>
                        <p>Automating deployments, monitoring pipelines, and maintaining observability across all data workflows.</p>
                        <div className="flex-chips">
                            {labelsDevOps.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* AI / RAG & Agents */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x"/>
                        <h3>AI / RAG & Agents</h3>
                        <p>Expertise in building AI pipelines using Retrieval-Augmented Generation (RAG), LLM agents, and frameworks for enterprise-grade intelligence solutions.</p>
                        <div className="flex-chips">
                            {labelsAI.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExpertiseDataEngineering;
