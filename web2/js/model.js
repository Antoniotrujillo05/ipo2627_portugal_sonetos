import { sonnets, validateSonnets } from "./data.js";

export class SonnetModel {
  constructor(collection = sonnets) {
    if (!validateSonnets(collection)) {
      throw new Error("La colección debe contener cinco sonetos de 14 versos y cuatro estrofas.");
    }
    this.collection = collection;
    this.selectedId = collection[0].id;
  }

  getAll() {
    return this.collection;
  }

  getSelected() {
    return this.collection.find((sonnet) => sonnet.id === this.selectedId);
  }

  select(id) {
    const selected = this.collection.find((sonnet) => sonnet.id === id);
    if (!selected) {
      return false;
    }
    this.selectedId = selected.id;
    return true;
  }
}