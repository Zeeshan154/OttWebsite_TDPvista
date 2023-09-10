          const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

function logincall() {
    let input = document.getElementById("logininput").value;
    let patern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    let registerdatabase = localStorage.getItem("logindata");
    if(registerdatabase == null){
      swal("Sorry , You have not registered");
    }
    else{
      if (input.match(patern)) {
      console.log(input);
      console.log(registerdatabase);
      if(input == registerdatabase){
          swal("Successfully Login.");
      setTimeout(() => {
        location.href="/index.html";
      }, 2000);
      }
      else{
        swal("Email not Matched !");
      }
    } else {
      swal("Wrong information", "Please fill your correct email !");
    }
    }
    
  }
  function forgotpassword(){
    localStorage.clear();
    setTimeout(() => {
      location.href="/register.html";
    }, 1000);
    
  }