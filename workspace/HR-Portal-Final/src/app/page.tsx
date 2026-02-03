export default function HomePage() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Baynunah HR Portal</h1>
        <p className="subtitle">Modern Employee Self-Service System</p>
        <div className="status">
          <span className="badge">🚀 Ready for AI Agent Integration</span>
        </div>
      </div>

      <section className="features">
        <h2>AI-Powered Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🤖 AI Supervisor</h3>
            <p>Orchestrates all agents and workflow</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Discovery Agent</h3>
            <p>Scans repositories and builds feature inventory</p>
          </div>
          <div className="feature-card">
            <h3>🏗️ Solution Architect</h3>
            <p>Creates proposals and architecture</p>
          </div>
          <div className="feature-card">
            <h3>👷 Builder Agent</h3>
            <p>Rebuilds and merges features</p>
          </div>
          <div className="feature-card">
            <h3>🎨 UI Excellence</h3>
            <p>Enforces visual quality standards</p>
          </div>
          <div className="feature-card">
            <h3>✨ UX Reviewer</h3>
            <p>Ensures great user experience</p>
          </div>
          <div className="feature-card">
            <h3>📊 Gap Analyst</h3>
            <p>Identifies missing features</p>
          </div>
          <div className="feature-card">
            <h3>☁️ Azure Deploy</h3>
            <p>Provisions and deploys to Azure</p>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Technology Stack</h2>
        <ul>
          <li>Next.js 16 with App Router</li>
          <li>Azure Static Web Apps</li>
          <li>Azure Functions (Node v4)</li>
          <li>Azure OpenAI</li>
          <li>TypeScript & ESLint</li>
        </ul>
      </section>
    </main>
  )
}
