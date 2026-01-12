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
                <a href="https://github.com/pdreddy24/Real-time-RAG-streaming" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Real-time-RAG-streaming" target="_blank" rel="noreferrer"><h2> Real-time RAG Streaming pipeline</h2></a>
                <p>This system keeps RAG results fresh in real time by continuously streaming Wikipedia edits into Kafka, cleaning and shaping them with Spark, storing AI-ready content in a vector database, and serving answers through a FastAPI service—while dashboards track lag, freshness, errors, and latency so you always know what’s happening and can trust the output.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Data_analysis_agent" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Data_analysis_agent" target="_blank" rel="noreferrer"><h2>Data analysis agent</h2></a>
                <p>Built a React-based AI agent that analyzes, cleans, and visualizes data end-to-end using GPT-5, turning raw datasets into clear insights through automated preprocessing and interactive dashboards.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/EduVision-AI-Platform" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/EduVision-AI-Platform" target="_blank" rel="noreferrer"><h2>EduVision</h2></a>
                <p>Built a MERN-stack application powered by OpenAI GPT-4 that analyzes PDF files and delivers clear explanations using summaries, images, and videos, while also recommending relevant articles and courses for deeper learning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/clickstream_flow" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/clickstream_flow" target="_blank" rel="noreferrer"><h2>Clickstream Flow</h2></a>
                <p>Built a clickstream processing pipeline using Kafka, Debezium, MongoDB, S3, and PySpark to capture, process, and analyze user interaction data at scale.</p>
            </div>
            <div className="project">
                <a href="https://github.com/pdreddy24/Video_summary_llama_model" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/pdreddy24/Video_summary_llama_model" target="_blank" rel="noreferrer"><h2>Video Summary</h2></a>
                <p>Built a video summarization tool using LLaMA that automatically generates concise summaries from video content for quick insights.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;