import Link from 'next/link'

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
    <h6 className='text-gray-800 font-medium mb-2'>{title}</h6>
    <ul className='text-sm'>
      {links.map((link, index) => (
        <li className='mb-2' key={`${link}_${index}`}>
          <Link href='#'>
            <a className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
              {link}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterCol
