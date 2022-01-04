import GenericCol from './GenericCol'
import PrivacyCol from './PrivacyCol'
import SubscriptionCol from './SubscriptionCol'

const PrimaryFooter = ({
  navigationLinks,
}: {
  navigationLinks: { title: string; links: string[] }[]
}) => (
  <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>
    <PrivacyCol />

    {navigationLinks.map((navigationLink) => {
      const { title, links } = navigationLink

      return <GenericCol title={title} links={links} key={title} />
    })}

    <SubscriptionCol />
  </div>
)

export default PrimaryFooter
