//firebase needs thses to figure out on how we r connecting to database
//configuring the app on the front end to link with our firebase which we created on website
var firebaseConfig = {
  apiKey: "AIzaSyBa9UrS6dOUZry33QMnZfSKUFsDUBV6Zj0",
  authDomain: "flappybird-1efe3.firebaseapp.com",
  databaseURL: "https://flappybird-1efe3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flappybird-1efe3",
  storageBucket: "flappybird-1efe3.appspot.com",
  messagingSenderId: "993302118393",
  appId: "1:993302118393:web:f1de0e43d0ecd4d2f14728",
  measurementId: "G-PY08LWYRR2"
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });

const analytics = firebase.analytics();        

db.collection("players").orderBy("score", "desc").limit(5)
.get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr style="margin-left:auto; margin-right:auto; padding: 5px; border: 0px solid black;">
                            <td style="padding: 5px; border: 0px solid black;">${data.name}</td>
                            <td>${data.score}</td>
                      </tr>`;
            let table = document.getElementById('myTable')
            table.innerHTML += row
        })
})
.catch(err=>{
    console.log(`Error: ${err}`)
});

function display(){
          document.getElementById('table').style.display = "block";
}