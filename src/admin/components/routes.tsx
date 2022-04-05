import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"

export default function MyRoutes({ routes }) {
    const getLink = (r) => {
        console.log(`route /${r.name}`)
        return `/${r.name}`
    }
    const getListComponent = (r) => {
        const List = r.list;
        return <List name={r.name} />
    }

    return <Routes>
        <Route path="/" element={<Layout routes={[{ name: 'Home', path: '/' }, ...routes]} />}>
            <Route path='/' element={<Home />}></Route>
            {routes.map((r, i) => {
                return <Route key={i} path={getLink(r)} element={getListComponent(r)} />
            })}
        </Route>
    </Routes>
}