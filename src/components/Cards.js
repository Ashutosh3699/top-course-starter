import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = ({getAllCourse, findCourse}) => {


  let allCourse = [];
  
  let [liked,setLiked] = useState([]);

  // console.log(getAllCourse)

  if(getAllCourse === null){

    return(

      <div className='w-[100%] relative top-[30%] flex flex-col justify-center items-center gap-4'>

        <h3 className=' font-bold text-1xl text-white'>No Data Available...</h3>
    </div>
    );
  }

  const getCourse = () =>{

    // console.log(getAllCourse);

    if(findCourse === "All"){

      Object.values(getAllCourse).forEach((course)=>{

        course.forEach((val)=>{

          allCourse.push(val);

        })
        
      })
    }
    else{

      // console.log("else");

      for (const key in getAllCourse) {

        if (key === findCourse) {
          
          getAllCourse[key].forEach((val)=>{

            allCourse.push(val);
          })
          
        }
      }
      

    }

    return allCourse;

  }

  // console.log(allCourse)
  return (
    <div className='flex flex-wrap gap-3 w-3/4 justify-center mx-auto mt-8 relative'>

      {
        getCourse().map((courses)=>{

          return <Card key={courses.id} info={courses} likedCousre={liked} setLikedCourse ={setLiked} />
        })
      }

    </div>
  )
}

export default Cards;