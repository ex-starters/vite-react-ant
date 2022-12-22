import Table from "./Table";

export default function ListGuesser({ name, dataSource }) {
    console.log("🚀 ~ file: ListGuesser.tsx ~ line 4 ~ ListGuesser ~ dataSource", dataSource.length)
    console.log("🚀 ~ file: ListGuesser.tsx ~ line 4 ~ ListGuesser ~ name", name)

    return <div>
        <Table dataSource={dataSource} name={name} />
    </div>

}