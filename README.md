# User Management API

**Author: Mokwa Moffat Ohuru**

A RESTful API for managing user data with MongoDB, Express, and Node.js.

## Overview

This application provides a complete CRUD (Create, Read, Update, Delete) interface for user management. It follows a clean architecture pattern with separation of concerns:

- **Models**: Define data structure
- **Controllers**: Handle HTTP requests/responses
- **Services**: Implement business logic
- **Routes**: Define API endpoints

## Prerequisites

- Node.js (v14+)
- MongoDB Atlas account
- npm or yarn
- Postman (for API testing)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd user-management-api
```

2. Install dependencies
```bash
npm install
```

3. Install nodemon globally (if not already installed)
```bash
npm install -g nodemon
```

4. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=<AppName>
```

Example format (replace with your own credentials):
```
PORT=5000
MONGO_URI=mongodb+srv://yourusername:<your_password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=YourAppName
```

## MongoDB Connection

This application uses MongoDB Atlas as its database. To set up your own connection:

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string and replace `<username>`, `<password>`, and other placeholders with your actual credentials
6. Add the connection string to your `.env` file as shown above

Note: If your password contains special characters, they must be percent-encoded.

## Running the Application

Start the server with nodemon for development (automatically restarts on file changes):
```bash
nodemon src/server.js
```

Or use the npm script if configured in package.json:
```bash
npm run dev
```

For production:
```bash
npm start
```

The API will be available at `http://localhost:5000`

## API Endpoints

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| POST   | /api/users    | Create a new user     |
| GET    | /api/users    | Get all users         |
| GET    | /api/users/:id| Get user by ID        |
| PUT    | /api/users/:id| Update user           |
| DELETE | /api/users/:id| Delete user           |

## Testing the API with Postman

[Postman](https://www.postman.com/) is a popular API client that makes it easy to test your API endpoints.

### Setting up Postman

1. Download and install Postman from [postman.com](https://www.postman.com/downloads/)
2. Create a new collection for this project
3. Add requests for each endpoint

### Example Postman Requests

#### Create a User (POST)
- URL: `http://localhost:5000/api/users`
- Method: `POST`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

#### Get All Users (GET)
- URL: `http://localhost:5000/api/users`
- Method: `GET`

#### Get User by ID (GET)
- URL: `http://localhost:5000/api/users/:id` (replace `:id` with an actual user ID)
- Method: `GET`

#### Update User (PUT)
- URL: `http://localhost:5000/api/users/:id` (replace `:id` with an actual user ID)
- Method: `PUT`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "name": "John Updated",
  "email": "john@example.com",
  "age": 31
}
```

#### Delete User (DELETE)
- URL: `http://localhost:5000/api/users/:id` (replace `:id` with an actual user ID)
- Method: `DELETE`

### Postman Collection

You can also import a pre-configured Postman collection:

1. In Postman, click "Import" button
2. Select "Link" tab
3. Paste this link: `https://www.getpostman.com/collections/[your-collection-id]` (if you have one)
4. Or create your own collection by clicking "New Collection" and adding the requests described above

## Alternative: cURL Commands

If you prefer using the command line, here are equivalent cURL commands:

#### Create a User
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
```

#### Get All Users
```bash
curl http://localhost:5000/api/users
```

#### Get User by ID
```bash
curl http://localhost:5000/api/users/[user-id]
```

#### Update User
```bash
curl -X PUT http://localhost:5000/api/users/[user-id] \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated", "email": "john@example.com", "age": 31}'
```

#### Delete User
```bash
curl -X DELETE http://localhost:5000/api/users/[user-id]
```

## Project Structure

```
src/
├── config/
│   └── db.js           # Database connection
├── controllers/
│   └── userController.js # Request handlers
├── middlewares/
│   └── errorMiddleware.js # Error handling
├── models/
│   └── userModel.js    # User schema
├── routes/
│   └── userRoutes.js   # API routes
├── services/
│   └── userService.js  # Business logic
├── app.js              # Express app setup
└── server.js           # Entry point
```

## Error Handling

The API includes centralized error handling middleware that catches exceptions and returns appropriate HTTP responses.

## License

[MIT](LICENSE)