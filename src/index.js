import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Components

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home </Link>  
                    <Link to="/posts">Posts </Link> 
                    <Link to={{
                        pathname: '/profile',
                        // hash:'#leo',
                        // search:'?profile=true'
                    }}> Profile </Link>
                    <hr />
                </header>
                <Route path='/' exact component={Home} />
                <Route path='/posts' exact component={Posts} />               
                <Route path='/posts/:id/:username' component={PostItem} />
                <Route path='/profile' component={Profile} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


