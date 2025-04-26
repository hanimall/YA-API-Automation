const client = require('../utils/apiClient');

    test('GET /breeds → should fetch list of breeds', async () => {
      const response = await client.get('/breeds');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
