import DataModel from './model.js';

// READ
export const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Resgister User
export const register = async (req, res) => {
  try {
    const { name, phoneNumber, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      phoneNumber,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};