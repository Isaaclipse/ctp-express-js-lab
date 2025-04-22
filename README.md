# CTP API Lab

Express.js API Lab
Overview

Welcome to the Express.js API Lab! In this lab, you'll learn how to build a simple RESTful API using Express.js. You will create an API with basic GET and POST routes, which will allow you to retrieve and send data in JSON format.

By the end of this lab, you'll:

1. Understand how to set up an Express.js server.

2. Be able to create and test RESTful API routes (GET, POST).

3. Get hands-on experience with the software development life cycle (SDLC) and how an API fits into the broader context of full-stack applications.

This lab will also introduce you to how backend APIs work and how they interact with frontend applications, which is crucial as you move forward with your full-stack projects.
Getting Started

Before we dive into building the API, make sure you have the following prerequisites installed:

1. Node.js and npm (Node Package Manager)

2. Postman or cURL (to test your API routes)

Step 1: Clone the repository

First, clone this repository to your local machine:

git clone https://github.com/yourusername/express-api-lab.git
cd express-api-lab

Step 2: Install Dependencies

In the project directory, run the following command to install the necessary dependencies:

npm install

Step 3: Run the Server

Now that the dependencies are installed, start the Express.js server by running:

node server.js

Your server should now be running on http://localhost:3000.
API Routes
GET Request - Retrieve all items

To fetch all items from the API, send a GET request to the following endpoint:

GET http://localhost:3000/api/items

This will return a JSON array of items:

[
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" }
]

POST Request - Add a new item

To add a new item to the API, send a POST request to the following endpoint with a JSON body containing the new item details:

POST http://localhost:3000/api/items

Example JSON body:

{
  "id": 3,
  "name": "New Item"
}

The API will respond with the new item and a status code of 201 indicating that the resource was successfully created:

{
  "id": 3,
  "name": "New Item"
}

Testing the API
Using Postman:

    Open Postman and create a new request.

    For GET requests:

        Set the method to GET and enter the URL http://localhost:3000/api/items.

    For POST requests:

        Set the method to POST, enter the URL http://localhost:3000/api/items, and provide a JSON body like this:

        {
          "id": 3,
          "name": "New Item"
        }

Using cURL:

    GET Request:

curl http://localhost:3000/api/items

POST Request:

    curl -X POST http://localhost:3000/api/items -H "Content-Type: application/json" -d '{"id":3, "name":"New Item"}'

Understanding the Code

Check out the code in the server.js file to see how the Express.js routes are set up:

    GET /api/items: Retrieves all the items from the mock data (stored in data.json).

    POST /api/items: Adds a new item to the mock data.

We use the built-in express.json() middleware to handle JSON data sent in POST requests, making it easy to process incoming request bodies.
Software Development Life Cycle (SDLC) and API Design

In this lab, we emphasize the Software Development Life Cycle (SDLC):

    Planning: Before starting development, it's important to plan the routes and data structure. Here, we decided on two basic API routes (GET and POST) to interact with a simple set of mock data.

    Development: We then moved on to building the API, focusing on defining the routes and handling requests.

    Testing: After development, we tested the routes using Postman or cURL to ensure they work as expected.

    Deployment: After successful testing, you could deploy your API to platforms like Heroku or AWS to make it accessible to a frontend application.

Optional Extensions

If you finish early or want to expand your knowledge, here are some optional tasks:

    PUT and DELETE Routes: Implement the ability to update and delete items from the data.

    Error Handling: Add error handling for invalid requests, such as returning a 404 if an item doesn't exist.

    Data Persistence: Instead of using static mock data, integrate a database (e.g., MongoDB) to persist your data between server restarts.

Conclusion

By the end of this lab, you should have a solid understanding of how to build and test RESTful APIs using Express.js. This knowledge is an essential building block for your final full-stack projects, where you’ll integrate frontend frameworks like React with backend APIs to create full-fledged web applications.

Good luck, and feel free to reach out if you run into any issues!
