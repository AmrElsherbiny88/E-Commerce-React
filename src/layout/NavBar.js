import React , {useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import { BsLightbulbFill} from 'react-icons/bs'
const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);


  return (
    <>
       


      <Container fluid className='d-flex mb-2 '>
       
         
          
          <Col xl={11} lg={11} md={11} sm={11} className='mt-2'>
    
              <Col xl={1} lg={1} md={1} sm={1}>
                <a href='https://amr-elsherbiny-5r94.vercel.app/' className={` ${theme}`}><h2>AmrElsherbiny</h2></a>  
              </Col>
           
            </Col>
          

          <Col xl={1} lg={1} md={1} sm={1} className='d-flex mt-3 ms-auto'>
             <BsLightbulbFill  className={`lightToggle me-3 ${setTheme}`} id='light' onClick={toggleTheme}/>
          </Col>
        
      </Container>
    </>
  )
}

export default NavBar