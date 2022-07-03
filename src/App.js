import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  return (
    <div className="App">
   <button onClick={()=>{

let serverLink="https://wtc.tu-chemnitz.de/krb/saml2/idp/SSOService.php?target=https://62c1768e9c3edd79197a71fb--symphonious-youtiao-4e8c91.netlify.app/shibboleth/&providerId=https://62c1768e9c3edd79197a71fb--symphonious-youtiao-4e8c91.netlify.app/"
  axios.get(serverLink, {
    
  }).then((result) => {
      console.log("resssssssssss",result)
  
     
  }).catch((err) => {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong while fetching requests!',
    
    })
     
  });;

   }}>Test</button>
    </div>
  );
}

export default App;
