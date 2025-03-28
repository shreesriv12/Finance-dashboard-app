const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-24 lg:text-30 font-semibold text-gray-900">
        {title}
        {type === 'greeting' && (
          <span className="bg-gradient-to-r from-[#177495] to-[#00d4ff] bg-clip-text text-transparent">
    &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="text-14 lg:text-16 font-normal text-gray-600">{subtext}</p>
    </div>
  )
}

export default HeaderBox