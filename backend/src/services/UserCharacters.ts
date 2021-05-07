import Model, { IUserCharacter } from "../models/UserCharacter";

export class ServicesUserCharacter {
  async addUserCharacter(user: IUserCharacter) {
    const myUser = new Model(user);
    return await myUser.save();
  }
  async listUserCharacter(query = {}) {
    return await Model.find(query);
  }
  async removeUserCharacter(id: any) {
    await Model.deleteOne({ _id: id });
  }
}
