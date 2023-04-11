const express = require("Express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverConfig");
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async () => {

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  
  app.listen(port, () => {
    console.log(`server started at ${port}`);
    const repo = new CityRepository()
    repo.createcity({name:"himanshu"});

  });
};
setupAndStartServer();
