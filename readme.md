# Make a Herd of Cats 🐱

## Description

Make a Herd of Cats is a single-page web application that allows users to browse cat images by breed, add their favorite cats to a personal favorites list, and remove them if desired. This application uses The Cat API and demonstrates asynchronous JavaScript, modular code structure, and dynamic DOM manipulation.

The project was built using JavaScript, Axios, Bootstrap, HTML, and CSS.

---

## Features

* Search for cats by breed
* View cat images in a responsive Bootstrap card layout
* Add cats to a favorites list
* Remove cats from favorites
* Load additional cats using pagination
* Fully responsive design using Bootstrap

---

## Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6 Modules)
* Axios
* The Cat API

---

## How It Works

This application communicates with The Cat API using Axios to send asynchronous HTTP requests.

It uses:

* GET requests to retrieve cat breeds and images
* POST requests to add favorites
* DELETE requests to remove favorites

The application uses async/await to handle asynchronous operations and ensure proper execution order.

JavaScript modules are used to separate concerns:

* api.js handles API requests
* ui.js handles DOM rendering
* main.js handles application logic and event listeners

---

## Learning Objectives Demonstrated

This project demonstrates:

* Asynchronous programming with async/await
* Working with external APIs
* JavaScript modules and imports
* Event handling
* DOM manipulation
* Responsive design using Bootstrap
* Understanding of the JavaScript event loop

---

## Installation and Setup

1. Clone this repository
2. Open the project folder in VS Code
3. Open index.html with Live Server
4. Use the application in your browser

---

## Future Improvements

* Add loading spinner while fetching data
* Add animations to cards
* Add search by temperament
* Improve error handling
* Store favorites locally

---

## Author

Created by Kenzie Crawford

---

## Acknowledgements

* The Cat API
* Bootstrap Documentation
* Axios Documentation
