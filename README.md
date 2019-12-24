## API for Wished Cities app

### Notes
- API versioning with separate config and environments for each version.
- Sequelize for database management.
- Tests with `jest`.

### Project structure
- All the basic structure of the express boilerplate.
- In the `routes` folder an `api` folder,
    - inside of it one folder per version (eg. `v1`),
    - inside of each version folder an `env` file and an `constants` file.
- A database folder with a `sql` folder inside (containing all the sql files) and a `index.js` file containing all the functions required to setup the database.

### Try it!
In your local:
- Clone the project
- `npm start`
- Play around!
- If you want to test: `npm test`
