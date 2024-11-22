import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  peopleCount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Package", packageSchema);
