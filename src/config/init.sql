-- Active: 1730684071005@@127.0.0.1@5432@likeme

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    url VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT DEFAULT 0
);

SELECT * FROM posts

DROP TABLE posts;