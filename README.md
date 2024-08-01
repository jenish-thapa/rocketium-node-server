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

   ```bash
   npm run get-data
   ```

2. **Start the Server**

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

## API Endpoints

## Base URL

The base URL for the API is: http://localhost:3030

## Endpoints

### `GET /api/data`

Retrieve filtered, sorted, and paginated data.

#### Query Parameters

- **`field`**: Filter data by a specific field. The field name and value should be specified as `field=value`. For example, `field=name&value=Afzal Ghaffar`.
- **`sortBy`**: Specify the field to sort by. For example, `sortBy=name`.
- **`order`**: Specify the sort order. Possible values are `asc` for ascending and `desc` for descending. Default is `asc`. For example, `order=desc`.
- **`limit`**: Limit the number of results returned. For example, `limit=10`.
- **`offset`**: Skip a number of results. Useful for pagination. For example, `offset=20`.

#### Additional Information

- **Case Insensitivity**: The filter operation is case-insensitive by default. For example, a filter for `name=afzal ghaffar` will match `Afzal Ghaffar`.

#### Example Requests

1. **Filter by name and language, and sort by version:**

   ```http
   GET /api/data?name=Afzal Ghaffar&language=Sindhi&sortBy=version
   ```

2. **Filter by language, sort by version in descending order with an offset of 4 and limit of 5:**
    ```http
    GET /api/data?language=sindhi&sortBy=version&order=desc&offset=4&limit=5
    ```
