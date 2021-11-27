const express = require("express");
const connectDB = require("./config/db");
const app = express();
// const path = require("path");

// Connnect Db
connectDB();
// Init middleware
app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/query", require("./routes/api/queries"));
app.use("/api/ibs", require("./routes/api/ibs"));
app.use("/api/clients", require("./routes/api/clients"));

// // Server static assets in production
// if (process.env.NODE_ENV === "production") {
//   //static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
