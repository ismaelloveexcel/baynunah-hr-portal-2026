export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Baynunah HR Portal
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            AI-Supervised Multi-Agent System
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Welcome to the Employee Self-Service and HR Portal powered by an
            intelligent multi-agent architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Supervisor Agent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Orchestrates and coordinates all agent activities
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">7 Specialized Agents</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                HR, Payroll, Leave, Recruitment, Training, Performance, Reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
