import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link
                    to='/'
                    className="font-semibold text-x1 tracking-tight"
                    >
                    Nightside Tarot
                </Link>
            </div>
            <div className="block">
                <button
                    onClick={dropDown}
                    className="flex items-center px-3 py-2 text-purple-200 border rounded
                    border-purple-400 hover:text-white hover:border-white">
                        <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            { isVisible ? (
            <div className=" w-full block flex-grow items-center">
                <div className="text-sm lg:flex-grow">
                    <button className="p-3 m-5 bg-purple-400 justify-center">
                        <div>
                            <Link
                                to='/'
                                className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-purple-200 hover:text-white mr-4"
                                >
                                Home
                            </Link>
                        </div>
                    </button>
                    {
                        isAuthenticated ?
                        <>
                            <button className="p-3 m-5 bg-purple-400 justify-center">
                                <div>
                                    <Link
                                        to='/reading'
                                        className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                        text-purple-200 hover:text-white mr-4"
                                        >
                                        Reading
                                    </Link>
                                </div>
                            </button>
                            <button className="p-3 m-5 bg-purple-400 justify-center">
                                <div>
                                    <Link
                                        to='/journal'
                                        className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                        text-purple-200 hover:text-white mr-4'
                                        >
                                        Journal
                                    </Link>
                                </div>
                            </button>
                            <button className="p-3 m-5 bg-purple-400 justify-center">
                                <div>
                                    <Link
                                        to='/signin'
                                        onClick={signOutOnClick}
                                        className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                        text-purple-200 hover:text-white mr-4'
                                        >
                                        Sign Out
                                    </Link>
                                </div>
                            </button>
                        </>
                        :
                        <button className="p-3 m-5 bg-purple-400 justify-center">
                            <div>
                                <Link
                                    to='/signin'
                                    onClick={signInOnClick}
                                    className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-purple-200 hover:text-white mr-4'
                                    >
                                    Sign In
                                </Link>
                            </div>
                        </button>
                    }
                </div>
            </div>
            ) : (
            <></>
            )}
        </nav>
    )
}

export default Navbar
