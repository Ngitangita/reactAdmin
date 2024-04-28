import {
    Show,
    SimpleShowLayout,
    TextField,
    RichTextField,
    ReferenceField,
  } from "react-admin";
  import {  Card, CardHeader, CardContent } from "@mui/material";
  
  const PostShow = () => (
    <Show>
      <Card>
        <CardHeader title="Post Details" />
        <CardContent>
          <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="body" />
            <ReferenceField label="User" source="userId" reference="users">
              <TextField source="name" />
              <TextField source="username" />
              <TextField source="email" />
            </ReferenceField>
          </SimpleShowLayout>
        </CardContent>
      </Card>
    </Show>
  );
  
  export default PostShow;
  