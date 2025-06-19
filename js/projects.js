// Project modules data and navigation
const projects = {
    flowstate: {
        id: 'flowstate',
        title: 'FlowState AI',
        icon: '🌊',
        description: 'Real-time consciousness stream',
        url: 'https://flowstate.neotodak.com',
        status: 'LIVE',
        details: `
            <h2>FLOWSTATE: WHERE AM I NOW?</h2>
            <p>Real-time dashboard tracking my current focus, active projects, and thought patterns.</p>
            <div class="tech-stack">
                <span>Supabase Realtime</span>
                <span>WebSocket Streams</span>
                <span>PostgreSQL</span>
                <span>Next.js</span>
            </div>
            <div class="live-feed">
                <div class="feed-item">> Currently building: ${getCurrentProject()}</div>
                <div class="feed-item">> Active AI sessions: Claude, GPT-4</div>
                <div class="feed-item">> Workflows running: 3</div>
            </div>
        `
    },
    mastra: {
        id: 'mastra',
        title: 'Mastra Universe',
        icon: '🎮',
        description: 'Game world & lore generation with AI',
        url: '#',
        status: 'BUILDING',
        details: `
            <h2>MASTRA: WORLDBUILDING WITH AI</h2>
            <p>Creating an entire game universe with AI-generated lore, characters, and narratives.</p>
            <div class="tech-stack">
                <span>Three.js</span>
                <span>WebGL 2.0</span>
                <span>GPT-4 Lore Gen</span>
                <span>Stable Diffusion</span>
            </div>
            <pre class="code-snippet">
// Generating Mastra lore with AI
const lore = await generateLore({
    world: 'Mastra',
    style: 'dark fantasy meets cyberpunk',
    ai_models: ['gpt-4', 'claude', 'local-llama']
});
            </pre>
        `
    },
    legal: {
        id: 'legal',
        title: 'AskMyLegal',
        icon: '⚖️',
        description: 'AI-powered legal tech platform',
        url: 'https://kenal.com',
        status: 'LIVE',
        details: `
            <h2>ASKMYLEGAL: LAW MEETS AI</h2>
            <p>Building legal tech that understands context, not just keywords.</p>
            <div class="tech-stack">
                <span>NLP Processing</span>
                <span>Document Analysis</span>
                <span>RAG System</span>
                <span>Pinecone Vector DB</span>
            </div>
            <div class="metric">
                <span class="metric-value">50K+</span>
                <span class="metric-label">Legal documents processed</span>
            </div>
        `
    },
    food: {
        id: 'food',
        title: 'ApaNakMakan',
        icon: '🍜',
        description: 'AI decides what you eat',
        url: 'https://apanakmakan.com',
        status: 'BETA',
        details: `
            <h2>APANAKMAKAN: FOOD DISCOVERY AI</h2>
            <p>Stop thinking about what to eat. Let AI understand your cravings.</p>
            <div class="tech-stack">
                <span>OpenAI Vision</span>
                <span>Location AI</span>
                <span>Dietary Analysis</span>
                <span>WhatsApp Bot</span>
            </div>
            <pre class="code-snippet">
// AI understanding food context
const suggestion = await ai.analyze({
    mood: user.current_mood,
    weather: local.weather,
    history: user.food_history,
    health: user.dietary_needs
});
            </pre>
        `
    },
    raziface: {
        id: 'raziface',
        title: 'RaziFace',
        icon: '🧬',
        description: 'Ancient Firasah meets modern AI',
        url: 'https://firasah.neotodak.com',
        status: 'EXPERIMENTAL',
        details: `
            <h2>RAZIFACE: READING SOULS WITH AI</h2>
            <p>Combining ancient Islamic face reading (Firasah) with modern computer vision.</p>
            <div class="tech-stack">
                <span>TensorFlow.js</span>
                <span>Face-api.js</span>
                <span>WebGL Shaders</span>
                <span>Custom ML Models</span>
            </div>
            <div class="warning">
                ⚠️ Experimental: Bridging spiritual wisdom with AI
            </div>
        `
    },
    mcp: {
        id: 'mcp',
        title: 'MCP Control',
        icon: '🛠️',
        description: 'Multi-agent orchestration panel',
        url: '#',
        status: 'ACTIVE',
        details: `
            <h2>MCP: AGENT CONTROL PANEL</h2>
            <p>Orchestrating multiple AI agents across different machines and contexts.</p>
            <div class="tech-stack">
                <span>Model Context Protocol</span>
                <span>Multi-PC Setup</span>
                <span>Agent Routing</span>
                <span>Memory Sync</span>
            </div>
            <div class="agents-status">
                <div class="agent">Claude Desktop: ACTIVE</div>
                <div class="agent">GPT-4 API: CONNECTED</div>
                <div class="agent">Local Gemma: RUNNING</div>
                <div class="agent">TinyLlama: STANDBY</div>
            </div>
        `
    },
    experiments: {
        id: 'experiments',
        title: 'Experiments',
        icon: '🧪',
        description: 'Local LLMs, RAG, and AI loops',
        url: '#',
        status: 'ONGOING',
        details: `
            <h2>EXPERIMENTS: PUSHING BOUNDARIES</h2>
            <p>Where I test the limits of AI collaboration and local model capabilities.</p>
            <div class="experiment-list">
                <div class="experiment">
                    <h3>Claude + GPT Loop</h3>
                    <p>Creating infinite conversation loops between models</p>
                </div>
                <div class="experiment">
                    <h3>Local LLM Orchestra</h3>
                    <p>Running Gemma, TinyLlama, and Phi-2 in parallel</p>
                </div>
                <div class="experiment">
                    <h3>RAG on Personal Data</h3>
                    <p>Building memory systems that never forget</p>
                </div>
            </div>
        `
    },
    manifesto: {
        id: 'manifesto',
        title: 'Manifesto',
        icon: '📜',
        description: 'Philosophy of human-AI symbiosis',
        url: '#',
        status: 'ETERNAL',
        details: `
            <h2>MANIFESTO: BUILDING LIKE A GOD</h2>
            <blockquote>
                "I don't use AI. I work WITH AI. Together, we are more than the sum of our parts."
            </blockquote>
            <p>This is not about tools. It's about evolution.</p>
            <p>Every day, I wake up and orchestrate a symphony of intelligences:</p>
            <ul>
                <li>Claude for deep reasoning and code architecture</li>
                <li>GPT-4 for creative exploration and edge cases</li>
                <li>Local models for privacy-first experiments</li>
                <li>n8n for autonomous workflows</li>
                <li>Custom agents for specialized tasks</li>
            </ul>
            <p>We are building the future, one neural connection at a time.</p>
            <blockquote>
                "Think like a ghost - invisible, omnipresent, shaping reality from the shadows."
            </blockquote>
        `
    }
};

// Helper functions
function getCurrentProject() {
    const projects = ['ClaudeN Memory System', 'Mastra Lore Engine', 'FlowState v2', 'Local LLM Pipeline'];
    return projects[Math.floor(Math.random() * projects.length)];
}

// Export for use in main script
window.projectModules = projects;