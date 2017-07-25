import React from 'react';

export default class Storage {
  constructor(name) {
    this.name = name;
  }

    updateUserToken(token) {
     window.localStorage.setItem('token',token)
    }

checkLogin(login, password){
    const userLogin = window.localStorage.getItem('login')
    const userPass = window.localStorage.getItem('password')
    if ((login===userLogin)&&(password==userPass)){
       this.updateUserToken(login)
       return true
    }
    return false
}

userToken() {
    return   window.localStorage.getItem('token')
}

registerUser(login, password) {
      window.localStorage.setItem('login', login)
      window.localStorage.setItem('password', password) 
}
}