import * as React from 'react';
import { Create, SimpleForm, TextInput, required, CreateProps } from 'react-admin';

interface CommentCreateProps extends CreateProps {}

const CommentCreate: React.FC<CommentCreateProps> = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="email" validate={required()} />
        </SimpleForm>
    </Create>
);

export default CommentCreate;
