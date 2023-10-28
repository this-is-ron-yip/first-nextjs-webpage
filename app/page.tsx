import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Ron Yip&#39;s first webpage</h1>
      <Link className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500' href='/AboutMe'>About Me</Link>
    </main>
  )
}
