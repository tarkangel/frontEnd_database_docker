CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    engine VARCHAR(255) NOT NULL,
    horsepower VARCHAR(255) NOT NULL,
    generation VARCHAR(255) NOT NULL
);

INSERT INTO cars (name, engine, horsepower, generation) VALUES ('A4', '2.0 TFSI', '255HP', 'B9');

