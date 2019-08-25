import React from 'react';
import { Form, Input, Button } from 'antd';
import {
 func, number, shape, string
} from 'prop-types';
import { antFormType } from '../../proptypes/antFormType';
import accessLevelPropType from '../../proptypes/accessLevelPropType';
import readerTypesPropType from '../../proptypes/readerTypesPropType';

const AccessDetailsForm = (props) => {
    const {
        form, handleSave, selectedReader
    } = props;
    const save = () => {
        const name = form.getFieldValue('selectedReader.accessLevel.name');
        const Description = form.getFieldValue('selectedReader.accessLevel.Description');
        const newLevel = {
            id: selectedReader.accessLevel.id,
            readerId: selectedReader.accessLevel.readerId,
            name,
            Description
        };
        handleSave(newLevel);
    };
    const { getFieldDecorator } = form;

    // eslint-disable-next-line no-debugger
    debugger;
    return (
        <Form layout="vertical" style={{ marginBottom: '64px' }}>
            <Form.Item label="Name">
                {getFieldDecorator('selectedReader.accessLevel.name', {
                    initialValue: selectedReader.accessLevel.name,
                    rules: [{ required: true, message: 'A Name is required' }],
                })(<Input placeholder="Enter an access name" value={selectedReader.accessLevel.name} />)}
            </Form.Item>
            <Form.Item label="Description">
                {getFieldDecorator('selectedReader.accessLevel.Description', {
                    initialValue: selectedReader.accessLevel.Description
                })(
                    <Input.TextArea placeholder="Enter a description">
                        {selectedReader.accessLevel.Description}
                    </Input.TextArea>
                )}
            </Form.Item>
            <div className="form-footer">
                <Button onClick={() => { form.resetFields(); }}>Cancel</Button>
                <Button type="primary" onClick={() => { save(); form.resetFields(); }}>Save</Button>
            </div>
        </Form>
    );
};

AccessDetailsForm.propTypes = {
    form: antFormType.isRequired,
    handleSave: func.isRequired

};

AccessDetailsForm.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    selectedReader: shape(
        {
            id: number.isRequired,
            typeId: number.isRequired,
            name: string.isRequired,
            accessLevel: accessLevelPropType.isRequired,
            readerType: readerTypesPropType.isRequired
        }
    ).isRequired
};


export default AccessDetailsForm;
