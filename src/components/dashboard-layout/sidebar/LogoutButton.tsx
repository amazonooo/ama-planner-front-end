'use client'

import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function LogoutButton() {
  const router = useRouter()

  const { mutate: logout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      router.push('/auth')
      toast.success('Logged out successfully')
    }
  })

  return (
    <div className='absolute top-1 right-1'>
      <button className='opacity-30 hover:opacity-100 transition-opacity duration-300' onClick={() => logout()}>
        <LogOut size={20} />
      </button>
    </div>
  )
}
