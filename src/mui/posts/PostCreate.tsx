import {
    Create,
    TextInput,
    required,
    SimpleForm,
  } from "react-admin";
  
  const PostCreate = () => (
    <Create redirect="/posts">
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <TextInput source="body" multiline={true} label="Short description" />
      </SimpleForm>
    </Create>
  );
  
  export default PostCreate;
  