import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyCSToOhNlwumqR4G4cco5lEwTP1B45Q8ms",
    authDomain: "web-chat-realtime-4c3e2.firebaseapp.com",
    databaseURL: "https://web-chat-realtime-4c3e2.firebaseio.com",
    projectId: "web-chat-realtime-4c3e2",
    storageBucket: "web-chat-realtime-4c3e2.appspot.com",
    messagingSenderId: "482948287644"
};

export const firebaseApp = firebase.initializeApp(config);
