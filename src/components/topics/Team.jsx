import React from 'react'
import "./player.css"
import teamData from "./teamData.json"
const Team = (props) => {
    
    return (
      
    <div className='cardBlock'>
            
            {teamData.map((post) => {
                return (
                  <div id="card">
                    <div className="card-img">
                      <img src={post.photo} alt="img" />
                    </div>
                    <div className="card-title">{post.name}</div>
                    <div className="des">
                      <p>
                        <span>Role :</span>
                        {post.role}
                      </p>
                      <p>
                        <span>DOB : </span>
                        {post.dob}
                      </p>
                      <p>
                        <span>Batting style : </span>
                        {post.battingStyle}
                      </p>
                      <p>
                        <span>Bowling Style : </span>
                        {post.bowlingStyle}
                      </p>
                    </div>
                  </div>
                );
            })}
      
    </div>
  );
}

export default Team