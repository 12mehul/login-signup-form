const formSignup = document.querySelector(".signup-form");
const usersList = document.querySelector(".users");
const userInput = document.querySelector(".user-input");
const userEmail = document.querySelector(".email-input");
const userPassword = document.querySelector(".password-input");
const formAlert = document.querySelector(".form-alert");

async function showUsers() {
    try {
        const {
            data: { users },
        } = await axios.get("/api/forms");
        if (users.length < 1) {
            usersList.innerHTML = "<h3> No users available</h3>";
            return;
        }
        const allUsers = users.map((user) => {
            const {username, _id: userID, email, password } = user;
            return;
    }).join('');
    usersList.innerHTML = allUsers;
    }
    catch (err) {
        usersList.innerHTML = `<h3> There was an error..... <br> ${err}</h3>`;
    }
}
showUsers();


formSignup.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = userInput.value;
    const email = userEmail.value;
    const password = userPassword.value;
    try {
        await axios.post("/api/forms", { 
            username: username, 
            email: email,  
            password: password 
        })
        .then((response) => {
            window.alert(`Successfully registered...`); 
        });
        showUsers();
        userInput.value = "";
        userEmail.value = "";
        userPassword.value = "";
        formAlert.innerHTML = `success it works!!`;
    }
    catch (err) {
        formAlert.style.display = "block";
        formAlert.innerHTML = ` There was an error..... <br> ${err}`;
    }
});