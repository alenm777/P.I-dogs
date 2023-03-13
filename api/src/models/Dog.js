 //En esta línea, se importa el objeto DataTypes desde la biblioteca Sequelize.
 
 const { DataTypes } = require('sequelize');


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // exporto una función que define el modelo de base de datos con el objeto sequealize

  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    weight: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING(500),
    }
  }, { timestamps: false });
};