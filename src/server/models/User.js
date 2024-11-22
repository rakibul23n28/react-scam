import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  profileImageUrl: { type: String },
  deposits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "deposit",
      required: true,
    },
  ],
  balance: {
    type: Number,
    default: 100,
  },
  withdrawals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "withdrawal",
    },
  ],
});

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", UserSchema);
