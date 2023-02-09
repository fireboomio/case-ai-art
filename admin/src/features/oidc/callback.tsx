import { useEffect } from 'react'

import { useAuth } from '@/providers/AuthenticationContext'
import { useNavigation } from '@pankod/refine-core'

const AuthCallbackPage = () => {
  const { replace } = useNavigation()
  const { checkAuthentication } = useAuth()

  useEffect(() => {
    checkAuthentication().then((success) => {
      if (success) {
        replace('/')
      } else {
        replace('/500')
      }
    })
  }, [])

  return <></>
}

export default AuthCallbackPage
