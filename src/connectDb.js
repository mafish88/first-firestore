// import the tools we need form our libraries
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import our secret credentials
import { creds } from "./creds.js";

// connect to our firebase project with our creds
initializeApp({
    credential: cert(creds),
});

// once connected, connect to Firestore database
export const db = getFirestore();
