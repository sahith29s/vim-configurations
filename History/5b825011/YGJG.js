import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return 
 <>
 <nav className={styles.nav}>
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"> <li>About</li></Link>
            <Link href="/contact"> <li>contact</li></Link>
            <Link href="/blog"> <li>Blogs</li></Link>
            
            
            
            
          </ul>
        </nav>

 
  <Component {...pageProps} />


 </> 
}
