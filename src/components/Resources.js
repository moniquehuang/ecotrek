import React from 'react';
import owid from '../images/ourworldindata.png';
import doe from '../images/depofenergy.jpg';
import epa from '../images/epa.jpg'

function Resources() {
    return (
        <div className='App'>
            <div className='Background'>
                <div className='Background-image'>
                    <header className='App-header'>
                        <h1 className='title'>Ecotrek</h1>
                        <h2 className='subtitle'>Resources</h2>
                    </header>
                <div className='Resources-page'>
                    <div className='resource' style={{marginTop: '10vh'}}>
                        <a href='https://ourworldindata.org/grapher/co2-transport-mode?tab=table' target='_blank'>
                            <img src= {owid} className='Resources-images'/>
                        </a>
                        <div className='Resources-text'>
                                Carbon emission data organized by transportation mode.
                        </div>
                    </div>
                    <div className='resource'>
                        <a href='https://afdc.energy.gov/data/10310' target='_blank'>
                            <img src= {doe} className='Resources-images'/>
                        </a>
                        <div className='Resources-text'>
                                Average fuel economy sorted by major vehicle categories.
                        </div>
                    </div>
                    <div className='resource'>
                        <a href='https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#seedlings' target='_blank'>
                            <img src= {epa} className='Resources-images'/>
                        </a>
                        <div className='Resources-text'>
                            Calculate number of seedlings to plant to offset a certain amount of carbon emissions.
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Resources;