import { useState } from "react"


const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = ()=>{
      let payload ={email, password}
      handleLogin(payload)
    }

    return(
        <div>
            <h2>Login</h2>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email"  />
            <br />
            <br />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
            <br />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export {Login}