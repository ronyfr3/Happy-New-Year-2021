import React from 'react'
import './NewYearCssAnimation.css'

const NewYearCssAnimation = () => {
    const stars = () =>{
        const totalStars = 200;
        const targetDiv = document.querySelector('div');

        for( var i = 0; i < totalStars; i++ ){
            const creatingStars = document.createElement('i');
            const x = Math.floor(Math.random()*window.innerWidth);
            const y = Math.floor(Math.random()*window.innerHeight);
            const sizeOfStars = Math.random() * 4;
            
            creatingStars.style.left = x + 'px';
            creatingStars.style.top =  y + 'px';
            creatingStars.style.width = 1 + sizeOfStars + 'px';
            creatingStars.style.height = 1 + sizeOfStars + 'px';
            
            const duration = Math.random() * 2;
            creatingStars.style.animationDuration = 2 + duration + 's';
            creatingStars.style.animationDelay = duration + 's';

            targetDiv.appendChild(creatingStars);
        }
    }
    stars()
    return (
        <div>
            <h2>Happy New Year <span>2021</span> </h2>
            <h3>CREATED BY @ABDUR RAKIB RONY</h3>  
        </div>
    )
}

export default NewYearCssAnimation
