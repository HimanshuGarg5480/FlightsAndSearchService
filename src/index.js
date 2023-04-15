const express = require("express");
const bodyParser = require("body-parser");
const {port} = require("./config/serverConfig");
const CityRepository = require('./repository/city-repository')
const Apiroutes = require('./routers/index')

const setupAndStartServer = async () => {

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use('/api',Apiroutes)
  app.listen(port, () => {
    console.log(`server started at ${port}`);
    // const repo = new CityRepository()
    // repo.createcity({name:"himanshu"});

  });
};
setupAndStartServer();
