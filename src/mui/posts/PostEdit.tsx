import { Edit, SimpleForm, TextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
import { Box, Button } from '@mui/material';

const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="title" validate={required()} fullWidth />
                <TextInput multiline source="body" validate={required()} fullWidth />
            </Box>
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <Box textAlign="right">
                        <EditButton />
                    </Box>
                </Datagrid>
            </ReferenceManyField>
            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" type="submit">Save</Button>
            </Box>
        </SimpleForm>
    </Edit>
);

export default PostEdit;
