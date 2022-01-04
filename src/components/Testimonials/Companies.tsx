const Companies = ({
  companies,
}: {
  companies: { label: string; SVG: JSX.Element }[]
}) => (
  <div className='max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5'>
    {companies.map((company, index) => {
      const { label, SVG } = company
      return (
        <div
          className='flex items-center justify-center py-2 col-span-2 md:col-auto'
          key={`${label}_${index}`}
        >
          {SVG}
        </div>
      )
    })}
  </div>
)

export default Companies
