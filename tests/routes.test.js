const esmImport = require('esm')(module);

const app = esmImport('../app');
const request = esmImport('supertest')(app);

describe('Test API version 1', () => {
  it('Should connect to the API', async () => {
    await request
      .get('/api/v1')
      .expect(200)
      .then(response => {
        expect(response.text).toContain('Hello world from API route');
      });
  });

  it('Should return a list of countries', async () => {
    await request
      .get('/api/v1/countries')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body[0]).toHaveProperty('name');
      });
  });

  it('Should create a new bucket', async () => {
    const data = {
      cities: [1, 2, 3],
      country: 1,
      cost: 10000,
      owner: 'Test user',
    };

    await request
      .post('/api/v1/save-bucket')
      .send(data)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('id');
      });
  });
});
