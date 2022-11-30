import type { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/v1/me',
    method: 'get',
    timeout: 1000,
    response: (): Resource<User> => {
      return {
        resource: {
          id: 1,
          email: 'frank@frank.com',
          updated_at: '2021-08-01T00:00:00.000Z',
          created_at: '2021-08-01T00:00:00.000Z',
        }
      }
    },
  },
  {
    url: '/api/v1/items',
    method: 'get',
    response: (): Resources<Item> => {
      return {
        resources: [],
        pager: {
          page: 1,
          per_page: 25,
          count: 0
        }
      }
    },
  },
] as MockMethod[]
