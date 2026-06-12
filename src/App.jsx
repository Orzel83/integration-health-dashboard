import './App.css';
import InterfaceTable from './components/InterfaceTable';
import SummaryCard from './components/SummaryCard';
import mockInterfaces from './data/mockInterfaces.json';
import { getStatusSummary } from './utils/interfaceUtils';

function App() {
  const summary = getStatusSummary(mockInterfaces);

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

        <section className="summary-grid" aria-label="Interface health summary">
          <SummaryCard
            label="Total Interfaces"
            value={summary.total}
            status="total"
          />
          <SummaryCard
            label="Healthy"
            value={summary.healthy}
            status="healthy"
          />
          <SummaryCard
            label="Warning"
            value={summary.warning}
            status="warning"
          />
          <SummaryCard
            label="Failed"
            value={summary.failed}
            status="failed"
          />
        </section>

        <InterfaceTable interfaces={mockInterfaces} />
      </section>
    </main>
  );
}

export default App;