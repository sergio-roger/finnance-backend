import { App } from './app';

const PORT = Number(process.env.PORT) || 6900;
const server = new App(PORT);
server.listen();
