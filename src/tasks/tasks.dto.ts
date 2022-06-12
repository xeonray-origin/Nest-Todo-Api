export class Task {
  readonly id?: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly longDescription?: string;
  readonly createdAt: Date;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly image?: string;
}

export class Tasks {
  [key: number]: Task;
}
