import type { ReactNode, VFC } from 'react'

type Props = ContainerProps

const Component: VFC<Props> = (props) => {
  return <>{props.children}</>
}

type ContainerProps = {
  children: ReactNode
}

export const Container: VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}
