/*eslint-disable */
import { classesService } from '../api/ClassService'

export default function classController() {
  const { classes } = classesService()

  return {
    list: classes.data,
    isLoading: classes.isLoading,
    isError: classes.isError
  }
}
/*eslint-disable */
