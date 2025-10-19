const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

//connect db
mongoose.connect(process.env.MONGO_URI);

//seed the data
const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    //create a admin user
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "admin54321",
      role: "admin",
    });

    const userID = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    await Product.insertMany(sampleProducts);
    console.log("Product data seeded !");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
