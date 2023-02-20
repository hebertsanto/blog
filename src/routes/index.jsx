import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DefautPage } from '../components/defaulPage';
import { Home } from '../components/home';

import { Blog } from './blog';
import { Contact } from './contact';
import { About } from './about';
import { PostId } from '../components/PostId';

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
                <Route path='/post/:categoria' element={<PostId />}/>
            </Routes>
        </Router>
    )
}