# React Posts it

This repository contains a project made while following a React course by Max Schwarzmueller.

## Project Description

This project is a simple blog application that allows users to create, read, and update posts. The application consists of a Node.js backend server and a React frontend client.

## Content

The repository root folder contains two primary folders:

- **backend**: Contains the Node.js backend server code.
- **frontend**: Contains the React frontend client code.

## Features

### Backend

The backend server provides the following features:

- **GET (/)**: Get all posts
- **GET (/:id)**: Get post with specific id
- **POST (/)**: Create new post

### Frontend

The frontend client provides the following features:

- **HOMEPAGE (/)**: Get all posts and render on screen
- **SINGLE POST (:id)**: Get post with specific id and render said post
- **ADD POST (/add)**: Create new post

## System Requirements

To run the project successfully, you'll need:

- Node (installed on your computer)
- Npm

## Instructions

### Backend

1. Open a terminal and navigate to the `backend` folder: `cd backend`
2. Install project dependencies: `npm install`
3. Start the backend server: `npm start`

### Frontend

1. Open a terminal and navigate to the `frontend` folder: `cd frontend`
2. Install project dependencies: `npm install`
3. Start the frontend application: `npm run dev`

## Directory Structure

The project follows a standard directory structure:

- **backend**:

  - `app.js`: Backend server code.
  - `posts.json`: Json file in which data is stored.
  - `data`: Logic for static storage.

- **frontend**:
  - `src`: React frontend code.
    - `components`: Reusable React components along their respective css module.
    - `routes`: Routes (Pages).
    - `main.jsx`: Main Entry point of the application.
  * `public`: Static assets.
