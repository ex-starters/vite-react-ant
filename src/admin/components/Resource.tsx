import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default function Resource(props) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${props.name}`).then(res => {
            setLoading(false)
            if (res.data) {
                setList(res.data);
            }
        })
    }, [props]);

    const ListComponent = props.list;
    return <>
        <div>{props.name}</div>
        {loading && <>Loading</>}
        {list && <ListComponent dataSource={list} name={props.name}></ListComponent>}
    </>

}