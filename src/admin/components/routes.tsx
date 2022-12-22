import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import useRequest from "../hooks/use-request"
import Home from "./Home"
import Layout from "./Layout"

export default function MyRoutes({ routes, dataProvider }) {
    const getLink = (r) => {
        console.log(`route /${r.name}`)
        return `/${r.name}`
    }

    return <Routes>
        <Route path="/" element={<Layout routes={[{ name: 'Home', path: '/' }, ...routes]} />}>
            <Route path='/' element={<Home />}></Route>
            {routes.map((r, i) => {
                return <Route key={i} path={getLink(r)} element={r.resource} />
            })}
        </Route>
    </Routes>
}
