# [关联]分组(Group)

- 是否换行
- 分步骤/分组校验
- Form Control

```html
<FormControl>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input type="email" id="email" aria-describedby="email-helper-text" />
  <FormHelperText id="email-helper-text">
    We'll never share your email.
  </FormHelperText>
</FormControl>
```