---
name: "component"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name."
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import type { VFC } from 'react'

type Props = {
} & ContainerProps

const Component: VFC<Props> = (props) => {
  return null
}

type ContainerProps = {
}

export const Container: VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}
```

# `{{ inputs.name | pascal }}/index.tsx`

```typescript
export { Container as {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'
```