const express = require("express");
const { check, validationResult } = require("express-validator");
const Ibs = require("../../model/Ibs");
const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  try {
    const ibs = await Ibs.find();

    if (!ibs) {
      return res.status(400).json({ msg: "There are no Ibs" });
    }
    res.json(ibs);
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
    check("experience", "experience is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, experience, description } = req.body;

    try {
      let ibs = await Ibs.findOne({ email });
      if (ibs) {
        return res.status(400).json({ error: [{ msg: "Ib already exists" }] });
      }
      ibs = new Ibs({
        name,
        email,
        experience,
        description,
      });

      await ibs.save();
      res.json({ msg: "Ib is registered successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
