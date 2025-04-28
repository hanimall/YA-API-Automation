const client = require('../utils/apiClient');

describe('The Cat API Tests', () => {

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

    describe('Favourites Endpoints', () => {
        let imageId;
        let favouriteId;

        // First, we get a random image
        beforeAll(async () => {
        const response = await client.get('/images/search');
        if (response.status === 200 && response.data.length > 0) {
            imageId = response.data[0].id;
        } else {
            console.error('Failed to get an image for tests.');
        }
        });

        test('POST /favourites → should add an image to favourites', async () => {
            expect(imageId).toBeDefined();

            const payload = {
                image_id: imageId,
            };

            const response = await client.post('/favourites', payload);
            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('id');

            favouriteId = response.data.id; // to delete later
        });

        test('GET /favourites → should include the added image', async () => {
            const response = await client.get('/favourites');
            expect(response.status).toBe(200);
            const match = response.data.find(fav => fav.image_id === imageId);
            expect(match).toBeDefined();
        });

        test('DELETE /favourites/{favourite_id} → should remove the image from favourites', async () => {
            const response = await client.delete(`/favourites/${favouriteId}`);
            expect(response.status).toBe(200);
            expect(response.data.message).toBe('SUCCESS');
        });
    });

});
