const { Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;



const getTemperament = async () => {
  const getAPI = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;

  const arrApi = await getAPI
    .map((elem) => {
      if (elem.temperament !== undefined) return elem.temperament.split(", ");
    })
    .flat();
    //me devuelve un arr con todos los temps por separado

  const uniqueTemperaments = new Set(arrApi.filter((elem) => elem !== undefined));
  return uniqueTemperaments;
};

const getTemps = async () => {
  const infoTemps = await Temperament.findAll();
  return infoTemps;
};

module.exports = {
  getTemperament,
  getTemps,
};
