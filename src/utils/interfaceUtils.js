export function getStatusSummary(interfaces) {
  return interfaces.reduce(
    (summary, item) => {
      const status = item.status;

      if (status === 'Healthy') {
        summary.healthy += 1;
      }

      if (status === 'Warning') {
        summary.warning += 1;
      }

      if (status === 'Failed') {
        summary.failed += 1;
      }

      summary.total += 1;

      return summary;
    },
    {
      total: 0,
      healthy: 0,
      warning: 0,
      failed: 0,
    }
  );
}