import React, { useEffect, useState } from 'react'
import { Api } from '../../Api'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
// import { ModUser } from '../Modal/ModUser'
import { Search } from '../Search/search'
import "./header.css"

export const Header = ({ user, setUser, products, setModalActive , handleUpdateUser}) => {
  // const [user, setUser] =useState(localStorage.getItem("user8"))
  // let user = localStorage.getItem("user8")
  //const [modalActive, setModalActive]=useState(false)
  const [token, setToken] =useState(localStorage.getItem('token8'))
  const [api, setApi] = useState(new Api(token))
  const updateUser = {name : "Татьяна", about: "Ученик"}
  const onClick = () =>{
    handleUpdateUser(updateUser)
  }
  const logIn = (e) => {
    e.preventDefault()
    //   let name = prompt("Как вас зовут?");
    //   if (name) {
    //     localStorage.setItem("user8", name)
    //     setUser(name)
    //   }
    setModalActive(prev => !prev)
  }
  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("user8")
    setUser("")
  }
  useEffect(()=> {
    if (!user) {
     localStorage.removeItem('token8')
     setToken(null)
    }
 }, [user])
   const meUser = (e) => {
    e.preventDefault()
    setApi(new Api(token))
    setUser(localStorage.getItem("user8"))
    // alert(token)
    if (token) {
      // загрузить данные с сервера
        api.getMeUser()
            .then(res => res.json())
            .then(data => {
              alert(data.about)
              {ModUser(data)}
            })
            .catch((err) => console.log(err))
    }
  }
  
  return <header>
    <a href="" className="logo"> <Logo /> </a>
    <Search data={products} />
    {/* <input type="search" placeholder='Поиск' className='search'/>*/}
    <nav className='menu'>
      {user && <a href='' onClick={meUser}>{user}<Button onClick={onClick} text="Изменить"/></a>}
      {!user && <a href='' onClick={logIn} >Войти</a>}
      {user && <a href='' onClick={logOut}>Выйти</a>}
    </nav>
  </header>
} 