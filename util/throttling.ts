/**
 * 쓰로틀링 함수
 * @param callback
 * @param delay
 * @returns
 */
export const throttle = (callback: any, delay: number) => {
  let timeoutId: any = null

  return (...args: any) => {
    if (!timeoutId) {
      callback(...args)

      timeoutId = setTimeout(() => {
        timeoutId = null
      }, delay)
      console.log(timeoutId)
    }
  }
}
