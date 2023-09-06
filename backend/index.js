const express = require("express"); //calls our http server
const cors = require("cors"); //to call this server from any other origin

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
  })
);

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
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
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
