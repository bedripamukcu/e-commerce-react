import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2'>
        <img onClick={()=> window.location = `detail/ ${prd.id}`} className='h-32 object-cover' src={prd?.image} alt = "" />
        <div className='font-bold h-16 text-center'> {(prd?.title).substring(0,36)}</div>
        <div className='text-center text-sm'> {(prd?.description).substring(0,45)} ...</div> {/* cümlenin hepsini değil 0-45 satır */}
        <div className='font-bold text-lg'> {prd?.price}TL</div>
        <button className='bg-indigo-600 w-full p-2 rounded-lg text-white'>SEPETE EKLE</button>
    </div>
  )
}

export default ProductCard