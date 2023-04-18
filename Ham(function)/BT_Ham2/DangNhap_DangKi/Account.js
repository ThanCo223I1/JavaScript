class Account{
    id
    username
    password
    phoneNumber
    email

    constructor(id, username, password, phone, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.phoneNumber = phone;
        this.email = email;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
}