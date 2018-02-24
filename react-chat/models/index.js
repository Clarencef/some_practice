import Sequelize from 'sequelize';
const Op = Sequelize.Op;

const sequelize = new Sequelize('slack', process.env.POSTGRESS_DB_NAME, process.env.POSTGRESS_DB_PASSWORD, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like,
  },
});

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Team: sequelize.import('./team'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
