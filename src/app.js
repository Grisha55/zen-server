import http from 'http';
import { serverRequestHandler } from './middleware/router.js';
import { DataModel } from './models/dataModel.js';

export function createServer() {
  DataModel.init();
  return http.createServer(serverRequestHandler);
}