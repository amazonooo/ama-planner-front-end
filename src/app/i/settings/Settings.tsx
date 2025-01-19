'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { useInitialData } from '@/hooks/useInitialData'
import { useUpdateSettings } from '@/hooks/useUpdateSettings'
import { TypeUserForm } from '@/types/auth.types'
import { SubmitHandler, useForm } from 'react-hook-form'

export function Settings() {
  const { register, reset, handleSubmit } = useForm<TypeUserForm>({
    mode: 'onChange'
  })

  useInitialData(reset)
  const { mutate, isPending } = useUpdateSettings()

  const onSubmit: SubmitHandler<TypeUserForm> = data => {
    const { password, ...rest } = data

    mutate({
      ...rest,
      password: password || undefined
    })
  }

  return (
		<div>
			<form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-2 gap-10">
					<div>
						<Field
							id="email"
							label="Email: "
							placeholder="Enter email: "
							type="email"
							{...register('email', {
								required: 'Email is required!'
							})}
							extra="mb-4"
						/>

						<Field
							id="name"
							label="Name: "
							placeholder="Enter name: "
							{...register('name')}
							extra="mb-4"
						/>

						<Field
							id="password"
							label="Password: "
							placeholder="Enter password: "
							type="password"
							{...register('password')}
							extra="mb-10"
						/>
					</div>

					<div>
						<Field
							id="workInterval"
							label="Work interval (min.): "
							placeholder="Enter work interval (min.): "
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra="mb-4"
						/>

						<Field
							id="breakInterval"
							label="Break interval (min.): "
							placeholder="Enter break interval (min.): "
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra="mb-4"
						/>

						<Field
							id="intervalsCount"
							label="Interval count (max 10): "
							placeholder="Enter interval count (max 10): "
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
							extra="mb-6"
						/>
					</div>
				</div>

				<Button type="submit" disabled={isPending}>
					Save
				</Button>
			</form>
		</div>
	)
}
