import React from 'react';
import image from '../images/transportation.jpg'

function About() {
    return (
        <div className='App'>
            <div className='Background'>
                <div className='Background-image'>
                    <header className='App-header'>
                        <h1 className='title'>Ecotrek</h1>
                        <h2 className='subtitle'>About</h2>
                    </header>
                    <div className='page'>
                        <div className='Body-text'>
                            Transportation is a leading cause for global warming, worsening air quality and the diminishing ozone layer. 
                            Fossil fuel emissions from transportation contribute to an estimated 20% of global greenhouse gas emissions each year. 
                            Ecotrek's objective is to present users with the amount of carbon emitted in their travels. 
                            Users can shift their focus towards eco-friendly travel by comparing their emissions to the number of trees required to offset their carbon.
                        </div>
                        <img src={image} className='About-image' alt='transportation modes'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;