import * as React from 'react';
import { Edit, SimpleForm, TextInput, required, EditProps } from 'react-admin';

const CommentEdit: React.FC<CommentEditProps> = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="email" validate={required()} />
        </SimpleForm>
    </Edit>
);

interface CommentEditProps extends EditProps {}
export default CommentEdit;
