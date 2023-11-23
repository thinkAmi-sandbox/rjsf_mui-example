import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import {RJSFSchema} from "@rjsf/utils";

const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  }
}

const log = (type) => console.log.bind(console, type)

export const AdditionalButton = () => {
  return (
    <Form
      schema={schema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
    >
      <button type='submit'>追加したsubmit</button>
      <button type='button'>追加したボタン</button>
    </Form>
  )
}