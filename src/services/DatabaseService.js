import firebase from 'firebase'
import firebaseConfig from './FirebaseService'

export const addUser = (uid) => {
  const userId = uid
  firebase
    .database().ref(`users/${userId}`)
    .set({ user: userId, isFirstTimeLogin: true })
}

export const isUserExists = ({ uid }) => {
  return new Promise((resolve, reject) => {
    try {
      firebase.database().ref(`users/`).on('value', snapshot => {
        if (!snapshot.val()) {
          return resolve(false)
        }
        if (snapshot.val().hasOwnProperty(uid)) {
          return resolve(true)
        }

        return resolve(false)
      })
    } catch(e) {
      reject(e)
    }
  })
}

export const saveCurrentWorkSpaceDB = ({ data, uid }) => {
  firebase.database().ref(`workspaces/${uid}`).set(data)
}

const clearFirstTimeFlag = () => {

}

export const syncWorkspaceDB = ({ data, uid }) => {
  console.log('syncWorkspaceToDB')
  clearFirstTimeFlag()
  const isWorkspaceEmpty = !!data.length
  const isDBEmpty = firebase.database().ref(`workspaces/${uid}`).on('value', snapshot => {
    console.log('check if DB is empty')
    console.log(snapshot.val())
  })
  // check if first time login
    // create user + set flag isFirstTimeLogin
    // save saved messages to db
  // if already logged in before
    // clear flag - isFirstTimeLogin
    // if no data in DB, create list - save words from workspace to db
    // if data in db && workspace empty, load data to workspace from last list
    // if data in db && workspace !== empty, create new list + save data in db (prpmopt?)
}

export const updateUserData = () => {}