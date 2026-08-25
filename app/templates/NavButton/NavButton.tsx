const NavButton = ({value}:{value:string,}) => {
  return (
    <button className="cursor-pointer px-1 font-bold bg-canvas text-ink transition-shadow duration-600 ease-in-out rounded-[5px] shadow-md hover:shadow-none">
    {value}
    </button>
  )
}
export default NavButton
