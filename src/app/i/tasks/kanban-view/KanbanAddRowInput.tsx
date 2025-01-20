import type { ITaskResponse } from '@/types/task.types'
import type { Dispatch, SetStateAction } from 'react'
import styles from './KanbanView.module.scss'

interface IKanbanAddRowInput {
  filterDate?: string
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddRowInput({ setItems, filterDate }: IKanbanAddRowInput) {
  const addCard = () => {
    setItems((prev: any) => {
      if (!prev) return

      return [
        ...prev,
        {
          id: '',
          name: '',
          isCompleted: false,
          createdAt: filterDate
        }
      ]
    })
  }

  return (
    <div className='mt-5'>
      <button
        onClick={addCard}
        className='italic opacity-40 text-sm'
      >
        Add task...
      </button>
    </div>
  )
} 