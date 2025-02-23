export default defineEventHandler(event => {
  const name = getRouterParam(event, 'name')
  const url = getRequestURL(event)
  const host = getRequestHost(event)
  const ip = getRequestIP(event)
  const protocol = getRequestProtocol(event)

  return {
    name,
    url,
    host,
    ip,
    protocol,
  }
})
