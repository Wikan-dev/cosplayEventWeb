import logo from './assets/logo.png';
import mb from './assets/menu_button.png';
import image5 from './assets/image 5.png';
import image2 from './assets/image 6.png'

const Card = ({ image , title }) => {
    return (
        <div className='mr-full bg-black mx-7 relative rounded-[15px] my-10'>
            <img src={image} alt="gambar" className='w-[228px] h-[127px] lg:w-[452.5px] lg:h-[251.28px] -z-1 rounded-l-[15px]'/>
            <div className='w-[136px] h-[127px] lg:w-[261.87px] lg:h-[251.28px] absolute top-0 left-23 lg:left-48 bg-linear-90 from-[rgba(0, 0, 0, 0)] to-black'></div>
            <h1 className="text-white right-10 top-7 lg:top-15 absolute font-bold text-[43px] lg:text-[70px]">{title}</h1>
        </div>
    )
}

const App = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="absolute min-w-[421.98px] min-h-[457px] max-h-[765.98px] max-h-[741px] right-0 object-cover opacity-[58%] -z-1"/>
        <div className='m-7'>
          <button><img src={mb} alt="menu" /></button>
          <h1 className='w-[227px] text-[93px] font-bold'>
            BEST COSPLAY EVENT
          </h1>
          <h3 className='w-[269px] text-[23px] font-md xl-w-[403px]'>
            Find the best and the latest cosplay event from all around the world in just a few clicks
          </h3>
          <button className='bg-black text-white w-[279px] h-[55px] rounded-[7px] mt-[61px]'>Join now</button>
        </div>

      <Card image={image5} title="All Event" />
      <Card image={image2} title="Comunity" />  
    </div>
  )
}

export default App