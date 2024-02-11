// Import required dependencies
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
// Create an instance of the Express application
const app = express();

app.use(cors());

// Define a route to fetch data from the MySQL database
app.get('/api/cars', async (req, res) => {
    try {
        // Create a MySQL connection
        const connection = await mysql.createConnection({
            host: '172.17.0.3',      // Hostname of the MySQL database container
            user: 'tarkangel',          // MySQL username (replace with your actual username)
            password: '000000',         // MySQL password
            database: 'first_database'  // MySQL database name
        });

        // Execute a SQL query to select all rows from the cars table
        const [rows, fields] = await connection.execute('SELECT * FROM cars');

        // Send the retrieved data as a JSON response
        res.json(rows);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data from database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define a route to fetch data of a specific car by ID
app.get('/api/cars/:id', async (req, res) => {
    try {
        // Create a MySQL connection
        const connection = await mysql.createConnection({
            host: 'cars_database',      // Hostname of the MySQL database container
            user: 'tarkangel',          // MySQL username (replace with your actual username)
            password: '00000',         // MySQL password
            database: 'first_database'  // MySQL database name
        });

        // Execute a SQL query to select the car with the specified ID
        const [rows, fields] = await connection.execute('SELECT * FROM cars WHERE id = ?', [req.params.id]);

        // Check if the car with the specified ID exists
        if (rows.length === 0) {
            res.status(404).json({ error: 'Car not found' });
            return;
        }

        // Send the retrieved data as a JSON response
        res.json(rows[0]);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data from database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define the port for the Express server to listen on
const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
