import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/home/App';
import Contact from './components/page/Contact';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Kontak</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={App} />
            <Route path="/contact" component={Contact} />
        </div>
    </BrowserRouter>
)

export default AppRouter;