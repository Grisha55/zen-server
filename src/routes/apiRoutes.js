import { data } from '../../frontend/js/data/data.js';
import { writeFile } from 'fs/promises';

export const routes = [
  {
    method: "GET",
    endpoint: "/data/meta",
    handler: async (req, res) => {
      const metaData = data.meta;
      res.writeHead(200, { 'Content-Type': 'application/json' })
         .end(JSON.stringify({ meta: metaData }));
    }
  },
  // ... другие роуты
];