# SoloNoMo - Front-End

## Description

SoloNoMo is a travel application designed for solo travelers to find travel companions. This repository contains the front-end code built using React and Chakra UI.

## Features

- User Authentication (Sign Up, Login)
- View and search for trips
- Join trips as a participant
- View and manage user profile
- Responsive design

## Technologies Used

- React
- Chakra UI
- Axios
- React Router
- Vite

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/marlisapee/solonomo-frontend
   ```

2. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

## Configuration

1. Ensure you have the backend server running on `http://localhost:8080`. If it's running on a different port, update the `vite.config.js` file to match the backend server URL:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

## Usage

1. Sign up or log in to the application.
2. View the list of available trips.
3. Search for trips using the search bar.
4. Join a trip as a participant.
5. View and update your profile.

## License

MIT License
