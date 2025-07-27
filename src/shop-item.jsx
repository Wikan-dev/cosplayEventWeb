import starKosong from './assets/star/starKosong.png';
import starIsi from './assets/star/starIsi.png';




const Item = ({ title, harga, bintang, rating, deskripsi}) => {
    const maxStars = 5;

    return (
       <div>
         <div className="relative p-3 pb-50 w-fit  h-130 bg-white">
            <div className="w-70 h-70 bg-red-500 "></div>
            <h1 className='font-bold text-[30px]'>{title}</h1>
            <h1 className='text-[20px]'>{harga}</h1>

            <div className="flex gap-1">
              {Array.from({ length: maxStars }, (_, i) => (
                <img
                  key={i}
                  src={i < rating ? starIsi : starKosong}
                  alt={i < rating ? 'Solid Star' : 'Empty Star'}
                  className="w-6 h-6"
                />
              ))}
            </div>

            <h1 className=''>{deskripsi}</h1>
        </div> 
       </div>
    )
}

export default Item