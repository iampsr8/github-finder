import {FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'
function Footer() {
    const footerYear=new Date().getFullYear()
  return (
      <footer className="footer p-10 bg-gray-700 text-primary-content footer-center ">
          <div >
              <p className="text-xs text-slate-200">&copy;{footerYear} Prateek Rath</p>
              <p className="text-xs align-middle">
                  <a href='https://www.linkedin.com/in/prateek-rath-9a9779219/' className='p-2'><FaLinkedin className='inline text-base' /></a>
                  <a href='https://twitter.com/iampsr8' className='p-2'><FaTwitter className='inline text-base' /></a>
                  <a href='https://www.instagram.com/i_am_psr8/' className='p-2'><FaInstagram className='inline text-base' /></a></p>
          </div>
    </footer>
  )
}

export default Footer