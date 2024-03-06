import React, { useState } from 'react';
import { FcLike,FcLikePlaceholder  } from "react-icons/fc";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {

    // console.log(props.info)
    let liked = props.likedCousre;
    let setLiked = props.setLikedCourse;

    let data = props.info;
    let des = data.description;
    // console.log(data.id)
    function clickHandler(){

      if(liked.includes(data.id)){

        setLiked((prev) => prev.filter((cid)=> (cid !== data.id) ));
        
        toast.warning("Like removed");
      }
      else{
        
        if(liked.length === 0){

          setLiked([data.id]);
        }
        else{
          setLiked((prev) => [...prev, data.id])
        }

        toast.success("liked successfully");
      }
    }

  return (
    <div className='w-[330px] h-[350px] bg-bgDark rounded-lg overflow-hidden relative'>
    
        <div className='relative'>
            <img src={`${data.image.url}`} alt='' className='w-[full]'></img>
        </div>
        <div className='absolute top-[45%]  bg-slate-200 rounded-full right-[0%] cursor-pointer mr-2'>

          <button onClick={clickHandler} className=' rounded-full p-3'>

            {
              liked.includes(data.id) ? (<FcLike className='text-2xl' />) :
                (<FcLikePlaceholder className='text-2xl'/>)
            }

          </button>

        </div>

        <div className='text-white m-2 p-2'>

            <p className=' mb-3 font-semibold'>{data.title}</p>
            <p>{`${des.slice(0,100)}.....`}</p>

        </div>
    
    </div>
  )
}

export default Card;