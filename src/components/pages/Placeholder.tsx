import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import {RJSFSchema, UiSchema} from "@rjsf/utils";

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: '' },
  }
}

const uiSchema: UiSchema = {
  // propertiesのkey(title)と合わせるようにして定義
  title: {
    'ui:placeholder': 'My placeholder'
  }
}

export const Placeholder = () => {
  return (
    <Form schema={schema} validator={validator} uiSchema={uiSchema} />
  )
}