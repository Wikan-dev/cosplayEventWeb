import logo from './assets/logo.png';
import mb from './assets/menu_button.png';
import image5 from './assets/image 5.png';
import image2 from './assets/image 6.png';
import { useState, useEffect, useRef } from 'react';

const Card = ({ image , title , location }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const imageRef = useRef(null);

    const toggleImage = () => {
      setIsExpanded(false);
    }

    useEffect(() => {function outsideClick(event) {
        if (imageRef.current && !imageRef.current.contains(event.target)) {
          setIsExpanded(true);
        }
      }
      document.addEventListener("mousedown", outsideClick);
      return () => {
        document.removeEventListener("mousedown", outsideClick);
      };}, []);

    // const toggleImageHeight = () => {
    //   setIsExpanded(!isExpanded);
    // }

    return (
        <div className='block mr-full bg-black mx-7 relative rounded-[15px] my-10 transition-all transition-2000 hover:scale-101' onClick={toggleImage} ref={imageRef}>
            <img src={image} alt="gambar" className='w-[228px] h-[127px] lg:w-[452.5px] lg:h-[251.28px] -z-1 rounded-l-[15px] object-cover' style={{ height: !isExpanded ? '500px' : '', transition: "height 1s ease"}}/>
            <div className='w-[136px] h-[127px] lg:w-[261.87px] lg:h-[251.28px] absolute top-0 left-23 lg:left-48 bg-linear-90 from-[rgba(0, 0, 0, 0)] to-black' style={{ height: !isExpanded ? '500px' : '', transition: "height 1s ease"}}></div>
            <h1 className="text-white right-10 top-7 lg:top-15 absolute font-bold text-[43px] lg:text-[70px]" style={{right : !isExpanded ? "370px" : "",top : !isExpanded ? "3px" : "", transition : "all 1s ease"}}>{title}</h1>

            <div > 
              <input type="text" className='bg-black border border-white w-100 h-6 absolute top-30 left-70 lg:left-130 rounded-sm text-white pl-1' style={{opacity : isExpanded ? "0%" : '', transition : "1s ease"}} />
              <input type="text" className='bg-black border border-white w-100 h-6 absolute top-40 left-70 lg:left-130 rounded-sm text-white pl-1' style={{opacity : isExpanded ? "0%" : '', transition : "1s ease"}} />
              <button type="text" className='bg-white border border-white w-100 h-8 absolute top-50 left-70 lg:left-130 rounded-sm pl-1 text-black' style={{opacity : isExpanded ? "0%" : '', transition : "1s ease"}}>search using google maps</button>
            </div>

            {isExpanded ? 'kecilkan gambar' : 'besarkan gambar'};
        </div>
    )
}

const App = () => {
  const [showMenu, setShowMenu] = useState(true);
  const buttonRef = useRef(null);
  const menu = useRef(null);

  const menuToggle = () => {
    setShowMenu((prev) => !prev);
  }

  useEffect(() => {
    const outsideClick = (event) => {
      if (!event || !event.target) return;

      console.log("clicked", event.target);

        if (
          menu.current && 
          !menu.current.contains(event.target) && 
          buttonRef.current && 
          !buttonRef.current.contains(event.target)
        ) {
          setShowMenu(false);
          console.log('click detected outside the menu');
        }
      }
      document.addEventListener("mousedown", outsideClick);
      return () => {
        document.removeEventListener("mousedown", outsideClick);
      };}, []);

  // function menuToggle() {
  //   if (menu.style.display === "hidden") {
  //     menu.style.display = "block";
  //   } else {
  //     menu.style.display === "hidden";
  //   }
  // }

  return (
    <div>
      <img src={logo} alt="logo" className="absolute min-w-[421.98px] min-h-[457px] max-h-[765.98px] max-h-[741px] right-0 object-cover opacity-[58%] -z-1"/>
        <div className='m-7'>
          <button onClick={menuToggle} ref={buttonRef} className='hover:scale-120 transition-all duration-200'><img src={mb} alt="menu" /></button>
          <h1 className='w-[227px] text-[93px] font-bold'>
            BEST COSPLAY EVENT
          </h1>
          <h3 className='w-[269px] text-[23px] font-md xl-w-[403px]'>
            Find the best and the latest cosplay event from all around the world in just a few clicks
          </h3>
          <button className='bg-black text-white w-[279px] h-[55px] rounded-[7px] mt-[61px] hover:bg-gray-700 hover:scale-110 hover:drop-shadow-xl/70 tranisition-all duration-300'>Join now</button>
        </div>

      <Card image={image5} title="All Event" />
      <Card image={image2} title="Comunity" />  
      <div className='pt-10 h-full bg-gray-200 absolute top-0 overflow-hidden transition-all duration-500' ref={menu} style={{width : showMenu ? "200px" : "0px", paddingLeft : showMenu ? "20px" : "0px"}}>
        <h1 className='text-left font-bold hover:opacity-50 cursor-pointer' >
          login
        </h1>
      </div>      
    </div>
  )
}

export default App