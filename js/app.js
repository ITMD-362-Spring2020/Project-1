

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let  email = document.getElementById("email");
    let  phone = document.getElementById("phone");
    const joinBtn = document.getElementById("joinBtn");
    const clearBtn = document.getElementById("clearBtn");
    
    
    
    
    joinBtn.addEventListener("click", () => {

        if (firstName.value == ""){
            alert("Please enter a First Name");
          }
         else if (lastName.value == ""){
            alert("Please enter a Last Name");
          }
        else if (phone.value == ""){
            alert("Please enter Phone Number");
          }
        else if (email.value == ""){
            alert("Please enter an email address");
          }
        else if {
            alert("Thanks for joining our newsletter");
        }
        
    });
    
    clearBtn.addEventListener("click", () => {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
    });
    
