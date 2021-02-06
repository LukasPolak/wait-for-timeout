import { sleep } from '@lukaspolak/sleep'

export async function waitForTimeout<T>(
  callback: () => T,
  timeout = 500
): Promise<T> {
  await sleep(timeout)

  return callback()
}
