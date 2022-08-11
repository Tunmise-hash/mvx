import  React from 'react'

export const Ucard = ({item:{id, image, name, time}}) =>{return(<>
<div className='MovieBox'>
    <div className='img'>
        <img src = {image} alt = ''/>
        </div>
        <div className='text'>
            <h3>{name}</h3>
            <span>{time}</span><br/>
            <button className='primary-btn'>
                <i className='fa fa-play'></i>PLAY NOW
            </button>
            </div>
        </div> 
        </>
)
}