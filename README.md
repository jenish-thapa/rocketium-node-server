# Node.js Project with Dummy JSON Data

## Overview

This project demonstrates a simple Node.js server that fetches dummy JSON data, stores it, processes it based on query parameters, and serves it via an API endpoint. The project features basic filtering and sorting capabilities. Logging is implemented using Winston, providing insights into server operations, including requests to undefined endpoints.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jenish-thapa/rocketium-node-server.git
   cd rocketium-node-server
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   ```bash
   cp .env.example .env
   ```

### Running the Project

1. **Fetch and Initialize Data**
   <br>
   You just need to run this once while setting up the project.
    <br>
   ```bash
   npm run get-data
   ```

3. **Start the Server**

   ```bash
   npm run start
   ```

   The server will be available at http://localhost:3030 by default.
   <br><br>
   **_NOTE:_**: You can customize the port on which the server runs by setting the `PORT` variable in the `.env` file. To do this, add the following line to your `.env` file:

   ```text
   PORT=your-custom-port
   ```

   After updating the .env file, restart the server for the changes to take effect.

## API Documentation

[View API Documentation](https://documenter.getpostman.com/view/31053140/2sA3kdBJKJ){:target="_blank"}
