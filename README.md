# MERN Stack CRUD Application

Welcome to the **MERN Stack CRUD Application**!
This project is a basic implementation of a CRUD (Create, Read, Update, Delete) application for managing a products database stored in MongoDB. Currently, the backend is fully functional, and the frontend will be available soon.

## What's New

- Basic navbar and CreatePage styles available now!
- The codebase is now highly modularized, making it easier to maintain and extend.
- The entire backend application is ready for the frontend to consume, with well-defined API endpoints and robust error handling.

## Features

- **Create**: Add new products to the database.
- **Read**: Retrieve and display product details.
- **Update**: Modify existing product information.
- **Delete**: Remove products from the database.

## Tech Stack

- **MongoDB**: Database
- **Express.js**: Backend Framework
- **React**: Frontend Library (Coming Soon)
- **Node.js**: Runtime Environment

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mern-crud-app.git
   cd mern-crud-app
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT = 5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

## API Endpoints

- **GET** `/api/products` - Retrieve all products
- **GET** `/api/products/:id` - Retrieve a single product by ID
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update an existing product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID

## Future Enhancements

- Implement the frontend using React
- Add user authentication and authorization
- Improve error handling and validation
- More features for both frontend and backend are on the way!

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

Happy Coding! 🚀
