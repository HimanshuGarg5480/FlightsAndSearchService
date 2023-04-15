const { where, Model } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createcity({ name }) {
        try {
            const c = await City.create({
                name,
            });
            return c;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
    async deletecity({cityid}){
        try {
            await City.destroy(
                {where:{
                    id:cityid
                }} 
            )
            return true;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
    
    async updatecity({cityid,data}){
        try {
            const c = await City.update(data,{
                where:{
                    id:cityid,
                }
            });
            return c;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
    async getcity({cityid}){
        try {
            const c = await City.findByPk(cityid)
            return c;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw(error);
        }
    }
}

module.exports=CityRepository;