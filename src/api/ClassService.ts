/*eslint-disable */
import { useApi } from '../hooks/useApi'

export function classesService() {
  const classes = useApi('/classes')

  return {
    classes
  }
}
/*eslint-disable */
