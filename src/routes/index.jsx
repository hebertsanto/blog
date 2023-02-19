import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DefautPage } from '../components/defaulPage';
import { Home } from '../components/home';

import { Blog } from './blog';
import { Contact } from './contact';
import { About } from './about';

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<DefautPage />}>
                     <Route path='/' element={<Home />}/>
                     <Route path='/blog' element={<Blog />}/>
                     <Route path='/contact' element={<Contact />}/>
                     <Route path='/about' element={<About />}/>
                </Route>
            </Routes>
        </Router>
    )
}