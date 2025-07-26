import http from 'http';
import { serverRequestHandler } from './middleware/router.js';
import { DataModel } from './models/dataModel.js';

/**
 * @function createServer
 * @returns {http.Server}
 */

export const createServer = () => {
  DataModel.init();
  return http.createServer(serverRequestHandler);
}