import { expect, it } from 'vitest'
import { hello } from '../src/hello'

it('should log hello', () => {
  expect(hello()).toBe('hello world')
})
