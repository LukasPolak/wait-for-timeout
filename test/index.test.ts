import { waitForTimeout } from '../src'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('waitForTimeout', () => {
  const testCases = [
    { value: true, timeout: 100 },
    { value: false, timeout: 100 },
    { value: true, timeout: undefined },
    { value: false, timeout: undefined },
    { value: true, timeout: 1000 },
    { value: false, timeout: 1000 },
  ]

  testCases.forEach(({ value, timeout }) => {
    it(`should return ${value} after ${
      timeout ?? `500 (fallback timeout) `
    }ms`, async () => {
      const response = waitForTimeout<boolean>(() => {
        return value
      }, timeout)

      expect(setTimeout).toHaveBeenCalledTimes(1)
      expect(setTimeout).toHaveBeenLastCalledWith(
        expect.any(Function),
        timeout ?? 500
      )

      jest.runAllTimers()
      expect(await response).toBe(value)
    })
  })
})
