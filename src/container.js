import { createContainer, Lifetime, asClass, asValue } from 'awilix';
import express, { Router } from 'express';
import Server from './config/server';
import config from './config/env';
import ModelsTest from './modules/Borrow/borrowDao';
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const container = createContainer();
const router = Router();

container.register({
  config: asValue(config),
  bcrypt: asValue(bcrypt),
  uuidv4: asValue(uuidv4),
  jwt: asValue(jwt),
  nodemailer: asValue(nodemailer),
  express: asValue(express),
  router: asValue(router),
});

container.loadModules(
  ['modules/**/*!(Dao$).js', 'middlewares/*!(index).js', 'libs/*!(index).js'],
  {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    cwd: __dirname,
  }
);

container.loadModules(['modules/**/*Dao.js'], {
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asValue,
  },
  cwd: __dirname,
});

// Resolve the registered routes
const routesName = Object.keys(container.registrations).filter((item) =>
  item.match(/Router$/g)
);
const routes = routesName.map((route) => container.resolve(route));



// Association models
const Sequelize = require('sequelize');

const modelName = Object.keys(container.registrations).filter((item) =>
  item.match(/Router$/g)
);
const ModelsTest2 = modelName.map((model) => container.resolve(model));


// register all the routes and the server
container.register({
  routes: asValue(routes),
  server: asClass(Server).singleton(),
  models: asClass(ModelsTest),
});

export default container;
