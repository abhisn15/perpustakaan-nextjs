import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 notranslate">
      <p>INI HALAMAN LOGIN</p>
      <Link href='/admin'>ADMIN</Link>
      <Link href='/dashboard'>USER</Link>
    </main>
  )
}
