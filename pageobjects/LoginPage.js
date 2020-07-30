
class LoginPage {
    get username() { return $("#user-name")}
    get password() { return $("#password")}
    get login() {return $("#login-button")}


    submit() {
        this.login.click();
    }

}

module.exports = new LoginPage()

//THIS IS A COMMENTARY TO TEST GIT