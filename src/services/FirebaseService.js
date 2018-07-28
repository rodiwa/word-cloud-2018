import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBL3w2IhCmrzfR3Ze0_6c1lVOxFBD368gk",
  authDomain: "wordee-e6ac5.firebaseapp.com",
  databaseURL: "https://wordee-e6ac5.firebaseio.com",
  projectId: "wordee-e6ac5",
  storageBucket: "wordee-e6ac5.appspot.com",
  messagingSenderId: "5871169658"
}

export default firebase.initializeApp(config)
