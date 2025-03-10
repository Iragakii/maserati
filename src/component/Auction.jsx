import React from 'react'
import { Link } from 'react-router-dom'

function Auction() {
  return (
    <>
    <div className="tit-nav">
        
            <span className='sp-au'>Options</span>
            <div className="form-s">
                <select class="form-select-1" id="year" name="year">
                <option value="">Years</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                <select class="form-select-2" id="trans" name="trans">
                    <option value='Transmission'>Transmission</option>
                    <option value='All'>All</option>
                    <option value='Automatic'>Automatic</option>
                    <option value='Manual'>Manual</option>
                </select>
                <select class="form-select-3" id="body-style" name="body-style">
                    <option value='Body Style'>Body Style</option>
                    <option value='All'>All</option>
                    <option value='Coupe'>Coupe</option>
                    <option value='Convertible'>Convertible</option>
                    <option value='Hatchback'>Hatchback</option>
                    <option value='Sedan'>Sedan</option>
                    <option value='SUV'>SUV</option>
                    <option value='Truck'>Truck</option>
                    <option value='Van'>Van</option>
                    <option value='Wagon'>Wagon</option>
                </select>
            </div>
           
        <div className="tit-right">
                <Link to="#" className='sp-end'><span>Ending Soon</span></Link>
                <Link to="#" className='sp-end'><span>Newly listed</span></Link>
                <Link to="#" className='sp-end'><span>No reserve</span></Link>
                <Link to="#" className='sp-end'><span>Lowest mileage</span></Link>
                <Link to="#" className='sp-end'><span>Closest to me</span></Link>
         </div>
        
    </div>
    <div className="data">
        
    </div>
    </>
  )
}

export default Auction