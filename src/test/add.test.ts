import { add } from '../utils.js';
import { describe, it, expect } from '@jest/globals';
import app from '../server.js';
import request from 'supertest';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('Test the Get /test?code=', () => {
  it('should return test hello', async () => {
    const response = await request(app)
      .get('/test?code=hello')
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('test hello');
  });
  it('should return test awawa', async () => {
    const response = await request(app)
      .get('/test?code=awawa')
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('test awawa');
  });
});
