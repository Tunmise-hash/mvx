import React from 'react'
import { Link } from 'react-router-dom'

export const HomeCard = ({item:{id,image,name,rating,time,starring,genres,tags,link}}) => {return(<>
<div className='box'>
    <div className='coverImage'>
        <img src = {image} alt =''/>
        </div>
        <div className = 'content flex'>
            <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
                </div>
                <label>{rating}</label>
                <span>GP</span>
                <label>{time}</label>
                
                <div className = 'cast'>
                    <h4>
                        <span>Starring</span>
                        {starring}
                    </h4>
                    <h4>
                        <span>Genres</span>
                        {genres}
                    </h4>
                    <h4>
                        <span>Tags</span>
                        {tags}
                    </h4>
                    </div>
                    <button className='primary-btn'>
        <i className='fas fa-play'></i>PLAY NOW
        </button>
        </div>
        
        <div className='playButton row'>
<Link to = {`/singlepage/${id}`}>
    <button>
        <div className='img'>
        
            <img src = 'p31.png' alt ='' class = 'change'/>
        </div>
        WATCH TRAILER  'https://www.netflix.com/in/title/81107576'
    </button>
</Link>
        </div>
        </div>
        </div>
        </>
        )
    }