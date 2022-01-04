import ContentImage from './ContentImage'
import ContentSection from './ContentSection'

const Content = () => (
  <div className='max-w-6xl mx-auto px-4 sm:px-6'>
    <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
      <ContentSection />
      <ContentImage />
    </div>
  </div>
)

export default Content
