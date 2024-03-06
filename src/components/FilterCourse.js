import React from 'react';

const FilterCourse = (props) => {

    let filterCourse = props.filter_data;
    let category = props.findCourse;

    console.log(category);

    function clickHandler(event){

        props.findId(event.target.innerText);
    }

  return (
    <div className='w-[100%] flex flex-wrap gap-6 my-3 justify-center items-center text-yellow-100 py-2 relative'>

        {
            filterCourse.map((event)=>{

                return(
                    <button key={event.id} onClick={clickHandler} 
                    className={`h-[100%] active:bg-cyan-600 hover:scale-105 py-3 flex justify-center items-center 
                     bg-bgDark rounded-md hover:bg-slate-700 px-5 transition-all 
                     ${ category === event.title ? " border-opacity-90 border-2" : " border-opacity-0"}
                     `}>{event.title}</button>
                );
            })
        }


    </div>
  )
}

export default FilterCourse;