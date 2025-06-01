import { faker } from '@faker-js/faker';

export function generateRandomName(prefix = "User") {
  const random = Math.random().toString(36).substring(2, 8);
  return `${prefix}_${random}`;
}

export function generateRandomDay() {
  const day = Math.floor(Math.random() * 31) + 1;
  return day.toString();
}

export function generateRandomMonth() {
  const month = Math.floor(Math.random() * 12) + 1;
  return month.toString();
}

export function generateRandomYear() {
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear - 18;
  const minYear = currentYear - 80;
  const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  return randomYear.toString();
}

export function generateRandomCountry() {
  const countries = [
    "India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore"
  ];
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

export function generateUserData() {
  const password = faker.internet.password(8);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const address = faker.location.streetAddress();
  const state = faker.location.state();
  const city = faker.location.city();
  const zip = faker.location.zipCode();
  const phone = faker.phone.number();

  return {
    password, firstName, lastName, company, address, state, city, zip, phone,
  };
}