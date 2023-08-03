import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = (theme , setTheme) => {
  return (
    <>

<MDBFooter className={`text-center ${theme}`}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='h4'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0d5a07' }}
            href='https://wa.me/201101761785?'
            role='button'
          >
          <MDBIcon far icon="comment-dots" />
          </MDBBtn>

     <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>

           <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/amrelsherbiny20/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/AmrElsherbiny88'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a  className={` ${setTheme}`} href='https://amr-elsherbiny-5r94.vercel.app/'>
          AmrElsherbiny
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer