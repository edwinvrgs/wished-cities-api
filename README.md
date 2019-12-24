## API for Wished Cities app

### Features
- API versioning.
- PostgreSQL as database.
- Sequelize for database management.
- Tests with `jest`.
- A Dockerfile for easy dockerizing.

### Project structure
- All the basic structure of the express boilerplate.
- In the `routes` folder an `api` folder, inside of it one folder per version (eg. `v1`).
- A database folder with all the related configuration.

### Try it!
In your local:
- Clone the project
- Create 2 databases in PostgreSQL (one for development and one for testing).
- Create a .env file for the database environment (you can use the `.env.example` as a reference).
- `npm install`. Install dependencies.
- `npm run db:prepare`. Run migrations and seeders.
- `npm start`... If you want to test: `npm test`.
- Play around!
