//YOUR FIREBASE LINKS

var  firebaseConfig = {
      apiKey: "AIzaSyBJi77iuwCoV_C2g1xi96R3FZn72VJ9u6w",
      authDomain: "project-93-a7fad.firebaseapp.com",
      databaseURL: "https://project-93-a7fad-default-rtdb.firebaseio.com",
      projectId: "project-93-a7fad",
      storageBucket: "project-93-a7fad.appspot.com",
      messagingSenderId: "941772782415",
      appId: "1:941772782415:web:8df9c16f6847d23d96233a"
    };
    
   
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}

function send(){

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

like:0,
message:msg,
name:user_name



});

document.getElementById("msg").value = " ";

}