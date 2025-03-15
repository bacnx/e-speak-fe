export function isMatchPathname(pathname: string, href: string): boolean {
  const pathArray = pathname.split('/')
  const cleanHref = href.split('/')[1]
  return pathArray.includes(cleanHref)
}
