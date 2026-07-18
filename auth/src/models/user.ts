import mongoose from "mongoose";
import { Password } from "../services/password.js";
/**
 * An interface that describes the properties
 * that are required to create a new user
 */
interface UserAttrs {
  email: string;
  password: string;
}

/**
 * An interface that describes the properties
 * that a User model has
 */
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

/**
 * An interface that describes the properties
 * that a User document has
 */

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// this is only to make type checking using typescript b/c TS do not check for mongoose models, in JS we do not need this
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.pre("save", async function (this: UserDoc) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
