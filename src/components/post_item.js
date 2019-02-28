import React from 'react'
import { Link } from 'react-router-dom';

const PostItem = ( props ) => {
 const par = props.match.params;
  return (
     
    <div>
           {`Welcome Mr. ${par.username}`}
           <hr/>
           {`Details   Post No. ${par.id}`}

    </div>
  )
}

export default PostItem

