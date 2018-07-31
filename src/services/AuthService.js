import firebase from 'firebase'
import firebaseConfig from './FirebaseService'
import { addUser, isUserExists, saveCurrentWorkSpaceDB, syncWorkspaceDB } from './DatabaseService'

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const data = [{ word: 'word' }] // test data
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(async result => {
      const uid = result.user.uid
      const isExistingUser = await isUserExists({ uid })

      console.log(isExistingUser)

      if (!isExistingUser) {
        addUser(uid)
        saveCurrentWorkSpaceDB({ data, uid })
      } else {
        syncWorkspaceDB({ data, uid })
      }

      // when done, update redux state with logged in user details + data
    })
    .catch(err => {
      console.log('Unable to login', err)
      console.error(err)
    })
}

export const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('signed out')
    })
    .catch((err) => {
      console.log('Unable to logout', err)
      console.error(err)
    })
}

export const isLoggedIn = () => {
  return firebase.auth().currentUser
}
