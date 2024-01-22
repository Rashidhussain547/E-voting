import React from 'react';
import aboutImg from '../Assets/Images/flag.webp';
import AppImage from './Images';
import "./Midcomp"

const AboutUs = () => {
    return (
        <>
            <div className="abboutContent">
                <div className="aboutBg">
                    <div className="aboutusText">
                        MAS Veritas is among the earliest testing, inspection, and certification (TIC) businesses to establish a foothold in Karachi, Pakistan's commercial hub. MAS Veritas provides exceptional service to its clients around the country. At MAS Veritas, we strive to bring Pakistan and its industries up to international standards by conducting extensive and comprehensive assessments. This business endeavor aims to strengthen Pakistan's economy by offering job opportunities and increasing financial activity.
                    </div>
                </div>
                <div className="about-img">
                    <AppImage
                        img={aboutImg}
                    />
                </div>
            </div>
        </>
    )
}

export default AboutUs;
