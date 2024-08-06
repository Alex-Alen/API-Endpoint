**Setup Instructions**\
Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

**Installation**

1. Clone the repository\
`git clone https://github.com/Alex-Alen/API-Endpoint.git`\
`cd API-Endpoint`

2. Install dependencies\
`npm install`

4. Start the server\
`npm start`\
The server should start on the port 3000.

**Database**\
The project is already set up with a link to the MongoDB database, so you don't need to worry about database connectivity. You can start using the database right away without needing to import the sample data manually.


**API Endpoints**\
Get All Users
- URL: /users
- Method: GET
- Description: Retrieve a list of all users.

Responses:
- 200 OK: Returns an array of user objects.
- 500 Internal Server Error: An error occurred while fetching users.

**Error Handling**\
The API includes basic error handling for undefined routes and server errors.
- 404 Not Found: Returned when an undefined route is accessed.
- 500 Internal Server Error: Returned when there is an issue with fetching users from the database.
