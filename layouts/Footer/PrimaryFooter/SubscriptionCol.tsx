const SubscriptionCol = () => (
  <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
    <h6 className='text-gray-800 font-medium mb-2'>Subscribe</h6>
    <p className='text-sm text-gray-600 mb-4'>
      Get the latest news and articles to your inbox every month.
    </p>
    <form>
      <div className='flex flex-wrap mb-4'>
        <div className='w-full'>
          <label className='block text-sm sr-only' htmlFor='newsletter'>
            Email
          </label>
          <div className='relative flex items-center max-w-xs'>
            <input
              id='newsletter'
              type='email'
              className='form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm'
              placeholder='Your email'
              required
            />
            <button
              type='submit'
              className='absolute inset-0 left-auto'
              aria-label='Subscribe'
            >
              <span
                className='absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300'
                aria-hidden='true'
              ></span>
              <svg
                className='w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0'
                viewBox='0 0 12 12'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                  fillRule='nonzero'
                />
              </svg>
            </button>
          </div>
          {/* Success message */}
          {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
        </div>
      </div>
    </form>
  </div>
)

export default SubscriptionCol
