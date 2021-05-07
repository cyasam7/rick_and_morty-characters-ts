import Model, { IUser } from "../models/User";
export class ServicesUser {
  async addUser(user: IUser) {
    const myUser = new Model(user);
    return await myUser.save();
  }
  async searchByEmail(email: string): Promise<IUser | null> {
    return Model.findOne({ email });
  }
}
