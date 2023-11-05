# Reactivities

This is a full-stack web application that allows users to create and join social activities. It uses **React** (React 18 with Typescript) for the front-end, **ASP.NET Core** (.NET 7.0) for the back-end, and **SQLite** for the database.

This project was developed as part of the Reactivities course on Udemy. (https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/)

## Getting Started

To run this project on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed
- Visual Studio 2022 or later
- .NET SDK

### Backend Setup

1. Clone this repository to your local machine.
2. Open the solution file **Reactivities.sln** in Visual Studio.
3. Restore the NuGet packages.
4. Run the backend application.

### Frontend Setup

1. Open a terminal in the `client-app` directory.
2. Install the required npm packages by running: `npm install`.
3. To run this project on your local machine, follow these steps: `npm start.`

### Usage

- Open a web browser and navigate to **http://localhost:3000**.
- Register a new account or log in with an existing one.
- Explore the features of the application, such as creating, editing, deleting, and attending activities, and viewing user profiles.

## Technical Specification

- **Clean architecture**: The project follows the principles of clean architecture (by Robert C. Martin), separating the concerns of the **API**, **application**, **domain**, **persistence** and **infrastructure** layers.
- **RESTful API**: The back-end exposes a RESTful API providing links to related resources and actions.
- **JWT authentication**: The application uses **JSON Web Tokens** (JWT) for authentication and authorization, implementing the **OAuth 2.0** standard.
- **MobX**: The front-end uses **MobX** as the state management library, simplifying the data flow and reactivity of the UI components.
- **Semantic UI**: The front-end uses **Semantic UI React** as the UI framework, providing a consistent and user-friendly interface.

## License

This project is licensed under the MIT License - see the [LICENSE](^1^) file for details.
