import {RJSFSchema, UiSchema} from "@rjsf/utils";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['attendance'],
  properties: {
    attendance: { type: 'boolean', title: '出席', default: true },
  }
}

export const ChangeWidget = () => {
  return (
    <Form schema={schema} validator={validator} />
  )
}