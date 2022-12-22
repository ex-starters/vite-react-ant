import { useEffect } from "react";
import { useState } from "react";

export default function useRequest(dataProvider, name) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dataProvider.getList(name).then(res => {
            setLoading(false)
            if (res.data) {
                setList(res.data);
            }
        })
    }, [name]);

    return { data: list, loading, error: '' };
}