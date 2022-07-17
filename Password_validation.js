var enter_the_pass = document.getElementById('enter_pass')
var repeat_the_pass = document.getElementById('confirm_pass')
var display_message = document.getElementById('message')
var reset_pass = document.getElementById('reset')

var final_click = document.getElementById('final_submit')
final_click.addEventListener('click', match_the_password)

function match_the_password(){
    var enter_field_value = document.getElementById('enter_pass').value;
    if (enter_field_value.length < 8){
        document.getElementById('message').innerHTML = "Password length must be atleast 8 characters"
    }
    if (enter_field_value.length >10){ 
        document.getElementById('message').innerHTML = "Password length must not exceed 10 characters" 
    }
    if (enter_field_value == ""){
        document.getElementById('message').innerHTML = "Password should not be blank"
    }
    if (document.getElementById('enter_pass').value == document.getElementById('confirm_pass').value){
        document.getElementById('enter_pass').value = ""
        document.getElementById('confirm_pass').value = ""
        alert("Password matched")
    }
    else{
        alert("Password is incorrect, please try again")
    }
}

reset_pass.addEventListener('click', reset_the_password)
function reset_the_password(){
    document.getElementById('enter_pass').value = ""
    document.getElementById('confirm_pass').value = ""
}