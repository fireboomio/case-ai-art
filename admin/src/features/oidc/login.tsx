import { useEffect } from 'react'

export const LoginPage = () => {

  useEffect(() => {
    window.location.href = `http://localhost:9991/auth/cookie/authorize/authing?redirect_uri=${encodeURIComponent(`${window.location.origin}/oidc/callback`)}`
  }, [])

  return <></>
}
