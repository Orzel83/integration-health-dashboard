import './App.css';

function App() {
  return (
    <main className="app">
      <section className="dashboard">
        <header className="dashboard-header">
          <div>
            <h1>Integration Health Dashboard</h1>
            <p>
              A prototype dashboard for monitoring fictional interface health records.
            </p>
          </div>
          <span className="data-note">Mock data only</span>
        </header>

        <section className="placeholder-card">
          <h2>MVP setup complete</h2>
          <p>
            The React and Vite project structure has been created. Dashboard
            components, mock data, tests and CI/CD will be added in later stages.
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;