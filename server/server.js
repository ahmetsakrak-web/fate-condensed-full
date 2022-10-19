const PORT = require("./utils/config").PORT;
const http = require("http");
const app = require("./app");
const logger = require("./utils/logger");
const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
