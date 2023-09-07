const express = require("express"); //calls our http server
const cors = require("cors"); //to call this server from any other origin
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(
  cors({
    origin: true,
  })
);

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  //   const username = "Rahul";
  console.log(username);
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",

      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "4a2d880c-1ec7-44e6-8b83-4fc910faec14" },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
    // return res.status(200).json({ error: "Authentication failed", e });
  }
});

app.listen(PORT);
