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

export function searchInterfaces(interfaces, searchTerm) {
  if (!searchTerm) {
    return interfaces;
  }

  const term = searchTerm.toLowerCase();

  return interfaces.filter((item) => {
    return (
      item.id?.toLowerCase().includes(term) ||
      item.name?.toLowerCase().includes(term) ||
      item.system?.toLowerCase().includes(term) ||
      item.status?.toLowerCase().includes(term)
    );
  });
}
export function filterInterfacesByStatus(interfaces, selectedStatus) {
  if (selectedStatus === 'All') {
    return interfaces;
  }

  return interfaces.filter((item) => item.status === selectedStatus);
}