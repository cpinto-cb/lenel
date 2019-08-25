import { shape, func } from 'prop-types';

export const antFormType = shape({
    resetFields: func,
    validateFields: func,
    getFieldDecorator: func,
});

export default antFormType;
