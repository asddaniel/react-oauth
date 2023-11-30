import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'
import './App.css'

function App() {
  
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)
  return (
    <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    {/* </GoogleOAuthProvider> */}
      <div className="font-bold text-gray-800 text-2xl text-center pt-5 pb-2"> React application</div>
   <div className="flex justify-center items-center">
                <Login />
   </div>
   </GoogleOAuthProvider> 
    </>
  )
}

export default App
