import React from 'react'

const Items = ({
  items,
}: {
  items: { title: string; copy: string; Stroke: JSX.Element }[]
}) => (
  <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
    {items.map((item, index) => {
      const { title, copy, Stroke } = item

      return (
        <div
          className='relative flex flex-col items-center p-6 bg-white rounded shadow-xl'
          key={`${title}_${index}`}
        >
          <svg
            className='w-16 h-16 p-1 -mt-1 mb-2'
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='none' fillRule='evenodd'>
              <rect
                className='fill-current text-blue-600'
                width='64'
                height='64'
                rx='32'
              />
              {Stroke}
            </g>
          </svg>
          <h4 className='text-xl font-bold leading-snug tracking-tight mb-1'>
            {title}
          </h4>
          <p className='text-gray-600 text-center'>{copy}</p>
        </div>
      )
    })}
  </div>
)

export default Items
