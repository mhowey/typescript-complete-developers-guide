import { faker } from "@faker-js/faker";

export class Hospital {
  hospitalName: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.hospitalName = faker.company.name() + " Hospital";
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
