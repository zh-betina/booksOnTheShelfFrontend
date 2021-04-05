const signIn = [
    {
        name: "userId",
        labelTxt: "Your user ID",
        type: "number",
        placeholder: "User ID"
    },
    {
        name: "password",
        labelTxt: "Please, leave the field below empty. We are working to make the REAL user account creation possible.",
        type: "password"
    }
]

const signUp = [
    {
        /*name: "nickname",
        labelTxt: "Your nickname",
        type: "text"*/
        name: "email",
        labelTxt: "Your e-mail",
        type: "email"
    },
    {
        name: "password",
        labelTxt: "Password",
        type: "password"
    }
]

export { signIn, signUp }