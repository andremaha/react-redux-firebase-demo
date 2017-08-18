import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDvgOxQEnYg36l7tZQGdH74EAO2cQLhNzA',
  authDomain: 'fir-quickstart-988d6.firebaseio.com',
  databaseURL: 'https://fir-quickstart-988d6.firebaseio.com/'
}

firebase.initializeApp(config)
const database = firebase.database()

export default database