import { Table } from "antd";

export const gonTable = ({dataSource, columns, ...props}) => {
    

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            {...props}
        />
    );
}