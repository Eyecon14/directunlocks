        // Import the functions from the Firebase v9+ SDK
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
        
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyD2nAw8Z1W7KIIKFvBqsmg2B8Oa0iZx39Y",
            authDomain: "directunlock-cfbc3.firebaseapp.com",
            databaseURL: "https://directunlock-cfbc3-default-rtdb.firebaseio.com",
            projectId: "directunlock-cfbc3",
            storageBucket: "directunlock-cfbc3.appspot.com",
            messagingSenderId: "657888584931",
            appId: "1:657888584931:web:df4723112e4cd61e1851d6",
            measurementId: "G-Y3ZCNRVZCN"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        // Submit button
        const submit = document.getElementById('submit');
        submit.addEventListener("click", function (event) {
            event.preventDefault();

            // Get input values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Create a new user with email and password
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    alert("Account created successfully");
                    window.location.href="login.html"
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Error: " + errorMessage);
                });
        });