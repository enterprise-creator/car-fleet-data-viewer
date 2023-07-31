# Car Fleet Data Viewer  🚗🚗🚗


Car Fleet Data Viewer is a web application that allows users to view and manage car fleet data using Firebase and React. The application provides an interactive table view for the car fleet data, and authenticated users can edit certain fields and update the data in the Firestore database.


![Screenshot 2023-07-31 at 10 00 41 AM](https://github.com/enterprise-creator/car-fleet-data-viewer/assets/60580989/2a5a8ae4-62a8-49bc-a114-e5f993caa464)

## Features

View car fleet data in an interactive table.
Edit fields (e.g., Load ID, Shipper, Pickup Date, Delivery Date, Origin, Destination) in the table and update the data in the Firestore database.
User authentication using Firebase Authentication

## Technologies

* React: Front-end framework for building the user interface.
* Firebase Firestore: Cloud-based NoSQL database for storing car fleet data.
* Firebase Authentication: For user sign-in and account creation.
* Ag-Grid React: A feature-rich datagrid library for displaying tabular data.
* HTML, CSS: Basic structure and styling of the application.

## Main components

### App Component
The App component serves as the main entry point of the application. It handles user authentication using Firebase Authentication and manages the overall structure of the user interface. This component controls the user's sign-in state and conditionally renders either the PrintDocuments component (for authenticated users) or the SignInBox component (for non-authenticated users).

### PrintDocuments Component
The PrintDocuments component is responsible for displaying the car fleet data in an interactive table using the Ag-Grid React library. It receives the car fleet data (documents array) as a prop from the App component. Users can view details such as Load ID, Shipper, Pickup Date, Delivery Date, Units, Origin, Destination, Distance, and Instructions. 

Features of the PrintDocuments Component:

* Interactive Table: The component utilizes Ag-Grid React to create an interactive table, allowing users to view and manipulate car fleet data efficiently.

* Editable Cells: Cells in the table are editable, enabling users to modify data directly within the table. Editing a cell triggers the corresponding value setter function to update the data in Firestore.

* Handling Cell Value Changes: The component implements three functions (handleCellValueChanged, handleOriginValueChanged, and handleDestinationValueChanged) to handle changes in cell values. Depending on the cell being edited, the relevant function updates the data in Firestore accordingly.

### SignInBox Component
The SignInBox component provides a reusable sign-in and account creation form for users. It receives email, password, setEmail, setPassword, handleSignIn, and handleCreateAccount as props from the App component.

## How to Set up Firebase

Create a Firebase project at https://firebase.google.com.
Update the Firebase configuration in src/App.js and src/PrintDocuments.js with your Firebase project credentials.



## Running the React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

