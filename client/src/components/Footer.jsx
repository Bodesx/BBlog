import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin,} from 'react-icons/bs';
import FlipLink from './stagger';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-gray-700 dark:bg-gradient-to-r  from-slate-900 via-black to-gray-900'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              href='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white '
            >
             <FlipLink className="text-sm" >Bodesx Blog</FlipLink>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About me' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://bodesx.github.io/Bodesx/'
                  target='_blank'
                  rel='portfolio'
                >
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Bodesx&apos;s Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://linkedin.com/in/lawanson-bode-07378b246'
                  target='_blank'
                  rel='linkedin'
                >
                  linkedin
                </Footer.Link>
                <Footer.Link href='https://www.instagram.com/bodesx?igsh=MWx3cjhqcjk3a3Z2aA=='>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='https://www.biosxtech.com'>Biosxtech</Footer.Link>
                <Footer.Link href='/projects'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Bodesx's blog"
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='https://web.facebook.com/lawanson.bode' icon={BsFacebook} />
            <Footer.Icon href='https://linkedin.com/in/lawanson-bode-07378b246' icon={BsLinkedin} />
            <Footer.Icon href='https://www.instagram.com/bodesx?igsh=MWx3cjhqcjk3a3Z2aA==' icon={BsInstagram}/>
           
          </div>
        </div>
      </div>
    </Footer>
  );
}
