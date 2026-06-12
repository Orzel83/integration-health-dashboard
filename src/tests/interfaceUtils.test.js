import { describe, expect, test } from 'vitest';
import { getStatusSummary, searchInterfaces } from '../utils/interfaceUtils';

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
      { id: 'INT-001', name: 'Customer API', status: 'Healthy' },
      { id: 'INT-002', name: 'Payment API', status: 'Warning' },
      { id: 'INT-003', name: 'Tax API', status: 'Failed' },
      { id: 'INT-004', name: 'VAT API', status: 'Healthy' },
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
      { id: 'INT-001', name: 'Customer API', status: 'Healthy' },
      { id: 'INT-002', name: 'Unknown API', status: 'Unknown' },
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

describe('searchInterfaces', () => {
  test('returns all interfaces when the search term is empty', () => {
    const interfaces = [
      { id: 'INT-001', name: 'Customer API', system: 'SAP' },
      { id: 'INT-002', name: 'Payment API', system: 'HMRC' },
    ];

    const result = searchInterfaces(interfaces, '');

    expect(result).toEqual(interfaces);
  });

  test('filters interfaces by name', () => {
    const interfaces = [
      { id: 'INT-001', name: 'Customer API', system: 'SAP' },
      { id: 'INT-002', name: 'Payment API', system: 'HMRC' },
    ];

    const result = searchInterfaces(interfaces, 'payment');

    expect(result).toEqual([
      { id: 'INT-002', name: 'Payment API', system: 'HMRC' },
    ]);
  });

  test('filters interfaces by id', () => {
    const interfaces = [
      { id: 'INT-001', name: 'Customer API', system: 'SAP' },
      { id: 'INT-002', name: 'Payment API', system: 'HMRC' },
    ];

    const result = searchInterfaces(interfaces, 'INT-001');

    expect(result).toEqual([
      { id: 'INT-001', name: 'Customer API', system: 'SAP' },
    ]);
  });

  test('returns an empty array when no match is found', () => {
    const interfaces = [
      { id: 'INT-001', name: 'Customer API', system: 'SAP' },
      { id: 'INT-002', name: 'Payment API', system: 'HMRC' },
    ];

    const result = searchInterfaces(interfaces, 'not-existing');

    expect(result).toEqual([]);
  });
});