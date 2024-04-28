import { Admin, Resource, houseDarkTheme } from "react-admin";
import { dataProvider } from "./dataProvider";
import PostList from "./mui/posts/PostList";
import PostCreate from "./mui/posts/PostCreate";
import PostEdit from "./mui/posts/PostEdit";
import PostShow from "./mui/posts/PostShow";
import CommentList from "./mui/comments/CommentList";
import CommentCreate from "./mui/comments/CommentCreate";
import CommentEdit from "./mui/comments/CommentEdit";
import CommentShow from "./mui/comments/CommentShow";

export const App = () => (
  <Admin dataProvider={dataProvider} theme={houseDarkTheme}>
    <Resource
      name="posts"
      options={{ label: "publication" }}
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      show={PostShow} />

    <Resource
      name="comments"
      options={{ label: "commentairs" }}
      list={CommentList}
      create={CommentCreate}
      edit={CommentEdit}
      show={CommentShow}
    />

    <Resource name="users" recordRepresentation="name" />

  </Admin>
);
