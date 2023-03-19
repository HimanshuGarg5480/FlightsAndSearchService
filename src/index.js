const express = require("Express");
const {port} = require("./config/serverConfig")
const setupAndStartServer = async () => {
  const app = express();
  app.listen(port, () => {
    console.log(`server started at ${port}`);
  });
};
setupAndStartServer();
