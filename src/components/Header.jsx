import logo from '../assets/images/logo.png'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header className=' flex place-content-between items-center mb-8 px-4 sm:px-20 pt-6'>
        <Link to="/"><img src={logo} alt="Logo" className='h-15'/></Link>
        <NavBar />
    </header>
  )
}

