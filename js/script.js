function applyJob(jobName) {
    alert("You have applied for " + jobName + " successfully!");
}

function sendMessage() {
    alert("Your message has been sent successfully!");
}

async function signupUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(window.auth, email, password);
        alert("Account Created Successfully!");
        window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
}

async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(window.auth, email, password);
        alert("Login Successful!");
        window.location.href = "index.html";
    } catch (error) {
        alert(error.message);
    }
}

function searchJob() {
    alert("Search functionality will be available soon.");
}

function getStarted() {
    alert("Welcome to CareerBridge!");
}