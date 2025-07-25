import { createServer } from './app.js';
import { HOST, PORT } from './config/constants.js';

const server = createServer();

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});