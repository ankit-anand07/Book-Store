import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../contacts/AuthProvider';
import { FaBarsStaggered } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user);
    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navItems here
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Shop', path: '/shop' },
        { label: 'Sell Your Book', path: '/admin/dashboard' },
        { label: 'Blog', path: '/blog' },
    ];

    return (
        <div className="h-17 bg-green-600">
            <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? 'bg-blue-700 shadow-md z-50' : 'bg-transparent'}`}>
                <nav className="container mx-auto flex justify-between items-center py-4 lg:px-24 px-4">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                        <FaBlog className="inline-block" /> Books
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className="hidden md:flex space-x-8 mx-auto">
                        {navItems.map(({ label, path }) => (
                            <li key={path}>
                                <Link to={path} className="block text-base text-white uppercase cursor-pointer hover:text-gray-300">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* BTN FOR LG DEVICES */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                        {/* {
                            user? user.email : ""
                        } */}
                    </div>

                    {/* Menu button for mobile devices */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Nav items for small devices */}
                {isMenuOpen && (
                    <ul className="flex flex-col space-y-4 px-4 py-4 bg-blue-700 md:hidden">
                        {navItems.map(({ label, path }) => (
                            <li key={path}>
                                <Link to={path} className="block text-base text-white uppercase cursor-pointer hover:text-gray-300">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            <main className="pt-20">
                {/* Your main content here */}
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-white text-3xl">Welcome to the Bookstore</h1>
                    {/* Additional content */}
                </div>
            </main>
        </div>
    );
};

export default Navbar;
