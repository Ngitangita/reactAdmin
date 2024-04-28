import { Show, SimpleShowLayout, TextField, RichTextField } from "react-admin";
import { Card, CardHeader, CardContent } from "@mui/material";

const CommentShow = () => {
  return (
    <Show>
      <Card>
        <CardHeader title="Comments Details" />
        <CardContent>
          <SimpleShowLayout>
            <TextField disabled source="postId" />
            <TextField disabled source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <RichTextField source="body" />
          </SimpleShowLayout>
        </CardContent>
      </Card>
    </Show>
  );
};

export default CommentShow;
