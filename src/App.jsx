import React, { useEffect, useState } from "react"
import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import "./style.css"
import products from "./assets/data.json"
import { Home } from "./pages/Home"
import { Catalog } from "./pages/Catalog"
import { Modal } from "./components/Modal"
import { Api } from "./Api"
import { onUpdated } from "vue"


const smiles = ["^_^", "=)", "O_o", ";(", "^_O", "@_@", "-_-"]

const App = () => {
  let [user, setUser] = useState(localStorage.getItem("user8"))
  const [token, setToken] =useState(localStorage.getItem('token8'))
  const [modalActive, setModalActive]=useState(false)
  const [api, setApi] = useState(new Api(token))
  const [goods, setGoods] = useState([])
  
  const handleUpdateUser = (updateUser) => {
    api.updataUserInfo(updateUser).then((newUser)=> setUser(newUser))
 }
  useEffect(() => {
    // console("Hello!")
    // console.log(token)
    if (token) {
        // загрузить данные с сервера
        api.getProducts()
            .then(res => res.json())
            .then(data => {
              setGoods(data.products)})
            }
 }, []) 

  useEffect(() => {
    // console.log("Change token")
    setApi(new Api(token))
    setUser(localStorage.getItem("user8"))
  }, [token])

  useEffect(()=> {
     if (!user) {
      localStorage.removeItem('token8')
      setToken(null)
     }
  }, [user])
  useEffect(() => {
    if (token) {
      api.getProducts()
      .then(res => res.json())
      .then(data => {
        setGoods(data.products)})
    }
  }, [api])

  return ( 
    <>
     <div className="container">
      <Header 
        user = {user}
        setUser={setUser} 
        products={products} 
        setModalActive={setModalActive}
        handleUpdateUser = {handleUpdateUser}
        />
        <main>
        {user ? <Catalog data={goods} /> : <Home data={smiles} />}
      </main>
      <Footer />
     </div>
     <Modal isActive={modalActive} setState={setModalActive} api ={api} setToken={setToken}/>
     
    </> 
  )
}

export {
  App,
}