import { describe, expect, test } from 'vitest';
import { getStatusSummary } from '../utils/interfaceUtils';

describe('getStatusSummary', () => {
  test('returns zero counts when the interface list is empty', () => {
    const result = getStatusSummary([]);

    expect(result).toEqual({
      total: 0,
      healthy: 0,
      warning: 0,
      failed: 0,
    });
  });

  test('counts healthy, warning and failed interfaces correctly', () => {
    const interfaces = [
      { id: 'INT-001', status: 'Healthy' },
      { id: 'INT-002', status: 'Warning' },
      { id: 'INT-003', status: 'Failed' },
      { id: 'INT-004', status: 'Healthy' },
    ];

    const result = getStatusSummary(interfaces);

    expect(result).toEqual({
      total: 4,
      healthy: 2,
      warning: 1,
      failed: 1,
    });
  });

  test('ignores unknown status values in the named status counts', () => {
    const interfaces = [
      { id: 'INT-001', status: 'Healthy' },
      { id: 'INT-002', status: 'Unknown' },
    ];

    const result = getStatusSummary(interfaces);

    expect(result).toEqual({
      total: 2,
      healthy: 1,
      warning: 0,
      failed: 0,
    });
  });
});