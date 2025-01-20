import { taskService } from '@/services/task.service'
import { TypeTaskFormState } from '@/types/task.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
export function useDeleteTask() {
	const queryClient = useQueryClient()

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete task'],
		mutationFn: (id: string) => taskService.deleteTask(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
			toast.success('Task deleted')
		}
	})

	return { deleteTask, isDeletePending }
}
