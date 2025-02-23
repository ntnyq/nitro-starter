export default defineCachedEventHandler(
  event => {
    const name = getRouterParam(event, 'name')

    return {
      name,
    }
  },
  {
    maxAge: 60 * 60,
  },
)
