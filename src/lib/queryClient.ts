import { QueryClient } from 'react-query'

// TODO: consider use custom client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
    },
  },
})

export default queryClient
