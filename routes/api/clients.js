const express = require("express");
const { check, validationResult } = require("express-validator");
const Clients = require("../../model/Clients");
const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  try {
    const clients = await Clients.find();

    if (!clients) {
      return res.status(400).json({ msg: "There are no clients" });
    }
    res.json(clients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("cnic", "cnic is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, cnic, description } = req.body;

    try {
      let clients = await Clients.findOne({ email });
      if (clients) {
        return res
          .status(400)
          .json({ error: [{ msg: "Client already exists" }] });
      }

      clients = new Clients({
        name,
        email,
        cnic,
        description,
      });

      await clients.save();
      res.json({ msg: "Client is registered successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
