import { Dispatch, SetStateAction } from 'react'
import { IPomodoroRoundResponse } from './pomodoro.types'

export interface ITimerState {
	activeRound: IPomodoroRoundResponse | undefined
	secondsLeft: number
	isRunning: boolean
	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
}