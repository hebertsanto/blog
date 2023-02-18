import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DefautPage } from '../components/defaulPage';
import { Home } from '../components/home';
import { Blog } from '../components/blog';

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<DefautPage />}>
                     <Route path='/' element={<Home />}/>
                     <Route path='/blog' element={<Blog />}/>
                </Route>
            </Routes>
        </Router>
    )
}