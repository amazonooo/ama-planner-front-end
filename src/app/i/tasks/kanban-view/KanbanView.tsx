'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { KanbanColumn } from './KanbanColumn'
import styles from './KanbanView.module.scss'
import { useTasks } from '@/hooks/tasks/useTasks'
import { useTaskDnd } from '@/hooks/tasks/useTaskDnd'
import { COLUMNS } from '../column-data'
import { cn } from '@/utils/cn'

export function KanbanView() {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={cn(styles.board, 'horizontal-scrollbar')}>
				{COLUMNS.map(column => (
					<KanbanColumn
						items={items}
						label={column.label}
						value={column.value}
						setItems={setItems}
						key={column.value}
					/>
				))}
			</div>
		</DragDropContext>
	)
}
