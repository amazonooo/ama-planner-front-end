import { taskService } from '@/services/task.service'
import { TypeTaskFormState } from '@/types/task.types';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateTask(key?: string) {
  const queryClient = useQueryClient()

  const { mutate: updateTask } = useMutation({
    mutationKey: ['update task', key],
    mutationFn: ({ id, data }: { id: string, data: TypeTaskFormState }) => taskService.updateTask(id, data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['tasks']
      })
      toast.success('Task updated')
    }
  })
   
  return { updateTask }
}