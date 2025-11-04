const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// DB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.log("❌ Mongo Error:", err));

// Schema
const Item = mongoose.model("items", { name: String });

// CRUD APIs
app.get("/", (req, res) => res.send("API Working ✅"));

app.post("/item", async (req, res) => {
    const item = new Item({ name: req.body.name });
    await item.save();
    res.send(item);
});

app.get("/item", async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
