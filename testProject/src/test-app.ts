import * as http from "http";
import * as os from 'os';

const hostname = os.hostname();
const port = 3000;
const server = http.createServer((req, res) =>
  {
    res.write("Hello TypeScript World on Node.js!\n");
    res.end();
  }
);
server.listen(port);
console.log(`http://${hostname}:${port}`);