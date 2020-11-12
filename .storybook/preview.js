import { Providers } from '../src/providers'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <Providers>
      <Story />
    </Providers>
  )
]