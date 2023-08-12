import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productsActionDetail } from '../redux/actions/products';
import { useParams } from 'react-router-dom';
import {CgMathMinus,CgMathPlus} from 'react-icons/cg'
import { productsCard } from '../redux/actions/card';

const Detail = () => {
    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch()
    const {product} =  useSelector(state => state.product)

    useEffect(() => {
    dispatch(productsActionDetail(id))
    }, [dispatch])

    const [count,setCount] = useState(0)

    const increment = (stock) => {
        if (count <= stock){
            setCount(count+1)
        }
    }
    const decrement = () => {
        if (count > 0){
            setCount(count-1)
        }
    }

    const addCard = () => {
        dispatch(productsCard(id,count))
        dispatch ({type: 'DRAWER' , payload: true})
    }

  return (
    <div className='w-full flex items-center justify-center space-x-5'>
        <img className='w-1/3' src={product?.image} alt="" />
        <div className='w-2/3' space-y-5>
            <div className='font-bold text-xl'> {product?.title}</div>
            <div className='opacity-70'> {product?.description}</div>
            <div className='opacity-70 text-xl'> {product?.category}</div>
            <div className='opacity-70 text-xl'>Rate: {product?.rating?.rate} - Stock:{product?.rating?.count} </div>
            <div className='font-bold text-xl'> Fiyat: {product?.price}</div>

            <div className='flex items-center space-x-4'>
                <CgMathMinus onClick={decrement} className='cursor-pointer border rounded-full p-1' size={30}/>
                <span className='text-2xl' >{count}</span>
                <CgMathPlus onClick={() => increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1'  size={30}/>
            </div>
            <button onClick={addCard} className='p-3 bg-indigo-600 w-full text-center rounded-lg text-white text-lg'> Sepete ekle </button>
        </div>
    </div>
  )
}

export default Detail