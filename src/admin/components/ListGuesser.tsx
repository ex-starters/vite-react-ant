import axios from "axios";
import { useEffect, useState } from "react";
import { key } from '../../utils/utils';

export default function ListGuesser({ name }) {
    const url = `https://jsonplaceholder.typicode.com/${name}`;

    const [list, setList] = useState([]);
    const [columns, setColumns] = useState([])
    // const columns = [
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: 'name',
    //     },
    //     {
    //       title: 'Age',
    //       dataIndex: 'age',
    //       key: 'age',
    //     },
    //     {
    //       title: 'Address',
    //       dataIndex: 'address',
    //       key: 'address',
    //     },
    //   ];


    useEffect(() => {
        axios.get(url).then(res => {
            if (res.data) {
                setColumns(Object.keys(res.data[0]).map(k => {
                    const val = res.data[0][k];
                    if (typeof (val) === 'object') {
                        const v = `${k}.${Object.keys(val)[0]}`
                        return {
                            title: v, dataIndex: v, key: v
                        }
                    } else {
                        return {
                            title: k, dataIndex: k, key: k
                        }
                    }
                }))
                setList(res.data);
            }
        })
    }, [name]);

    return <div>
        {/* <Table dataSource={list} columns={columns} /> */}
        {/* I'm a list for {name} */}
        {list.length < 1 && <div>Empty</div>}

        {list.length > 1 && <table>
            <thead>
                <tr>
                    {Object.keys(list[0]).map(k => <td key={key()}>{k}</td>)}
                </tr>
            </thead>
            <tbody>
                {list.map(l => <tr key={key()}>
                    {Object.keys(list[0]).map(k => <td key={key()}>
                        {typeof (l[k]) === 'object' ? '' : l[k]}
                    </td>)}
                </tr>)}
            </tbody>
        </table>}
    </div>

}