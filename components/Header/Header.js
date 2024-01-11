import React from 'react'
import Link from 'next/link'

const Header = () => {
    return(
        <header>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/Dashbord'>Dashbord</Link>
                <Link href='/Contact'>Contact</Link>
                <Link href='/About'>About</Link>
            </nav>
        </header>
    )
}
export default Header