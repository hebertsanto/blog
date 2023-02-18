import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DefautPage } from '../components/defaulPage';
import { Home } from '../components/home';

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<DefautPage />}>
                     <Route path='/' element={<Home />}/>
                </Route>
            </Routes>
        </Router>
    )
}