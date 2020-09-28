import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCzfZTKuiVCMyxxVy7fWUvGGwIXXqQh34g",
    authDomain: "jokester-290420.firebaseapp.com",
    databaseURL: "https://jokester-290420.firebaseio.com",
    projectId: "jokester-290420",
    storageBucket: "jokester-290420.appspot.com",
    messagingSenderId: "221077656939",
    appId: "1:221077656939:web:952279368d7f3600b4282e",
    measurementId: "G-QEM21YYRSW"
  };

  const fire = firebase.initializeApp(config);
  export default fire;