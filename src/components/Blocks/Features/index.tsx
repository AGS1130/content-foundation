import SectionCopy from '$components/SectionCopy'
import Items from './Items'

const items = [
  {
    title: 'Initial Contact',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Stroke: (
      <g strokeWidth='2'>
        <path
          className='stroke-current text-blue-300'
          d='M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285'
        />
        <path
          className='stroke-current text-white'
          d='M20.571 37.714h5.715L36.57 26.286h8'
        />
        <path
          className='stroke-current text-blue-300'
          strokeLinecap='square'
          d='M41.143 34.286l3.428 3.428-3.428 3.429'
        />
        <path
          className='stroke-current text-white'
          strokeLinecap='square'
          d='M41.143 29.714l3.428-3.428-3.428-3.429'
        />
      </g>
    ),
  },
  {
    title: 'Discovery Session',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Stroke: (
      <g strokeWidth='2' transform='translate(19.429 20.571)'>
        <circle
          className='stroke-current text-white'
          strokeLinecap='square'
          cx='12.571'
          cy='12.571'
          r='1.143'
        />
        <path
          className='stroke-current text-white'
          d='M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696'
        />
        <path
          className='stroke-current text-blue-300'
          d='M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835'
        />
      </g>
    ),
  },
  {
    title: 'Contracting',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Stroke: (
      <g strokeLinecap='square' strokeWidth='2'>
        <path
          className='stroke-current text-blue-300'
          d='M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207'
        />
        <path
          className='stroke-current text-white'
          d='M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285'
        />
      </g>
    ),
  },
  {
    title: 'Fast Prototyping',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Stroke: (
      <g transform='translate(22.857 19.429)' strokeWidth='2'>
        <path
          className='stroke-current text-white'
          strokeLinecap='square'
          d='M12.571 4.571V0H0v25.143h12.571V20.57'
        />
        <path className='stroke-current text-white' d='M16 12.571h8' />
        <path
          className='stroke-current text-white'
          strokeLinecap='square'
          d='M19.429 8L24 12.571l-4.571 4.572'
        />
        <circle
          className='stroke-current text-blue-300'
          strokeLinecap='square'
          cx='12.571'
          cy='12.571'
          r='3.429'
        />
      </g>
    ),
  },
  {
    title: 'Design Phase',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Stroke: (
      <g strokeLinecap='square' strokeWidth='2'>
        <path
          className='stroke-current text-white'
          d='M20.571 20.571h13.714v17.143H20.571z'
        />
        <path
          className='stroke-current text-blue-300'
          d='M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58'
        />
      </g>
    ),
  },
  {
    title: 'Develop & Launch',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    Stroke: (
      <g strokeWidth='2'>
        <path
          className='stroke-current text-white'
          d='M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714'
        />
        <path
          className='stroke-current text-white'
          d='M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286'
        />
        <path
          className='stroke-current text-white'
          d='M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286'
        />
        <path
          className='stroke-current text-blue-300'
          d='M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572'
          strokeLinecap='square'
        />
      </g>
    ),
  },
]

const FeaturesBlocks = () => (
  <section className='relative'>
    <div
      className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none'
      aria-hidden='true'
    ></div>
    <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2'></div>

    <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
      <div className='py-12 md:py-20'>
        <SectionCopy
          title={'How Simple works'}
          copy={
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.'
          }
        />
        <Items items={items} />
      </div>
    </div>
  </section>
)

export default FeaturesBlocks
