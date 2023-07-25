const serviceHost = process.env.MY_DATABASE_SERVICE_HOST;
  const user = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const databaseName = process.env.POSTGRESQL_DATABASE
  const connectionString =
    `postgresql://${user}:${password}@${serviceHost}:5432/${databaseName}`;
  connectionOptions = { connectionString };

  const pool = new Pool(connectionOptions);