const {cityRepository} = require('../repository/index');

class cityService{
    constructor(){
        this.cityRepository = new cityRepository();
    }
    async createCity(data){
        try {
            const city = await this.cityRepository.getcity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async deleteCity(cityid){
        try {
            const response = await this.cityRepository.deletecity(cityid);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async updateCity(cityid,data){
        try {
            const city = this.cityRepository.updatecity(cityid,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async getCity(cityid){
        try {
            const city = this.cityRepository.getcity(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

module.exports = cityService;