
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj0aGN0tk17uRjg_GDxBePdrIfbKqBWIU",
  authDomain: "social-event-react-project.firebaseapp.com",
  projectId: "social-event-react-project",
  storageBucket: "social-event-react-project.appspot.com",
  messagingSenderId: "52221662348",
  appId: "1:52221662348:web:e29c59062c53fc074097a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth