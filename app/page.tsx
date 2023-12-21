import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>INI HALAMAN LOGIN</p>
      <Link href='/admin'>ADMIN</Link>
      <Link href='/user'>USER</Link>
    </main>
  )
}
