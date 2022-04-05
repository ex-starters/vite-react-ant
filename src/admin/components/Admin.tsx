import { Breadcrumb, Button, Form, Layout, Menu, PageHeader } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import Dummpy from './Dummy';
import Home from './Home';
import MyRoutes from './routes';
import { Outlet, Link } from 'react-router-dom';


export default function Admin(props) {
    // const routes = [
    //     {
    //         path: 'index',
    //         breadcrumbName: 'First-level Menu',
    //     },
    //     {
    //         path: 'first',
    //         breadcrumbName: 'Second-level Menu',
    //     },
    //     {
    //         path: 'second',
    //         breadcrumbName: 'Third-level Menu',
    //     },
    // ];

    const routes = props.children.map(resource => {
        return {
            name: resource.props.name,
            list: resource.props.list,
        }
    })

    const getLink = (r) => {
        console.log(`route /${r.name}`)
        return `/${r.name}`
    }

    return <MyRoutes routes={routes} />
    // <div className="layout">
    //     <div className="sidebar">
    //         <div className="logo">Logo</div>
    //         <Menu>
    //             {routes.map((r, i) => <Menu.Item key={i}>
    //                 <Link to={getLink(r)}>{r.name}</Link>
    //             </Menu.Item>)}
    //         </Menu>
    //     </div>
    //     <div className="content">
    //         <div className="header">

    //         </div>
    //         <div className="content">
    //             <PageHeader
    //                 className="site-page-header"
    //                 title="Title"
    //                 // breadcrumb={{ routes }}
    //                 subTitle="This is a subtitle"
    //             />

    //             content: <Outlet />

    //             <div>

    //             </div>
    //         </div>
    //         <div className="footer">Footer</div>
    //     </div>




    {/* <Routes>
            <Route path='/' element={Home}></Route>
            {routes.map((r, i) => {
                console.log("🚀 ~ file: Admin.tsx ~ line 73 ~ {routes.map ~ r", r)

                return <Route key={i} path={getLink(r)} element={Dummpy} />
            })}
        </Routes> */}
    // </div >

}