/*
    Need to be replaced icons and information given bellow
*/

import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'


export default [
    {
        id: 1,
        icon: <FaCode className='service-icon' />,
        title: 'web development',
        text: 'I am able to develop websites using HTML, CSS, JavaScript or using GatsbyJS.',
    },
    {
        id: 2,
        icon: <FaLaptopCode className='service-icon' />,
        title: 'web application development',
        text: 'I am able to develop web applications using React and NodeJS.',
    },
    {
        id: 3,
        icon: <FaMobileAlt className='service-icon' />,
        title: 'mobile application development',
        text: 'I am able to develop mobile applications using Java, Android for Android apps, Swift for iOS apps and Flutter or Xamarin forms for the cross-platform apps.',
    },

]