function SummaryCard({ label, value, status }) {
  return (
    <article className={`summary-card summary-card-${status}`}>
      <span className="summary-card-label">{label}</span>
      <strong className="summary-card-value">{value}</strong>
    </article>
  );
}

export default SummaryCard;