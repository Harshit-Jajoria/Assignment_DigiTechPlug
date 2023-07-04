import mongoose from 'mongoose';
const DataSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      default: '',
    },
    tone: {
      type: String,
      default: '',
    },
    keywords: {
      type: Array,
      default: '',
    },
    command: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);
const Data = mongoose.model('Data', DataSchema);
export default Data;
