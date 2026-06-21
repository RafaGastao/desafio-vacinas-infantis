type VaccineStatus = 'done' | 'overdue' | 'upcoming';

class TestVaccineRecord {
  constructor(
    public dueDate: Date,
    public appliedDate?: Date,
  ) {}

  get status(): VaccineStatus {
    if (this.appliedDate) {
      return 'done';
    }

    return this.dueDate < new Date() ? 'overdue' : 'upcoming';
  }
}

describe('vaccination rules', () => {
  it('marks an applied vaccine as done', () => {
    const vaccine = new TestVaccineRecord(new Date(2026, 0, 1), new Date(2026, 0, 2));

    expect(vaccine.status).toBe('done');
  });

  it('marks a past pending vaccine as overdue', () => {
    const vaccine = new TestVaccineRecord(new Date(2026, 4, 10));

    expect(vaccine.status).toBe('overdue');
  });

  it('marks a future pending vaccine as upcoming', () => {
    const nextYear = new Date().getFullYear() + 1;
    const vaccine = new TestVaccineRecord(new Date(nextYear, 0, 10));

    expect(vaccine.status).toBe('upcoming');
  });
});
