import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import { Logo, TopNav, Footer } from '../components';
import { useRouter } from 'next/router'
import styless from '../styles/buttons.module.css'


export default function Home() {
  //setText from search Box
  const [searchText, setSearchText] = useState('')

//console.log(setSearchText)

const router = useRouter()
//click function from button
const handleClick = (e) => {
  e.preventDefault()
     router.push(`https://google.com/search?q=${searchText}`)
   }
//click feeling lucky function
const hamdleLuckClick =(e) =>{
  e.preventDefault()
  router.push('https://perfects.engineering')
}
  return (
    <div>
      <TopNav/>
    <div className={styles.container}>
    
    {/*Logo svg Components*/}
    <Logo/>

      <input 
      className={styles.srchBox} 
      type='text' 
      onChange  ={e => setSearchText(e.target.value)}/>
      {/*Button Div  */}
      <div>
          <button className={styless.googleSchBtn}
             onClick={(e) => handleClick(e, `https://google.com/search?q=${searchText}`)}
             >Google Search</button>
          <button className={styless.feelLuckBtn}
          onClick={(e) => hamdleLuckClick(e, 'https://perfects.engineering')}>I'm Feeling Lucky</button>
      </div>
      <div className={styles.languages}>
        <p>Google Offered In:</p>
        <p className={styles.glang}>Hausa</p>
        <p className={styles.glang}>Igbo</p>
        <p className={styles.glang}>Edo</p>
        <p className={styles.glang}>Yoruba</p>
        <p className={styles.glang}>Nigerian Pidgin English</p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
