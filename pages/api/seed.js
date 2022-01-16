import nc from "next-connect";
import Product from "../../models/Product";
import data from "./../../utils/data";
import db from "./../../utils/db";
import User from "./../../models/User";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successFuly" });
});

export default handler;
