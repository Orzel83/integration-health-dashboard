import { useMemo, useState } from 'react';
import './App.css';
import InterfaceTable from './components/InterfaceTable';
import SummaryCard from './components/SummaryCard';
import mockInterfaces from './data/mockInterfaces.json';
import {
  filterInterfacesByStatus,
  getStatusSummary,
  searchInterfaces,
} from './utils/interfaceUtils';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredInterfaces = useMemo(() => {
    const searchResults = searchInterfaces(mockInterfaces, searchTerm);
    return filterInterfacesByStatus(searchResults, selectedStatus);
  }, [searchTerm, selectedStatus]);

  const summary = getStatusSummary(mockInterfaces);

  function clearFilters() {
    setSearchTerm('');
    setSelectedStatus('All');
  }

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

          <div className="form-control">
            <label htmlFor="status-filter">Status filter</label>
            <select
              id="status-filter"
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              <option value="All">All statuses</option>
              <option value="Healthy">Healthy</option>
              <option value="Warning">Warning</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </section>

        {filteredInterfaces.length > 0 ? (
          <InterfaceTable interfaces={filteredInterfaces} />
        ) : (
          <section className="empty-state" aria-live="polite">
            <h2>No interfaces found</h2>
            <p>
              No fictional interface records match the current search or filter.
              Try changing the search value or clearing the selected filter.
            </p>
            <button type="button" onClick={clearFilters}>
              Clear Filters
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;