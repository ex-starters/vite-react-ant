import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';


export default function Admin(props) {
    return <Routes>
        <Route path="/" element={<Layout routes={[{ name: 'Home', path: '/' }]} />}>
            <Route path='/' element={<Home />}></Route>
            {
                props.children.map((c, i) => <Route key={i} path={c.props.name} element={c} />)
            }
        </Route>
    </Routes>

}