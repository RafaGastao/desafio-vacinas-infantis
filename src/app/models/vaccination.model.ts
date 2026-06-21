export type VaccineStatus = 'done' | 'overdue' | 'upcoming';
export type VaccineFilter = 'all' | 'pending';

export class VaccineRecord {
  constructor(
    public name: string,
    public description: string,
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

export class ChildProfile {
  constructor(
    public id: number,
    public name: string,
    public ageLabel: string,
    public guardian: string,
    public vaccines: VaccineRecord[],
  ) {}

  get initials(): string {
    return this.name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2);
  }

  get completedCount(): number {
    return this.vaccines.filter((vaccine) => vaccine.status === 'done').length;
  }

  get overdueCount(): number {
    return this.vaccines.filter((vaccine) => vaccine.status === 'overdue').length;
  }

  get upcomingCount(): number {
    return this.vaccines.filter((vaccine) => vaccine.status === 'upcoming').length;
  }

  get completionRate(): number {
    if (this.vaccines.length === 0) {
      return 0;
    }

    return this.completedCount / this.vaccines.length;
  }
}

export interface Campaign {
  title: string;
  audience: string;
  period: string;
}
