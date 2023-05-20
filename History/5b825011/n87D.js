import '@/styles/globals.css'
import 

export default function App({ Component, pageProps }) {

  return <>
 <Navbar/> 
  <Component {...pageProps}/>
  
  </>
}

