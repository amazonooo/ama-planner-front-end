import { useEffect } from 'react'
import { useProfile } from '../profile/useProfile'
import { UseFormReset } from 'react-hook-form'
import { TypeUserForm } from '@/types/auth.types'

export function useInitialData(reset: UseFormReset<TypeUserForm>) {
	const { data, isSuccess } = useProfile()

	useEffect(() => {
    if (isSuccess && data) {
      reset({
        email: data?.user.email,
        name: data?.user.name,
        breakInterval: data?.user.breakInterval,
        workInterval: data?.user.workInterval,
        intervalsCount: data?.user.intervalsCount,
      })
    }
  }, [isSuccess])
}