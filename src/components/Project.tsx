import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/pdreddy24/legend" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/legend" target="_blank" rel="noreferrer"><h2>Legend Open-source</h2></a>
                <p>I contributed to the open-source Legend project by working with Deutsche Bank and FINOS community members to answer real adoption questions, using a hands-on demo and architecture walkthrough to show how Legend handles real-time data, permissions, system integration, and low-latency use cases—making its value clear and practical for teams to adopt.</p> </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Pipeline360" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Pipeline360" target="_blank" rel="noreferrer"><h2>Pipeline 360</h2></a>
                <p>Designed and built a production-grade analytics pipeline on Snowflake using dbt and AWS, implementing medallion architecture, incremental ELT, SCD Type 2 history tracking, automated data quality checks, and analytics-ready models to mirror real-world data platforms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Real-time-RAG-streaming" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Real-time-RAG-streaming" target="_blank" rel="noreferrer"><h2> Real-time RAG Streaming pipeline</h2></a>
                <p>Built a real-time, streaming RAG platform that ingests Wikimedia SSE data via Kafka, processes it with Spark Structured Streaming and medallion modeling, indexes embeddings in pgvector, and serves explainable, observable retrieval through FastAPI with full end-to-end freshness and latency monitoring.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Agentic-Data-Pipeline-for-Automated-Sentiment-Analysis" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Agentic-Data-Pipeline-for-Automated-Sentiment-Analysis" target="_blank" rel="noreferrer"><h2>Agentic Data Pipeline for Automated Sentiment Analysis</h2></a>
                <p>Agentic Sentiment Pipeline – A self-healing, production-grade pipeline that ingests noisy text, repairs data, and performs LLM-based sentiment analysis at scale with full observability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Data_analysis_agent" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Data_analysis_agent" target="_blank" rel="noreferrer"><h2>Data analysis agent</h2></a>
                <p>Built a React-based AI agent that analyzes, cleans, and visualizes data end-to-end using GPT-5, turning raw datasets into clear insights through automated preprocessing and interactive dashboards.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;