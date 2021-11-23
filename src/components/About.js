import React from 'react';
import image from '../images/transportation.jpg'

function About() {
    return (
        <div className="App">
            <div className='Background'>
                <div className='Background-image'>
                    <header className="App-header">
                        <h1 className='title'>Ecotrek</h1>
                        <h2 className='subtitle'>About</h2>
                    </header>
                    <div className='page'>
                        <div className='Body-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <img src={image} className='About-image'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;