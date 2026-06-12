function InterfaceTable({ interfaces, selectedInterfaceId, onSelectInterface }) {
  return (
    <section className="table-section" aria-labelledby="interface-table-heading">
      <div className="section-header">
        <div>
          <h2 id="interface-table-heading">Interface Records</h2>
          <p>
            Fictional monitoring records used to demonstrate the dashboard MVP.
          </p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="interface-table">
          <caption>
            Interface monitoring records showing name, type, status, last run,
            owner and details action.
          </caption>
          <thead>
            <tr>
              <th scope="col">Interface Name</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Last Run</th>
              <th scope="col">Owner</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {interfaces.map((item) => (
              <tr
                key={item.id}
                className={selectedInterfaceId === item.id ? 'selected-row' : ''}
              >
                <td>
                  <strong>{item.name}</strong>
                  <span className="interface-id">{item.id}</span>
                </td>
                <td>{item.type}</td>
                <td>
                  <span className={`status-badge status-${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.lastRun}</td>
                <td>{item.owner}</td>
                <td>
                  <button
                    type="button"
                    className="table-action"
                    onClick={() => onSelectInterface(item)}
                    aria-label={`View details for ${item.name}`}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default InterfaceTable;