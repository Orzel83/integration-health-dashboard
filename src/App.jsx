import { useMemo, useState } from 'react';
import './App.css';
import InterfaceTable from './components/InterfaceTable';
import SummaryCard from './components/SummaryCard';
import mockInterfaces from './data/mockInterfaces.json';
import { getStatusSummary, searchInterfaces } from './utils/interfaceUtils';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInterfaces = useMemo(
    () => searchInterfaces(mockInterfaces, searchTerm),
    [searchTerm]
  );

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

        <section className="controls-section" aria-label="Dashboard controls">
          <div className="form-control">
            <label htmlFor="interface-search">Search interface</label>
            <input
              id="interface-search"
              type="search"
              value={searchTerm}
              placeholder="Search by interface name..."
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </section>

        {filteredInterfaces.length > 0 ? (
          <InterfaceTable interfaces={filteredInterfaces} />
        ) : (
          <section className="empty-state" aria-live="polite">
            <h2>No interfaces found</h2>
            <p>
              No fictional interface records match the current search term. Try
              changing the search value or clearing the search box.
            </p>
            <button type="button" onClick={() => setSearchTerm('')}>
              Clear Search
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;