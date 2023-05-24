const firebase = require("firebase")
const firebaseConfig = {
  apiKey: "AIzaSyBDy2CJsH84Xp9PzqmNRwJ3KyixuCkYoOg",
  authDomain: "tutorial-1247e.firebaseapp.com",
  projectId: "tutorial-1247e",
  storageBucket: "tutorial-1247e.appspot.com",
  messagingSenderId: "1055769188566",
  appId: "1:1055769188566:web:a075d8e26a1e94412d5177",
  measurementId: "G-NS5NMZ514E"
};


firebase.initializeAoo(firebaseConfig)
const db = firebase.firestore()
const User = db.collection("Users")

module.exports = User