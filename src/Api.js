class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru"
        this.group = "sm8"
        this.token = token
    }
    signUp(body) {
        body.group = this.group
        return fetch(`${this.path}/signup`, {
           method: "POST",
           headers: {
            "Content-Type": "application/json"
           },
           body: JSON.stringify(body)
        })
    }
    signIn(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
             "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
         })
    }
    getMeUser() {
        return fetch(`${this.path}/v2/${this.group}/users/me`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    updataUserInfo(updateUser) {
        return fetch(`${this.path}/v2/${this.group}/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(updateUser)
        })
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
}
export {
    Api, 
}