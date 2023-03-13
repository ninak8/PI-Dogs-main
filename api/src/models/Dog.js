const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      height_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span_min: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span_max: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      img: {
        type: DataTypes.STRING,
        defaultValue:
          "https://us.123rf.com/450wm/vasiffeyzullazadeh/vasiffeyzullazadeh1811/vasiffeyzullazadeh181100673/114363976-icono-de-vector-de-cabeza-de-perro.jpg",
      },
    },
    {
      timestamps: false,
    }
  );
};
