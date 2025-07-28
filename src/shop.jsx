import Item from "./shop-item"
import menuBtn from "./assets/menu_button.png"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import keranjang from "./assets/keranjang.svg"

const Shop = () => {
    const [showMenu, setShowMenu] = useState(false);
    const buttonRef = useRef(null);
    const menu = useRef(null);

    const [cartCount, setCartCount] = useState(0);
    console.log(cartCount);

    const handleCart = () => {
      setCartCount((prev) => prev +1);
    }

    const menuToggle = () => {
        setShowMenu((prev) => !prev);
    }

    useEffect (() => {
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
                console.log("click detected outside menu");
            }
        }
        document.addEventListener("mousedown", outsideClick);
        return () => {
            document.removeEventListener("mousedown", outsideClick);
        };
    }, []);
    
    const CartNotif = () => {
        if (cartCount == 0) {
            return (
                <h1 className="relative -top-15 right-2 bg-red-500 text-center rounded-full w-fit p-1 hidden " >{cartCount}</h1>
            )
        } else {
            console.log("succes")
            return (
                <h1 className="relative -top-15 right-2 bg-red-500 text-center rounded-full w-fit p-1 text-white" >{cartCount}</h1>
            )
        }
    }

    return (
        <div className="bg-gradient-to-b from-[#FFD1D2] to-white absolute"> 
            <div className="m-5">
                <img src={menuBtn} ref={buttonRef} onClick={menuToggle} alt="menu" className="relative absolute top-5 left-3 hover:scale-115 duration-1s transition-all"/>
                <div className="mx-auto ">   
                    <input type="text" className="outline-2 w-100 sm:w-200 md:w-320 pl-5 bg-white  mx-20 relative text-left" placeholder="Search item"></input>
                    <div className="w-10 absolute right-10 top-10 hover:scale-115 duration-1s transition-all">
                        <Link to='/keranjang'><img src={keranjang} alt="keranjang"/></Link>
                        <CartNotif />
                    </div>
                    
                </div>
                <div className="flex flex-wrap justify-center gap-6 px-4 mt-10">
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/> 
                    <Item title="produk 1" harga="Rp10.000" rating={1} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" onAddToCart={handleCart}/>
                </div>
                <div className='pt-10 -left-1 h-full bg-gray-200 absolute top-0 overflow-hidden transition-all duration-500' ref={menu} style={{width : !showMenu ? "0px" : "200px", paddingLeft : !showMenu ? "0px" : "20px"}}>
                  <Link to='/login'><h1 className='font-bold'>Login</h1></Link>
                  <Link to='/shop'><h1 className='font-bold'>Shop</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default Shop