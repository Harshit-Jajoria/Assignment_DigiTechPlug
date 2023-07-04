import DataModel from './model.js';

// READ
export const getUsers = async (req, res) => {
  try {
    const user = await DataModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Resgister User
export const addData = async (req, res) => {
  try {
    const { content, tone, keywords,command } = req.body;
    const newUser = new DataModel({
      content,
      tone,
      keywords,
      command
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};