import Table from "../../admin/components/Table";
import { TextColumn } from "../../admin/components/Table/TextColumn";

export default function UsersList(props) {
    return <Table dataSource={props.dataSource}>
        <TextColumn source="name" />
        <TextColumn source="username" />
        <TextColumn source="email" />
    </Table>
}