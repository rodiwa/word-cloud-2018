import firebase from 'firebase'
import firebaseConfig from './FirebaseService'

export const signIn = () => {
  console.log('signIn')
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // const { uid, displayName } = result
      console.log(result)
      console.log('Logged in now')
      console.log(firebase.auth().currentUser)
      // firebase.database().ref(`user/${uid}`).set({
      //   displayName 
      // })
    })
    .catch(err => {
      console.log('No logged in', err)
      console.error(err)
    })
}

export const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('signed out')
    })
    .catch((err) => {
      console.error(err)
    })
}

export const isLoggedIn = () => {
  return firebase.auth().currentUser
}
