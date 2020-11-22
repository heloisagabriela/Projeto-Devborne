import { createConnections } from 'typeorm';

createConnections().then(() => {
  console.log('🛰  Postgres Started');
});