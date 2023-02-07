const formLogin = document.querySelector(".login-form");
const formAlert = document.querySelector(".form-alert");


formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    
 
    try {
        const { email } = req.body.email;
            await axios.get("/api/forms/login",{ 
            email: email,
            password: password
            })
        
            if (!email ) {
                return res.send = ("email is invalid");
            }
            else {
                const {password} = req.body.password; 
                if (email.password !== password) {
                    return res.send = ("Login is notsuccessfully");
                } 
                res.status(201).send("login success");
            }       
    
            
             
        
            formAlert.innerHTML = `success it works!!`;
        }
    catch (err) {
        formAlert.style.display = "block";
        formAlert.innerHTML = ` There was an error..... <br> ${err}`;
    }
});