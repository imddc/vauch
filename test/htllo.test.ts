import { describe, expect, it } from 'vitest'
import { hello } from '../src/hello'

describe('hello', () => {
  it('should log hello', () => {
    expect(hello()).toBe('hello world')
  })
})
