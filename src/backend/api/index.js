let express = require("express");
let server = express();
const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get("/api/hello", (req, res) => {
  res.status(200).send("Message from the server");
});
server.listen(PORT, () => console.log(`listening on port ${PORT}`));