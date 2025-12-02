# CarRental — Fullstack Car Rental Application 

Car rental application built with the MERN stack and a React + Vite frontend. The project supports role‑based authentication (owner / user), owner dashboards for listing and managing cars, image uploads via ImageKit, booking workflows with availability checks, and a responsive UI built using Tailwind CSS.

## Key Features
- Role-based authentication and authorization (owner / user)
- Owner dashboard: add, edit, toggle availability, and remove cars
- Image upload and optimization via ImageKit
- Booking flow with server-side availability checks
- Search and filtering on the frontend (brand, model, category, transmission)
- Responsive UI with React, Tailwind CSS and animations
- REST API built with Express and MongoDB (Mongoose)

## Tech Stack
- Frontend: React, Vite, Tailwind CSS, Framer Motion
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- File storage / optimization: ImageKit
- Authentication: JWT (token stored client-side)
- Utilities: Axios, react-hot-toast

## Repo Structure (high level)
- `client/` — React + Vite frontend
- `server/` — Express backend, API routes, controllers, and Mongoose models

## Quick Start (local)
Prerequisites: Node.js (16+), npm, MongoDB (local or Atlas)

1. Clone the repo

	git clone <repo-url>
	cd carRental

2. Server: install and configure

	cd server
	npm install

	Create a `.env` file in `server/` with the following variables (example):

	VITE_BASE_URL=http://localhost:5000
	MONGO_URI=your_mongodb_uri
	IMAGEKIT_PUBLIC_KEY=...
	IMAGEKIT_PRIVATE_KEY=...
	IMAGEKIT_URL_ENDPOINT=...

	Start server:

	npm run server

3. Client: install and run

	cd ../client
	npm install
	Create a `.env` file in `client/` (if required) and set `VITE_BASE_URL` to your server URL.
	npm run dev

Open `http://localhost:5173` (or the port shown by Vite) and `http://localhost:5000` for the API.

## Environment Variables
- `server/.env` (example)
  - `MONGO_URI` — MongoDB connection string
  - `JWT_SECRET` — secret used for signing tokens
  - `IMAGEKIT_PRIVATE_KEY`, `IMAGEKIT_PUBLIC_KEY`, `IMAGEKIT_URL_ENDPOINT`

- `client/.env` (example)
  - `VITE_BASE_URL` — API base URL (e.g., `http://localhost:5000`)
  - `VITE_CURRENCY` — currency symbol used in UI

## API Endpoints (selected)
- `POST /api/owner/add-car` — Add a new car (multipart/form-data: image + carData)
- `GET /api/user/cars` — Get all cars
- `POST /api/bookings/check-availability` — Check available cars for date range and location
- `POST /api/bookings/create` — Create a booking

Refer to server controllers and `routes/` for the full list.

## Development Notes
- After adding a new car via the owner dashboard, the app should refresh the shared `cars` state. If you navigate to the cars page and a newly added car does not appear, refresh or ensure the client calls the `fetchCars()` method exposed by the app context.
- For production, return newly created resources from POST endpoints to allow the client to update state without a full re-fetch.

## Deployment
- The backend can be deployed to platforms like Heroku, Render, or Vercel (serverless functions may need adaptation).
- The frontend (Vite) can be deployed to Vercel, Netlify, or similar static hosting with API base URL pointing to the deployed server.

## Contributing
- Fork the repo, create a feature branch, and open a pull request. Follow the existing code style and commit messages.

## License & Contact
- MIT License (or specify your preferred license)
- Contact: add your email or GitHub profile link here

---
