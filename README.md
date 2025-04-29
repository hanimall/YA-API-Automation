# Case Study - API Automation Tests

This project contains automated tests for The Cat API (https://thecatapi.com/), implemented as part of a technical case study.

## Project Structure

```
.
├── __tests__/
│   └── catApi.test.js    # Test file
├── utils/
│   └── apiClient.js      # Custom API client
├── .github/
│   └── workflows/
│       └── test.yml      # GitHub Actions workflow
├── .env                  # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Project configuration
└── README.md             # Documentation
```
├

## Continuous Integration

This project uses GitHub Actions for continuous integration. The workflow:

- Runs on every push to main branch and pull requests
- Tests against multiple Node.js versions (14.x, 16.x, 18.x)
- Uses npm caching for faster builds
- Securely handles API keys using GitHub Secrets

To set up GitHub Actions:

1. Go to your repository settings
2. Navigate to "Secrets and variables" > "Actions"
3. Add a new secret named `CAT_API_KEY` with your API key

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A The Cat API account (to obtain an API key)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/YA-API-Automation.git
cd YA-API-Automation
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file at the root of the project and add the following line:

```
CAT_API_KEY=your_api_key_here
```

You can get a free API key from [https://thecatapi.com/signup](https://thecatapi.com/signup)

### 4. Run the tests

```bash
npm test
```

---


## ✅ Test Cases

| Test Description                                 | Endpoint                        | Method |
|--------------------------------------------------|---------------------------------|--------|
| Fetches a list of cat breeds                     | `/breeds`                       | GET    |
| Fetches images for a specific breed              | `/images/search?breed_ids=beng` | GET    |
| Adds an image to favourites                      | `/favourites`                   | POST   |
| Lists all favourites                             | `/favourites`                   | GET    |
| Removes an image from favourites by favourite ID | `/favourites/{favourite_id}`    | DELETE |

---

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## Author

- Hani BOURAS
- han.bouras@gmail.com

---

## License

This project is for demonstration purposes only.
