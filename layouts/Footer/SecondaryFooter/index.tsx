import SocialLinks from './SocialLinks'

const today = new Date()
const year = today.getFullYear()

const SecondaryFooter = () => (
  <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
    <SocialLinks />

    {/* Copyrights note */}
    <div className='text-sm text-gray-600 mr-4'>
      © {year} Simple. All rights reserved.
    </div>
  </div>
)

export default SecondaryFooter
