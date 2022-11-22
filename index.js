const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBR8NsJQLC5e4aw_sJyR-LMgJpb-ifvzc8",
    authDomain: "javascript-webbkommunikation.firebaseapp.com",
    projectId: "javascript-webbkommunikation",
    storageBucket: "javascript-webbkommunikation.appspot.com",
    messagingSenderId: "315730968495",
    appId: "1:315730968495:web:15cc4aefc71def99f1395a"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
    .add({
        email: email,
        password: password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
}

const updateData = () => {
    db.collection('users').doc('6caYOiNxwviOJFIQ4Uag')
    .update({
        email: 'ashishisagoodboy1234@gmail.com',
        password: '123456'
    })
    .then(() => {
        alert('Data Updated')
    })
}

const deleteData = () => {
    db.collection('users').doc('6caYOiNxwviOJFIQ4Uag').delete()
    .then(() => {
        alert('Data Deleted')
    })
    .catch((err) =>{
        console.log(err)
    })
}