const request = require('supertest');
const app = require('../src/app.js');

describe('Test routing', () => {
    test('It should response homepage GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('Hello world!');
    })

    test('It should return users list', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('example');
    });
})

