import { useState } from "react"

const ItemBelanja = ({ id, harga, deskripsi, nama, checkedItems, setCheckedItems }) => {
    const [counter, setCounter] = useState(0);

    const minusFunction = () => {
        setCounter((prev) => prev > 0 ? prev -1 : 0);

        if (counter == 1) {
            const hapus = confirm("yakin ingin menghapus dari keranjang?");

            if (hapus ) {
                console.log("barang terhapus");
            } else {
                console.log("barang tidak di hapus");
            }
        }
    }

    const handleCheckBox = (e) => {
        const isChecked = e.target.checked;
        setCheckedItems((prev) => ({
            ...prev,
            [id]: isChecked,
        }));
    }

    const plusFunction = () => {
        setCounter((prev) => prev +1);
    }

    return (
        <div className="w-full bg-white p-4 outline-2 relative mb-10">
            
            <div className="flex flex-row">
                <div className="w-70 h-70 bg-red-500 mr-4"></div>
                <div>
                    <h1 className="font-bold text-[40px]">{nama}</h1>
                    <h1 className="font-bold text-[30px]">{harga}</h1>
                    <h1 className="text-[30px]">{deskripsi}</h1>
                </div>
                <input type="checkbox" className="absolute right-10 scale-150 " onChange={handleCheckBox} checked={checkedItems[id] || false}/>
                <div className="flex flex-row bg-gray-200 w-30 justify-center h-10 gap-10 font-bol absolute right-10 bottom-10">
                    <button onClick={minusFunction}>-</button>
                    <h1 className="h-5 pt-2">{counter}</h1>
                    <button onClick={plusFunction}>+</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

const Keranjang = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const [cartCount, setCartCount] = useState(0);

    const totalChecked = Object.values(checkedItems).filter(Boolean).length;

    console.log(cartCount);

    return (
        <div className="bg-gradient-to-b from-[#FFD1D2] to-white relative">
            <div>
                <h1 className="font-bold text-center text-[20px] mb-5">Keranjang</h1>
                <h1></h1>
            </div>

            <div className="bg-white h-20 flex flex-row fixed w-full z-2 bottom-0 drop-shadow-xl/50">
                <h1 className="font-bold text-[30px] pt-4 pl-5">
                    Checkout<span>({totalChecked})</span>
                </h1>
                <button className="absolute right-10 top-5 bg-red-200 px-4 py-1 font-bold rounded-[20px] text-[20px]">Checkout</button>
            </div>
            <ItemBelanja harga="Rp10.000" deskripsi="bebas" nama="produk 1" checkedItems={checkedItems} setCheckedItems={setCheckedItems} id="1"/>
            <ItemBelanja harga="Rp10.000" deskripsi="bebas" nama="produk 1" checkedItems={checkedItems} setCheckedItems={setCheckedItems} id="2" />
            <ItemBelanja harga="Rp10.000" deskripsi="bebas" nama="produk 1" checkedItems={checkedItems} setCheckedItems={setCheckedItems} id="3"/>  
        </div>
    )
}

export default Keranjang