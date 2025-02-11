const http = require("http");
const userRequestHandler = require('./_05chunksListner')

const server = http.createServer(userRequestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is started at [http://localhost:${PORT}]`);
});
