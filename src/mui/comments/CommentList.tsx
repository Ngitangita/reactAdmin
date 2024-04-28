import * as React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, ListProps, ShowButton } from 'react-admin';

const CommentList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton label="" />
            <DeleteButton label="" />
            <ShowButton label="" />
        </Datagrid>
    </List>
);

export default CommentList;
