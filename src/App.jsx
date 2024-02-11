import { useEffect } from "react"
import Dashboard from "./components/Dashboard"
import { useDispatch } from "react-redux"
import { setJwtToken, setUser } from "./slices/authSlice" 

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('jwtToken')
    const user = localStorage.getItem('user')

    if (token && user) {
      dispatch(setJwtToken(token))
      dispatch(setUser(JSON.parse(user)))
    }
  }, [dispatch])

  return (
    <Dashboard />
  )
}

export default App
