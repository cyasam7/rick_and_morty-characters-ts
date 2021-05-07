import { model, Document, Schema } from "mongoose";

export interface IUserCharacter extends Document {
  user: string;
  character: number;
}

const mySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    character: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IUserCharacter>("UserCharacter", mySchema);
