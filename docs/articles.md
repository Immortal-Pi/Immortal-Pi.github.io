1] Powering the Future: My Internship at the Heart of Texas Energy Landscape
https://www.linkedin.com/pulse/powering-future-my-internship-heart-texas-energy-landscape-amruth-pai-eenoc/

August 7, 2025
When most people think of the U.S. power grid, they envision a single interconnected system delivering electricity from coast to coast. But Texas is different. The Lone Star State proudly operates its own independent power grid, managed by ERCOT (Electric Reliability Council of Texas), and this grid is increasingly embracing the integration of battery storage and to meet rising energy demands.



Article content
Over the past 12 weeks, I had the privilege of contributing to this exciting transformation through my summer internship at Van Brunt & Associates an experience that was not just about refining my technical toolkit but about immersing myself in one of the most critical and evolving sectors of our time: energy forecasting and management.

My Role: Data-Driven Decision Making in Power Forecasting
As a Data Analyst and software developer intern with a focus on energy analytics, my mission was clear leverage data to help make better decisions about how Texas consumes, stores, and forecasts power. Specifically, my projects centered on optimizing the accuracy of load forecasts, identifying critical 4CP (Four Coincidental Peak) events, and laying the groundwork for intelligent battery storage utilization.

Building the Foundation: Data Collection and ETL Pipelines
The journey began with data. I designed and built an automated ETL (Extract, Transform, Load) pipeline to fetch, process, and store real-time weather data, grid metrics, market prices, and historical load information from various public and private sources. Using tools like Python, PostgreSQL, and Airflow, I ensured a robust and scalable architecture capable of handling updates every 5 minutes.

This automated system served as the backbone for all subsequent analytics and machine learning work. It enabled clean, consistent data ingestion freeing up time to focus on model experimentation and strategic insights.

Forecasting the Grid: Machine Learning in Action
With a solid data foundation, I moved on to developing short-term and long-term load forecasting models. I tested a suite of algorithms and evaluating them based on MAPE and RMSE performance metrics.

Each model was fine-tuned using weather regressors (e.g., temperature, humidity, dew point), and lag features to capture cyclical demand. This wasn’t just an academic exercise; these models were used to simulate real-world performance scenarios, providing stakeholders with actionable forecasts under peak load conditions.

Identifying 4CP Events: Where Data Meets Strategy
One of the most business-critical deliverables of the internship was identifying 4CP (Four Coincidental Peak) events, which occur during the four highest electricity demand intervals in summer months. These events directly impact transmission charges and cost allocation for large industrial customers.

By combining my load forecast outputs with ERCOT market data and historical consumption trends, I built a report-generating tool that flagged potential 4CP days. This tool empowered internal teams and clients to take strategic load-shedding actions, resulting in significant cost savings and operational agility

Final Reflections: Charging Ahead with Purpose
Looking back, this internship was a perfect confluence of data science, machine learning, and energy strategy. It gave me a unique opportunity to solve large scale problems that have real-world consequences—from load balancing during heatwaves to optimizing the future of battery storage.

As Texas continues to innovate at the intersection of power and technology, I’m immensely grateful to my mentor Annette Van Brunt and Van Brunt & Associates, Inc. who believed in my potential and gave me the space to lead with data.

Powering the future starts today—and I’m excited to keep building.




2] Scaling Enterprise GenAI: My Internship Experience Deploying SLMs, RAG, and vLLM
https://www.linkedin.com/pulse/scaling-enterprise-genai-my-internship-experience-deploying-pai-oimyc/


December 5, 2025
Over the past few months, I had the opportunity to work as an AI Engineer Intern at Pegasus Knowledge Solutions Inc. (PKSI), and the experience has profoundly shaped how I think about designing and deploying AI systems at scale. What began as a chance to experiment with cutting-edge LLM technologies quickly evolved into a deep exploration of what it truly takes to operationalize AI inside a real enterprise environment with all the complexities, constraints, and rewards that come with it.

I built agentic workflows capable of generating SQL queries and visualizations from natural-language questions. These agents, orchestrated through LangGraph and integrated with SQL Server/PostgresSQL database, transformed the way stakeholders interacted with their data enabling a layer of automation that previously required manual intervention. Watching a user type a question and instantly receive a tailored report or visualization reinforced for me the immense potential of AI-driven analytics.

But perhaps the most defining part of the internship was encountering the realities that no tutorial or demo ever fully prepares you for. On the surface, building agentic AI with APIs seems simple and in controlled environments, it truly is. Yet the moment you step into enterprise constraints, the rules change. Budget considerations, strict security policies, inference costs, data governance expectations, and latency requirements all play a significant role in shaping the architecture. Suddenly, a solution that works beautifully in theory becomes impractical in practice.

Article content
Small Language Models
I quickly realized how powerful Small Language Models (SLMs) can be, especially when balancing performance, cost, and enterprise security requirements. Here are some of the key benefits that make SLMs a compelling choice:

Benefit of Small Language Models (SLM)

Resource Efficiency SLMs use far less compute, memory, and storage, making them ideal for edge devices and limited-infrastructure environments.
Faster Training & Inference Their small size enables quicker fine-tuning and low-latency inference, perfect for real-time applications.
Cost-Effective Deployment Lower hardware needs and faster processing make SLMs significantly cheaper to deploy and operate.
Easy Customization SLMs can be fine-tuned on domain-specific datasets with minimal compute, excelling in specialized tasks.
Better Privacy & Security They can run fully on-prem, ensuring sensitive data never leaves the organization.
Strong with RAG When paired with RAG, SLMs achieve near-LLM performance by retrieving external knowledge for accurate, context-aware responses.

It was in this environment that we discovered the true value of Small Language Models (SLMs) and custom inference engines. Deploying LLMs directly onto GPU servers, optimizing performance with vLLM, and exposing secure internal endpoints transformed the landscape. Instead of relying on costly API calls, we built a scalable and efficient inference layer entirely under organizational control. This shift wasn’t just technical — it was strategic. It allowed us to create faster, cheaper, and more predictable agentic systems tailored to business needs.

Article content
VLLM Inferencing Engine 
The diagram perfectly captures how vLLM organizes its high-performance inference architecture. At the center is the LLMEngine, which manages input processing, continuous batching, model execution, and output generation. vLLM wraps this engine with an AsyncLLMEngine and an OpenAI-compatible API server, allowing any deployed model to behave like a standard OpenAI endpoint. This architecture allowed me to deploy and serve large SLMs efficiently, including hosting a 70B parameter model on GPU servers to support an enterprise-grade RAG system. By combining efficient scheduling with optimized attention and KV-cache management, vLLM delivers extremely fast, scalable, and cost-efficient LLM inference making it ideal for serving SLMs and enterprise agentic workloads.

My internship at PKSI wasn’t just a technical journey; it was a shift in mindset. It gave me experience across model deployment, enterprise integration, cloud infrastructure, and agentic reasoning systems. It highlighted the importance of designing AI that is not just powerful, but reliable, scalable, and practical for real business use.

As I continue to grow in this field, I’m more excited than ever about the future of agentic AI especially systems built on efficient SLMs, optimized inference engines, and thoughtful architectural design. I look forward to exploring more opportunities to build AI that doesn’t just work in theory, but thrives in production.

3] Network Visualization using Large Language Models
https://www.linkedin.com/pulse/network-visualization-using-large-language-models-amruth-pai-fqh3c/


December 13, 2024
Network visualization is a cornerstone of data science and knowledge representation, offering an intuitive way to analyze relationships and patterns in complex datasets. With the rise of Large Language Models (LLMs), their integration into network analysis workflows has introduced novel capabilities, including enhanced contextual understanding and semantic enrichment. This article explores network visualization using Neo4j and Gephi, two popular tools in the domain, and examines how LLMs influence this process.

Neo4j: Graph Database and Visualization Platform

Play
neo4j
Neo4j is a robust graph database that excels in managing and querying graph-structured data. Its visualization capabilities allow users to intuitively explore relationships, making it ideal for applications such as social networks, recommendation systems, and fraud detection. Key features include:

Cypher Query Language: Enables complex graph queries to extract meaningful subgraphs and patterns.
Integrated Visualization: Offers interactive graph views directly within the Neo4j Browser.
Extensibility: Integrates seamlessly with Python and other languages for advanced analytics.

Pros and Cons of Using Neo4j:
Direct database-query visualization.
Efficient handling of large datasets.
Flexibility in querying and modifying data.

Limited customization in native graph visualizations.
Requires additional tools or libraries for advanced styling.

Gephi: Dedicated Graph Visualization Software

Play
Gephi
Gephi is a purpose-built graph visualization tool known for its flexibility and rich feature set. It is often used for exploratory data analysis and creating high-quality visual outputs. Its strengths include:

Wide Range of Layout Algorithms: ForceAtlas2, Yifan Hu, and others for diverse visualization styles.
Customizable Appearance: Fine-tuned control over node sizes, colors, and edge styles.
Plug-in Ecosystem: Extends functionality with additional metrics and layouts.

Pros and Cons of Using Gephi:
Highly customizable visual outputs.
Built-in tools for metrics like centrality and clustering.
No database dependency.

Limited scalability for very large datasets.
Lacks integrated querying mechanisms like Cypher.

Impact of Large Language Models
LLMs, such as GPT-4 and LLaMA 3.1, enhance network analysis by extracting semantic relationships, generating descriptive labels, and narrating insights. In my experience, using these models yielded different results, but the variations were not significant enough to impact the overall analysis. GPT-4 excels in nuanced summaries, detailed narratives, and generating human-like context, while LLaMA 3.1 offers faster processing, cost efficiency, and is ideal for lightweight, scalable solutions. Together, they bring complementary strengths to improve graph interpretability and storytelling.

GPT-4: Excels in generating highly contextual and nuanced summaries, making it ideal for enriching nodes with detailed, human-like descriptions. However, the differences compared to LLaMA 3.1 in practical outcomes were marginal.

Article content
Neo4j vs Gephi
Practical Comparison
In a recent project, I analyzed a dataset of academic collaborations using both tools. Specifically, I used Wikipedia data on the top 10 industry leaders to construct the network. I leveraged LLMs to generate nodes and edges and identify relationships between them, enriching the graph with context and insights. With Neo4j, I utilized its querying and visualization capabilities to explore the dataset. Switching to Gephi, I pushed this data using Gephi Streamer, applied ForceAtlas2 for layout optimization, and enhanced the visualization with LLM-derived labels and node attributes. The resulting output was far more polished, offering improved storytelling potential.

Interesting Observations and Perspectives
This project revealed that LLMs contribute differently to network analysis. GPT-4 excelled in producing detailed summaries for storytelling, while LLaMA 3.1 was ideal for rapid iterations and scalable preprocessing. Additionally, Neo4j’s query-driven approach encouraged in-depth exploration, whereas Gephi’s customization supported broader pattern analysis. Aligning tools and methods with specific goals proved critical.



Article content
Future Applications: Graph Recommendation Algorithms
One promising area for future exploration is the integration of Graph Recommendation Algorithms (GRAs). These algorithms can dynamically suggest new connections or highlight unseen relationships within the dataset. Leveraging GRAs alongside LLMs could:

Enhance predictive analytics by uncovering potential trends or patterns.
Improve decision-making processes in applications like social networks and fraud detection.
Provide actionable insights by recommending relevant nodes or edges for deeper analysis.

Integrating GRAs into tools like Neo4j and Gephi would enable more dynamic and insightful visualizations, pushing the boundaries of network analysis further.

Project Repository
The code and resources for this project can be accessed on GitHub:

Neo4j Integration
Gephi Integration

Acknowledgments
I would like to express my gratitude to Professor Judd Bradbury for encouraging me to implement this idea. His guidance and support were instrumental in shaping the approach and execution of this project.

Conclusion
Both Neo4j and Gephi are invaluable tools for network visualization, each excelling in distinct areas. Neo4j's database integration and real-time querying capabilities make it ideal for dynamic analyses, while Gephi's visualization strengths shine in presentation and exploratory analysis. LLMs serve as a unifying force, enriching the workflow by providing deeper semantic insights and enhancing the interpretability of visual outputs.

As network visualization evolves, the synergy between tools like Neo4j and Gephi and the capabilities of LLMs will undoubtedly drive further innovation, unlocking new possibilities in data analysis and communication.