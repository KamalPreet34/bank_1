const mongoose = require("mongoose");
const express = require("express");
const { authorize } = require("../middleware/authorize");
const { auth } = require("../middleware/auth");
const { moderatorModel } = require("../models/moderator.model");
 
const moderatorRouter = express.Router();
moderatorRouter.use(express.json());
moderatorRouter.post(
  "/add",
  auth,
  authorize(["moderatorr"]),
  async (req, res) => {
    const data = new moderatorModel(req.body);
    await data.save();
    res.send({ msg: "new moderator added" });
  }
);

// DELETE 
moderatorRouter.delete(
  "/deletedata/:id",
  auth,
  authorize(["moderator"]),
  async (req, res) => {
    const dataId = req.params.id;
    await moderatorModel.findByIdAndDelete({ _id: dataId });
    res.send({ msg: "moderator deleted" });
  }
);

module.exports = { moderatorRouter };
