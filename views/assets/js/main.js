const form = document.getElementById("form");
const fullname = document.getElementById("full-name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phone-number");
const discordtag = document.getElementById("discord-tag");
const motivation = document.getElementById("motivation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const phonenumberValue = phonenumber.value.trim();
  const discordtagValue = discordtag.value.trim();
  const motivationValue = motivation.value.trim()

  if (usernameValue === "") {
    setErrorFor(username, "Full Name cannot be blank");
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  }

  if (phonenumberValue === "") {
    setErrorFor(password, "Phone Number cannot be blank");
  }

  if (discordtagValue === "") {
    setErrorFor(password2, "Discord Tag cannot be blank");
  }
    if (motivationValue === "") {
    setErrorFor(motivation, "Motivation + Experience cannot be blank");
  }
    if(motivationValue !== "" && discordtagValue !== "" && phonenumberValue !== "" && isEmail(emailValue) && emailValue !== "" && usernameValue !== "") {
        $.post("/apply",{fullname: usernameValue,email: emailValue, phonenumber: phonenumberValue, discordtag: discordtagValue, motivation: motivationValue});
        Swal.fire({
     		icon: 'success',
     		title: 'Succes!',
    		text: 'Your apply has succesfully been submitted'
    })
    }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}