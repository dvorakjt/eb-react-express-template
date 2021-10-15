const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets when in production mode
// if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "client", "build")));
// }

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/static/index.html"));
});

//start the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
