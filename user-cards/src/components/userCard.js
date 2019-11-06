import React from 'react';


const UserCard = props => {
    console.log('card', props.location);
    return(
        <div className="card">
        {/* <img src={props.image} /> */}
        <h1>{`Name: ${props.name}`}</h1>
        <h3>{`Username: ${props.login}`}</h3>
        <p>{`Location: ${props.location}`}</p>
        <p>{`Profile: ${props.html_url}`}</p>
        <p>{`Followers: ${props.followers}`}</p>
        <p>{`Following: ${props.following}`}</p>
        <p>{`Bio: ${props.bio}`}</p>
      </div>
    )
}

export default UserCard;