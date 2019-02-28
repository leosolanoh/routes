import React from 'react';
import {  Link } from 'react-router-dom';

const Profile = (props) => {
  
  return (
    <div>
      Profile <br/>
          <Link to= {{
                    pathname:`${props.match.url}/posts`
              }}>Take me to /profile/posts
          </Link>
    </div>
  )
}

export default Profile
