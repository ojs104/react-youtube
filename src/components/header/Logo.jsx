import React from 'react'


import { BiFootball } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className='header__logo'>
				<Link to='/'>
					<em><BiFootball/></em>
					<span>football<br /> youtube</span>
				</Link>
			</h1>
  )
}

export default Logo