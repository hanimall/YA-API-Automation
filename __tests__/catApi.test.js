const client = require('../utils/apiClient');

describe('Breed Endpoints', () => {
    let breedId;

    test('GET /breeds → should fetch list of breeds and store the first breed ID', async () => {
        const response = await client.get('/breeds');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true); 
        breedId = response.data[0].id; // Keep for next test
    });

    test('GET /images/search?breed_ids → should fetch n images for the selected breed', async () => {
        const limit = 20;
        const response = await client.get(`/images/search?breed_ids=${breedId}&limit=${limit}`);
        expect(response.status).toBe(200);
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[0]).toHaveProperty('breeds');
        expect(response.data[0].breeds[0].id).toBe(breedId);
    });
});
