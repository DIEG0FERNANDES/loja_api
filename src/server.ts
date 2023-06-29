import dotenv from 'dotenv';
import { connection } from 'mongoose';
import { app } from './app';

dotenv.config();

const APP_PORT = process.env.APP_PORT || 3001;
const server = app.listen(APP_PORT, () => console.log(`App running on port ${APP_PORT}`));

// https://media.licdn.com/dms/image/C4D22AQG5e9LGG8GF1Q/feedshare-shrink_800/0/1672234265577?e=2147483647&v=beta&t=4iO9sBF5B2Bp4cdsVS1i2dw7Xu0M0a8-1-6tXIMoDng
type OtherNodeJSSignals = 'beforeExit' | 'disconnect' | 'exit' | 'rejectionHandled' | 'uncaughtException' | 'uncaughtExceptionMonitor' | 'unhandledRejection' | 'warning' | 'message' | 'multipleResolves' | 'worker';

const events: (NodeJS.Signals | OtherNodeJSSignals)[] = [
  'exit',
  'SIGINT',
  'SIGUSR1',
  'SIGUSR2',
  // 'uncaughtException',
  'SIGTERM'
];

events.forEach((e) => {
  process.on((e), () => {
    server.close();
    connection.close();
  });
});