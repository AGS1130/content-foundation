import Link from 'next/link'

const PrivacyCol = () => (
  <div className='sm:col-span-12 lg:col-span-3'>
    <div className='mb-2'>
      {/* Logo */}
      <Link href='/'>
        <a className='inline-block'>
          <svg
            className='w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            version='1.0'
            width='256.000000pt'
            height='256.000000pt'
            viewBox='0 0 256.000000 256.000000'
            preserveAspectRatio='xMidYMid meet'
          >
            <g
              transform='translate(0.000000,256.000000) scale(0.100000,-0.100000)'
              fill='#000000'
              stroke='none'
            >
              <path d='M1125 2549 c-559 -76 -992 -484 -1102 -1037 -23 -118 -23 -346 0 -464 53 -265 166 -478 357 -668 251 -252 546 -374 900 -374 354 0 649 123 900 374 252 251 374 546 374 900 0 354 -123 649 -374 900 -190 191 -405 305 -663 355 -102 20 -299 27 -392 14z m489 -1178 c168 -294 306 -538 306 -543 0 -4 -283 -8 -630 -8 -346 0 -630 2 -630 5 0 5 588 1039 617 1084 12 19 17 21 23 10 5 -8 146 -254 314 -548z' />
            </g>
          </svg>
        </a>
      </Link>
    </div>
    <div className='text-sm text-gray-600'>
      <Link href='#'>
        <a className='text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out'>
          Terms
        </a>
      </Link>
      &nbsp; · &nbsp;
      <Link href='#'>
        <a className='text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out'>
          Privacy Policy
        </a>
      </Link>
    </div>
  </div>
)

export default PrivacyCol
