import { useState, useCallback } from 'react'

const API_BASE_URL = '/api'

export const useApi = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchApi = useCallback(async (endpoint, options = {}) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const get = useCallback((endpoint) => fetchApi(endpoint), [fetchApi])

  const post = useCallback(
    (endpoint, body) =>
      fetchApi(endpoint, {
        method: 'POST',
        body: JSON.stringify(body)
      }),
    [fetchApi]
  )

  return { get, post, loading, error }
}

export default useApi
