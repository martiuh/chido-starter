import React from 'react'
import { Link } from 'chido'
import Helmet from 'react-helmet'

import '../css/normalize.css'
import './Layout.scss'
// import EstaticoLink from './EstaticoLink'

export default ({ children }) => (
  <header>
    <nav className='navbar'>
      <Helmet>
        <link href='https://fonts.googleapis.com/css?family=Staatliches' rel='stylesheet' />
      </Helmet>
      <Link to='/'>Dinapedia</Link>
      <Link to='/mambo'>Mambo</Link>
    </nav>
    {children}
  </header>
)
