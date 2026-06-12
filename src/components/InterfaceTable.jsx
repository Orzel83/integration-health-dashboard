function InterfaceTable({ interfaces }) {
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
          <thead>
            <tr>
              <th scope="col">Interface Name</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Last Run</th>
              <th scope="col">Owner</th>
            </tr>
          </thead>
          <tbody>
            {interfaces.map((item) => (
              <tr key={item.id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default InterfaceTable;