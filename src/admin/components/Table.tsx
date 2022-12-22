import { key } from "../../utils/utils";

export default function Table(props) {
    const { name, dataSource, children } = props;
    console.log(name)
    const GetHeader = () => {
        if (children) {
            if (children.props) {
                return <th key={key()}>{children.props.source}</th>
            } else {
                return children.map(c => <th key={key()}>{c.props.source}</th>)
            }
        } else {
            if (dataSource[0]) {
                console.log(Object.keys(dataSource[0]).map(k => `<TextField source="${k}" />`)
                    .join('\n'));

                return Object.keys(dataSource[0]).map(k => <th key={key()}>{k}</th>)
            }
        }
    }

    const getRow = (dataItem, index) => {
        if (children) {
            if (children.props) {
                return <tr key={key()}>
                    <td key={key()}>{dataItem[children.props.source]}</td>
                </tr>
            } else {
                return <tr key={index}>
                    {children.map(c => <td key={`${c.props.source}-${index}`}>
                        {dataItem[c.props.source]}
                    </td>)}
                </tr>
            }
        } else {
            const results = dataSource
                .map(l => <tr key={key()}>
                    {Object.keys(dataSource[0]).map(k => <td key={key()}>
                        {typeof (l[k]) === 'object' ? '' : l[k]}
                    </td>
                    )}
                </tr>)
            return results;
        }
    }

    const getRows = () => {
        return dataSource.map((row, index) => getRow(row, index))
    }

    if (!dataSource) {
        return <>Bye</>
    }

    return <>
        {dataSource.length < 1 && <div>Empty</div>}

        {dataSource.length > 1 && <table className="table">
            <thead>
                <tr>
                    {GetHeader()}
                </tr>
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>}
    </>

}