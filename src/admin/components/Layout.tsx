import { Breadcrumb, Button, Form, Menu, PageHeader } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import Dummpy from './Dummy';
import Home from './Home';
import MyRoutes from './routes';
import { Outlet, Link } from 'react-router-dom';
import Space from './space';


export default function Layout({ routes }) {
    const getLink = (r) => {
        // console.log(`route /${r.name}`)
        if (r.path) {
            return r.path;
        } else {
            return `/${r.name}`
        }
    }

    return <div className="layout">
        <div className="sidebar">
            <div className="logo">Logo</div>
            <Menu>
                <Menu.Item>
                    <Link to='users'>users</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='posts'>posts</Link>
                </Menu.Item>
                {/* {routes.map((r, i) => <Menu.Item key={i}>
                    <Link to={getLink(r)}>{r.name}</Link>
                </Menu.Item>)} */}
            </Menu>
        </div>
        <div className="content">
            <div className="header">

            </div>
            <div className="content">
                <PageHeader
                    className="site-page-header"
                    title="Title"
                    // breadcrumb={{ routes }}
                    subTitle="This is a subtitle"
                />
                <Space>
                    <Outlet />
                </Space>
                <div>

                </div>
            </div>
            <div className="footer">Footer</div>
        </div>
    </div>
}