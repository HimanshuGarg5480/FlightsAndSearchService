const express = require("Express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverConfig");

const setupAndStartServer = async () => {

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:ture}));
  
  app.listen(port, () => {
    console.log(`server started at ${port}`);
  });
};
setupAndStartServer();
