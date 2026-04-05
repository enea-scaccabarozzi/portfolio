import * as runtime from 'react/jsx-runtime'
import { Alert } from '@/components/mdx/alert'
import { CodeBlock } from '@/components/mdx/code-block'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

const sharedComponents = {
  Alert,
  pre: CodeBlock,
}

export function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}
