import {React, useEffect , useState} from "react";
import {filterData,apiUrl} from './data'
import FilterCourse from "./components/FilterCourse";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  let [allCourse,setCourse] = useState([]);
  let [loading , setLoading] = useState(true);

  useEffect(()=>{

      const getResonse = async() =>{

        setLoading(true);

        try {
          
          const response = await fetch(apiUrl);
          const output = await response.json();
          
          setCourse(output.data);

          // console.log(allCourse);
        } catch (error) {
          
          toast.error("error is thrown");
        }

        setLoading(false);
      }

      getResonse();

  },[]);

  let [findCourseBytitle, setFindCourse] = useState("All") ;

  function getId(id){

    setFindCourse(id);
  }

  // console.log(allCourse);

  return (
  <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-slate-500">

    <Navbar />

    <FilterCourse filter_data={filterData} findId={getId} findCourse={findCourseBytitle}/>

    {

      loading ? (<Spinner/>) : (<Cards getAllCourse = {allCourse} findCourse={findCourseBytitle}/>)
    }

    
    <ToastContainer />
  
  </div>);
};

export default App;
