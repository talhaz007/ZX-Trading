const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

//@route    Get api/auth
//@desc     Get user
//access    Public, it doesnt require JWT.
// added the 2nd parameter as auth middleware to check the jwt token
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route    POST api/auth
//@desc     Login a user and get Jwt
//access    Public, it doesnt require JWT.
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Password enter a password with 6 or more characters"
    ).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if the user exist
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: [{ msg: "Invalid credentials" }] });
      }
      // match password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ error: [{ msg: "Invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
