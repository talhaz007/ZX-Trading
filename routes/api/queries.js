const express = require("express");
const { check, validationResult } = require("express-validator");
const Queries = require("../../model/Queries");
const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  try {
    const queries = await Queries.find();

    if (!queries) {
      return res.status(400).json({ msg: "There are no queries" });
    }
    res.json(queries);
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
    check("phoneNumber", "Phone number is required").not().isEmpty(),
    check("query", "Please ask your query").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phoneNumber, query } = req.body;

    try {
      let queries = {};
      queries = new Queries({
        name,
        email,
        phoneNumber,
        query,
      });

      await queries.save();
      res.json({ msg: "Query is subimtted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
