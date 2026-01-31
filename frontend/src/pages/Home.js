//rafce short form for this code
// import React, { useEffect, useState } from 'react'
import React, { useEffect  } from 'react'


//component
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForms from '../components/WorkoutForms'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
//import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {

  // const[workouts, setWorkout] = useState(null)

  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(()=>{
    const fetchWorkouts = async () => {

      if(!user)
        return
      
      const response = await fetch('/api/workouts/',{
        headers:{
          'Authorization': `Bearer ${user.token}`
        },
      })
      const json = await response.json()

      if(response.ok){
        // setWorkout(json)

        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    
    if(user){
      fetchWorkouts()
    }


    fetchWorkouts()
  }, [dispatch, user]) 

  //key={workout._id}
  return (
    <div className='home'>
      <div className='workout'>
        {
          workouts && workouts.map((workout)=>(
            // <p key={workout._id} >{workout.title}</p>
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        }
      </div>

      <WorkoutForms />
    </div>
  )
}

export default Home
