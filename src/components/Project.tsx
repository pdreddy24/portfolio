import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/pdreddy24/Data_analysis_agent" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Data_analysis_agent" target="_blank" rel="noreferrer"><h2>Data analysis agent</h2></a>
                <p>Built a React-based AI agent that analyzes, cleans, and visualizes data end-to-end using GPT-5, turning raw datasets into clear insights through automated preprocessing and interactive dashboards.</p>
            </div>
             <div className="project">
                <a href="https://github.com/pdreddy24/Triage_AI_Platform" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Triage_AI_Platform" target="_blank" rel="noreferrer"><h2>Triage_AI_Platform</h2></a>
                <p>Built an AI-powered triage platform that automatically extracts critical information from emergency requests, improving triage efficiency by 30%.Developed an automated request classification system to prioritize emergency cases in real time, increasing triage accuracy by 25%.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Real-time-RAG-streaming" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Real-time-RAG-streaming" target="_blank" rel="noreferrer"><h2> Real-time RAG Streaming pipeline</h2></a>
                <p>This system keeps RAG results fresh in real time by continuously streaming Wikipedia edits into Kafka, cleaning and shaping them with Spark, storing AI-ready content in a vector database, and serving answers through a FastAPI service—while dashboards track lag, freshness, errors, and latency so you always know what’s happening and can trust the output.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/EduVision-AI-Platform" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/EduVision-AI-Platform" target="_blank" rel="noreferrer"><h2>EduVision</h2></a>
                <p>Built a MERN-stack application powered by OpenAI GPT-4 that analyzes PDF files and delivers clear explanations using summaries, images, and videos, while also recommending relevant articles and courses for deeper learning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Agentic-Data-Pipeline-for-Automated-Sentiment-Analysis" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Agentic-Data-Pipeline-for-Automated-Sentiment-Analysis" target="_blank" rel="noreferrer"><h2>Agentic Data Pipeline for Automated Sentiment Analysis</h2></a>
                <p>Built an agentic data pipeline to automate sentiment analysis from raw data using AI agents that perform data processing, retrieval, and reasoning steps.Integrated LLM agents with vector search and SQL queries to generate accurate, evidence-backed insights from both structured and unstructured data</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;
