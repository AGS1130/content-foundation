import Image from 'next/image'
import Link from 'next/link'

const Brand = () => (
  <div className='flex-shrink-0 mr-4'>
    <Link href='/'>
      <a>
        <Image className='w-8 h-8' src='/vercel.svg' width={32} height={32} />
      </a>
    </Link>
  </div>
)

export default Brand
