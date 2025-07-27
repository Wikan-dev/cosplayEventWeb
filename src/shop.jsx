import Item from "./shop-item"

const Shop = () => {
    return (
        <div className="bg-gradient-to-b from-gray-300 to-white absolute">
            <div className="m-5">
                <input type="text" className="outline-2 w-[70%]" />
                <button className="mx-4 outline-2 px-5 rounded-xl hover:bg-black hover:text-white">Login</button>
                <button className="outline-2 px-5 rounded-xl hover:bg-black hover:text-white">sign-up</button>

                <div className="flex flex-wrap flex-row gap-30 px-35 mt-10 center">
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" /> 
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" />
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" />
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" />
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" />
                    <Item title="produk 1" harga="Rp10.000" rating={3} deskripsi="lorem sdknkdfjba" />
                </div>
            </div>
        </div>
    )
}

export default Shop