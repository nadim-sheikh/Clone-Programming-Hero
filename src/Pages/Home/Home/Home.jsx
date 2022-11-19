import React from 'react';
import BatchTime from '../BatchTime/BatchTime';
import Benefits from '../Benefits/Benefits';
import CourseFullInfo from '../CourseFullInfo/CourseFullInfo';
import CourseInfo from '../CourseInfo/CourseInfo';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurInfo from '../OurInfo/OurInfo';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <div  className='bg-[#090A27] mt-28'>
            <BatchTime />
            <Benefits/>
            </div>
            <CourseInfo/>
            <CourseFullInfo/>
            <OurInfo/>
        </div>
    );
};

export default Home;