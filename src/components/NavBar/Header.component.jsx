import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

export default function Header () {
  return (
    <nav className='w-full justify-center bg-slate-50 shadow'>
      <div className='justify-between md:items-center md:flex px-8'>
        <div className='flex flex-row items-center justify-between md:py-3'>
          <a href='/'>
            <ArrowBackIosIcon />
          </a>
          <p className='text-gray-700 '> Farm Name </p>
        </div>
        <div className='hidden space-x-4 md:inline-block'>
          <MoreVertOutlinedIcon />
        </div>
      </div>
    </nav>
  )
}