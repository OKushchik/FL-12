let emailUser = 'user@gmail.com';
let passUser = 'UserPass';
let emailAdmin = 'admin@gmail.com';
let passAdmin = 'AdminPass';
let password;
let email = prompt('Enter your Email please');
console.log(email);
if (email.length === 0) {
    alert('canceled');
} else if (email.length < 5) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com' ) {
    password = prompt('prompt for a password');
} else {
    alert('I don’t know you');
}
if (password.length === 0) {
    alert('canceled');
}
if ( email === emailUser && password === passUser || email === emailAdmin && password === passAdmin ) {
    alert('correct password');
    let changePass = confirm('Do you want to change your password ?');
        if (changePass === true) {
           let oldPass = prompt('write the old password ');
            if (oldPass === passUser && email === emailUser || oldPass === passAdmin && email === emailAdmin){
                let newPass = prompt('write the new password ');
                if (newPass.length === 0) {
                    alert('canceled');
                } else if (newPass.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let confirmPass = prompt('enter it again please');
                        if (confirmPass === newPass){
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
            }
        } else {
            alert('You have failed the change.');
        }
} else {
    alert('Wrong password');
}