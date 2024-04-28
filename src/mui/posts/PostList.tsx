import {
    Datagrid,
    List,
    Pagination,
    TextField,
    EditButton,
    DeleteButton,
    ShowButton,
    ReferenceField,
  } from "react-admin";
import ButtonField from "../ButtonField";
  
  const PostPagination = () => (
    <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />
  );
  
  export const PostList = () => {
    return (
      <List pagination={<PostPagination />}>
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="title" />
          <ReferenceField source="userId" label="name" reference="users" />
          <EditButton label="" />
          <DeleteButton label="" />
          <ShowButton label="" />
          <ButtonField />
        </Datagrid>
      </List>
    );
  };
  
  export default PostList;
  