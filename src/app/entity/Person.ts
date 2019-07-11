export class Person {
  id: number;
  firstName: string;
  lastName: string;
  birthAt: Date;
  notes: string;
  phones: [string];

  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.birthAt = new Date();
    this.notes = null;
    this.phones = null;
  }
}
