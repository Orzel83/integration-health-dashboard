function InterfaceDetails({ selectedInterface, onClearSelection }) {
  if (!selectedInterface) {
    return (
      <section
        className="details-panel empty-details"
        aria-labelledby="details-heading"
      >
        <h2 id="details-heading">Interface Details</h2>
        <p>
          Select an interface from the table to view more information about its
          status, error message and suggested action.
        </p>
      </section>
    );
  }

  return (
    <section className="details-panel" aria-labelledby="details-heading">
      <div className="details-header">
        <div>
          <h2 id="details-heading">{selectedInterface.name}</h2>
          <p>{selectedInterface.id}</p>
        </div>

        <button type="button" onClick={onClearSelection}>
          Clear Selection
        </button>
      </div>

      <div className="details-grid">
        <div className="details-item">
          <span>Type</span>
          <strong>{selectedInterface.type}</strong>
        </div>

        <div className="details-item">
          <span>Status</span>
          <strong>{selectedInterface.status}</strong>
        </div>

        <div className="details-item">
          <span>Last Run</span>
          <strong>{selectedInterface.lastRun}</strong>
        </div>

        <div className="details-item">
          <span>Owner</span>
          <strong>{selectedInterface.owner}</strong>
        </div>

        <div className="details-item">
          <span>Environment</span>
          <strong>{selectedInterface.environment}</strong>
        </div>
      </div>

      <div className="details-message">
        <h3>Error Message</h3>
        <p>
          {selectedInterface.errorMessage ||
            "No current error message for this interface."}
        </p>
      </div>

      <div className="details-message">
        <h3>Suggested Action</h3>
        <p>{selectedInterface.suggestedAction}</p>
      </div>
    </section>
  );
}

export default InterfaceDetails;
