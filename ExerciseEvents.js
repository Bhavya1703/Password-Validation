/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

let checkfield = () => {
  var Username = document.getElementById("username").value;
  var Password = document.getElementById("password").value;

  if (Username == null || Username == "") {
    document.getElementById("message").innerHTML =
      "**Please Enter Valid Username!!!";
    return false;
  }
  if (Password.length <= 6) {
    document.getElementById("message1").innerHTML =
      "**Password should be more than 6 characters!!!";
    return false;
  }
  if (Password.length >= 12) {
    document.getElementById("message1").innerHTML =
      "**Password should not be more than 12 characters!!!";
    return false;
  }
  /*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
  var Confirm_Password = document.getElementById("Confirm-Password").value;
  if (Password.length !== Confirm_Password.length) {
    alert("**Password incorrect, enter the above password!!!");
  } else return false;
};

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
let text = document.querySelector("input");
let password = document.querySelector("input");
let button = document.querySelector("button");

text.addEventListener("keyup", (e) => {
  if (text.checked == null || text.checked === "")
    button.style.display = "none";
  else button.style.display = null;
});
password.addEventListener("keyup", (e) => {
  if (password.value.checkfield.checked == null || password.checked === "")
    button.style.display = "none";
  else button.style.display = null;
});
/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
checkfield();
