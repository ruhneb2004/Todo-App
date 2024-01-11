const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { createTodo, updateTodo } = require("../backend/types");
const { todo } = require("../backend/db");
app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wring inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.status(200).json(req.body);
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find();
    res.status(200).json({ todos });
  } catch (err) {
    console.log(err);
    res.status(500).send("Ose");
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wring inputs",
    });
    return;
  }

  const updtTodo = await todo.findOneAndUpdate(
    { _id: req.body.id },
    {
      completed: true,
    },
    { new: true }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.delete("/delete", async (req, res) => {
  const deletePayload = req.body;
  const parsedPayload = updateTodo.safeParse(deletePayload);
  if (!parsedPayload.success) {
    return res.status(500).json({ message: "Some error occured" });
  }

  await todo.findByIdAndDelete({
    _id: req.body.id,
  });
  res.send();
});

app.listen(port);
