import { useState } from 'react'
import './Home.css'
import DragAndDrop from '../components/DragAndDrop';
import { createSourceFile } from 'typescript';

const Home = () => {

  const [plans, setPlans] = useState([{}]);
  const [curPlan, setCurPlan] = useState({
    id : 0,
    floorName : "",
    floorSize: "",
    inSize : "",
    exSize : "",
    exType : "",
    faceDir : "",
    floorType: "",
  });

  const handleChange = (e) => {
    setCurPlan({...curPlan, changeName : e.target.value})
    //console.log(({...curPlan, [e.target.name] : e.target.value}))
  }

  const handleSave = (e) => {
    var inArr = false
    for(var i in plans){
      if (i.id === curPlan.id){
        inArr = true;
        break;
      }
    }

    if(inArr){
      var temp = plans;
      plans[curPlan.id] = curPlan;
      setPlans(temp) 
    }else{
      setPlans(...plans, curPlan);
    }
  }

  return (
    <div className='main'>
      {console.log(curPlan)}
      <div className='floor-select'>
        <>
        {plans.map((img) =>{
          <div className='floor-container'>
          </div>
        })}
          <div className='floor-container'> + </div>
        </>
      </div>
      <DragAndDrop multiple={false}/>
      <form>

        <h1>Floor Name</h1>
        <input name='floorName' onChange={handleChange}/>
        <h1>Floor Size</h1>
        <input name='floorSize' onChange={handleChange}/>
        <h1>Interior Size</h1>
        <input name='inSize' onChange={handleChange}/>
        <h1>Exterior Size</h1>
        <input name='exSize' onChange={handleChange}/>

        
        <h1>Exterior Type</h1>
        <select defaultValue="select" name='exType' onChange={handleChange}>
        </select>

        <h1>Facing Directions</h1>
        <select defaultValue="select" name='faceDir' onChange={handleChange}>
          <option value='north'>North</option>
          <option value='east'>East</option>
          <option value='south'>South</option>
          <option value='west'>West</option>
        </select>

        <h1>Floor type</h1>
        <select defaultValue="select" name='floorType' onChange={handleChange}>
          <option value='studio'>Studio</option>
          <option value='1b1b'>One Bed One Bath</option>
          <option value='2b1b'>Two Bed One Bath</option>
          <option value='3b1b'>Three Bed 2 Bath</option>
        </select>
        
        <div>
          <button onClick={(e) => {handleSave(); e.preventDefault()}}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Home