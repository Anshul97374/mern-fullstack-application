const express = require('express');
const Workout = require('../models/workoutModels');

const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutControllers');
const requireAuth = require('../middleware/requireAuth')

/**
 * 
Route: /api/workouts
Method: GET
Description: Get all workouts
Access: public
Parameters: None
 */

const router = express.Router()
//require
router.use(requireAuth)

router.get('/',getWorkouts)



/**
 * 
Route: /api/workouts/:id
Method: GET
Description: Get a single workout by its ID
Access: public
Parameters: id
 */


router.get('/:id', getWorkout)



/**
 * 
Route: /api/workouts/:id
Method: POST
Description: Create/Add a new workouut
Access: public
Parameters: None
 */


router.post('/', createWorkout)



/**
 * 
Route: /api/workouts/:id
Method: DELETE
Description: Delete a workout by its ID
Access: public
Parameters: id
 */


router.delete('/:id', deleteWorkout)


/**
 * 
Route: /api/workouts/:id
Method: PATCH
Description: Update workout by its ID
Access: public
Parameters: id
 */


router.patch('/:id', updateWorkout)

module.exports = router





