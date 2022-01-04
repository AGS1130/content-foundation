import Link from 'next/link'
import links from '@/configs/socialLinks'

const SocialLinks = () => (
  <ul className='flex mb-4 md:order-1 md:ml-4 md:mb-0'>
    {links.map((link, index) => {
      const { href, label, path } = link

      return (
        <li className={index > 0 ? 'ml-4' : ''} key={label}>
          <Link href={href}>
            <a
              className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
              aria-label={label}
            >
              <svg
                className='w-8 h-8 fill-current'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d={path} />
              </svg>
            </a>
          </Link>
        </li>
      )
    })}
  </ul>
)

export default SocialLinks
