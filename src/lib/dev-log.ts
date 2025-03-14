// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function devLog(...data: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...data) // eslint-disable-line no-console
  }
}
