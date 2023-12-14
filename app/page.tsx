import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <div>

      <p>only authed user can see this</p>
      <UserButton afterSignOutUrl="/" />


    </div>

  )
}
