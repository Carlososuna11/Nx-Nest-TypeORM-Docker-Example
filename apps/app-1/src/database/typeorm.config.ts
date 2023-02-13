import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// TODO: Set the config globally in the app
const config = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'my_database',
  ssl: process.env.DB_SSL === 'true',
  env: process.env.NODE_ENV || 'development',
};

const dataSourceOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  ssl: config.ssl ? { rejectUnauthorized: false } : false,
  entities: [join(__dirname, '../models/*{.ts,.js}')],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: ['warn', 'error'],
  logger: config.env === 'production' ? 'file' : 'debug',
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
};

export = dataSourceOptions;
