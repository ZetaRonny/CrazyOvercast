import api from './api'

export const getDevLogs = (page = 1, limit = 10) => {
  return api.get('/devlogs', {
    params: {
      page,
      limit
    }
  })
}