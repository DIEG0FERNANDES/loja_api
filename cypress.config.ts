import { defineConfig } from 'cypress';
import { Db, MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db: Db | null = null;

(async () => {
  const databaseUri = `${process.env.DATABASE_DOMAIN}/${process.env.DATABASE_NAME}`;
  const connection = await MongoClient.connect(databaseUri);
  db = connection.db(process.env.DATABASE_NAME);
})();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('task', {
        async truncateCollection() {
          await db?.collection('ceps').deleteMany({});
          return null;
        }
      });
    },
  },
  video: false
});