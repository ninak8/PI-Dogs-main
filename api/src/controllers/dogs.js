const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const clearApi = (array) => {
  const clear = array.map((elem) => {
    return {
      id: elem.id,
      img: elem.image.url,
      name: elem.name,
      race: elem.breed_group,
      life_span_min: elem.life_span.split(" - ")[0],
      life_span_max:
        elem.life_span.split(" - ")[1] &&
        elem.life_span.split(" - ")[1].split(" ")[0],
      height_max: elem.height.metric.split(" - ")[1],
      height_min: elem.height.metric.split(" - ")[0],
      weight_min: elem.weight.metric.split(" - ")[0],
      weight_max: elem.weight.metric.split(" - ")[1],
      Temperament: elem.temperament,
      createInDb: false,
    };
  });
  return clear;
};

const clearDB = (array) => {
  const clear = array.map((elem) => {
    return {
      id: elem.id,
      img: elem.img,
      name: elem.name,
      race: elem.race,
      life_span_min: elem.life_span_min,
      life_span_max: elem.life_span_max,
      height_max: elem.height_max,
      height_min: elem.height_min,
      weight_min: elem.weight_min,
      weight_max: elem.weight_max,
      Temperament: elem.Temperaments.map((elem) => elem.name).join(", "),
      createInDb: true,
    };
  });
  return clear;
};


// ******************** FUNCIONES QUE ME AYUDAN ***********************

const getRaces = async () => {
  const racesDB = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"], //traigo el nombre de los temperamentos
    },
  });

  const racesAPI = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;

  // filtro info, la junto y la mando
  const apiClear = clearApi(racesAPI);
  const dbClear = clearDB(racesDB);

  return [...dbClear, ...apiClear];
};

const getRaceByName = async (race) => {
  const raceByNameDB = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });


  const racesAPI = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;
  const dbClear = clearDB(raceByNameDB);
  const apiClear = clearApi(racesAPI);
  const names = [...dbClear, ...apiClear];

  const filteredNames = names.filter(
    (elem) => elem.race == race || elem.name == race
  );

  if (!filteredNames.length) throw Error("Race not found");
  return filteredNames;
};

const getDogIdDB = async (id) => {
  const dogIdDB = await Dog.findAll({
    include: {
      model: Temperament,
      through: {
        attributes: [],
      },
    },
    where: {
      id: id,
    },
  });
  const idDbClear = clearDB(dogIdDB);
  if (!idDbClear.length) throw Error("No results found");
  return idDbClear;
};


const getDogIdAPI = async (id) => {
  const dogIdAPI = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;
  // filtro todos los elems de la api y luego limpio
  const idApi = await dogIdAPI.filter((elem) => elem.id === parseInt(id));

  const newidAPI = clearApi(idApi);
  if (!newidAPI.length) throw Error("No results found");
  return newidAPI;
};

const createDog = async (
  name,
  race,
  life_span_min,
  life_span_max,
  height_min,
  height_max,
  weight_min,
  weight_max
) => {
  const newDog = await Dog.create({
    name,
    race,
    life_span_min,
    life_span_max,
    height_min,
    height_max,
    weight_min,
    weight_max,
  });
  return newDog;
};

const deleteDog = (id) => {};

module.exports = {
  getRaces,
  getRaceByName,
  getDogIdDB,
  getDogIdAPI,
  createDog,
  deleteDog,
};
