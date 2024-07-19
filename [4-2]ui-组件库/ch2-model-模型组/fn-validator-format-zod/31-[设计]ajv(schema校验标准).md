# [设计]ajv(schema校验标准)

- https://github.com/ajv-validator/ajv

```js
import Ajv from "ajv"
const ajv = new Ajv() 

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: "abc"
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) {
    console.log(validate.errors)
}
```

---

# 参考 @ref