import React, { useState, useEffect } from 'react';
import './App.css';
import {SignInBox} from './SignInBox'; // Import the SignInBox component

import PrintDocuments from './PrintDocuments'; // Import PrintDocuments

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'; 
import { getFirestore, collection, query, limit, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDYpKDtHuEwU4lKzM1FiIyjxd4d_PqaT6g",
  authDomain: "fir-project-8efcd.firebaseapp.com",
  projectId: "fir-project-8efcd",
  storageBucket: "fir-project-8efcd.appspot.com",
  messagingSenderId: "48133128965",
  appId: "1:48133128965:web:803b53acc6be4a9f85ad6c",
  measurementId: "G-7G197HXJGS"
};

const app = initializeApp(firebaseConfig); // Initialize the Firebase app with the provided configuration
const db = getFirestore(app); // Get a reference to the Firestore database associated with the Firebase app
const auth = getAuth(); // Get a reference to the Firebase Authentication service associated with the Firebase app


const App = () => {

  // State variables to manage user authentication and documents data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // To manage the user's authentication status
  const [documents, setDocuments] = useState([]);
  
  // Function to fetch all documents data from Firestore
  const fetchAllDocuments = async () => {
    try {
      const carsDataRef = collection(db, 'cars_data');
      //const snapshot = await getDocs(query(carsDataRef));
      const snapshot = await getDocs(query(carsDataRef, limit(25)));

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ docId: doc.id, ...doc.data() });
      });

      setDocuments(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }; 

  // useEffect hook to listen for changes in authentication state
  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // User is logged in, fetch data
        fetchAllDocuments();
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);


  // Function to handle user sign-in
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-in
        const user = userCredential.user;
        console.log('Signed in user:', user);
        setUser(user);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Sign-in error:', error.message);
      });
  };

  // Function to handle user sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // User successfully signed out
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Function to handle user account creation
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful account creation and sign-in
        const user = userCredential.user;
        console.log('Created and signed in user:', user);
        setUser(user);
      })
      .catch((error) => {
        // Handle account creation errors
        console.error('Account creation error:', error.message);
      });
  };


  // JSX rendering of the App component
  return (
    <div className="app-container">
      <h1>Firestore Data Viewer</h1>
      {user ? (
        // If the user is logged in, display the PrintDocuments component
        <>
          <div>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
          <PrintDocuments documents={documents} setDocuments={setDocuments} db={db} />
        </>
      ) : (

        // If the user is not logged in, display the SignInBox component
        <SignInBox
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignIn={handleSignIn}
          handleCreateAccount={handleCreateAccount}
        />
      )}
    </div>
  );
};


export default App;