"use client"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "../styles/style-range.css"
import Image from 'next/image'

const Header = () => {
    return (
        <div className='py-6 flex justify-center'>
            {/* <span className='orange_gradient text-center text-3xl py-5'> tranviethoang.com</span> */}
            <Image
                src="/assets/images/logo.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className=''
            />
        </div>


    )
}

export default Header
