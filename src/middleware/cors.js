import { ALLOWED_ORIGIN } from '../config/constants.js';

export const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

export const preflightRequestHandler = (res) => {
  setCorsHeaders(res);
  res.writeHead(204);
  res.end();
};