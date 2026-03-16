const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const DATA_FILE = path.join(__dirname, "data", "responses.json");



// ---------- SAVE SURVEY ----------
app.post("/submit-survey", (req, res) => {

  console.log("Received survey:", req.body);

  const newResponse = req.body;

  let responses = [];

  try {

    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, "utf8");

      if (fileData.trim().length > 0) {
        responses = JSON.parse(fileData);
      }
    }

  } catch(err) {

    console.error("JSON read error:", err);
    responses = [];

  }

  responses.push(newResponse);

  fs.writeFileSync(DATA_FILE, JSON.stringify(responses, null, 2));

  res.json({ success: true });

});



// ---------- GET SURVEY DATA ----------
app.get("/survey-data", (req, res) => {

  try {

    if (!fs.existsSync(DATA_FILE)) {
      return res.json([]);
    }

    const fileData = fs.readFileSync(DATA_FILE, "utf8");

    if (!fileData.trim()) {
      return res.json([]);
    }

    const responses = JSON.parse(fileData);

    res.json(responses);

  } catch(err) {

    console.error(err);
    res.json([]);

  }

});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
