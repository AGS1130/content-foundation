import PrimaryFooter from './PrimaryFooter'
import SecondaryFooter from './SecondaryFooter'

const Footer = () => {
  const navigationLinks = [
    {
      title: 'Products',
      links: [
        'Web Studio',
        'DynamicBox Flex',
        'Programming Forms',
        'Integrations',
        'Command-line',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'Tutorials & Guides',
        'Blog',
        'Support Center',
        'Partners',
      ],
    },
    {
      title: 'Company',
      links: [
        'Home',
        'About us',
        'Company values',
        'Pricing',
        'Privacy Policy',
      ],
    },
  ]

  return (
    <footer>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <PrimaryFooter navigationLinks={navigationLinks} />
        <SecondaryFooter />
      </div>
    </footer>
  )
}

export default Footer
