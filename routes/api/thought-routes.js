const router = require('express').Router();

// import thought controller
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// GET all and POST /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// GET one, PUT, DELETE /api/thoughts/:thoughtId
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/thoughts/:userId
router
    .route('/:userId')
    .post(addThought);

// /api/thought/:thoughtId/reations
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

// Delete /api/thoughts/:thoughtId/reactions/reactionId
router
    .route('/:thoughtId/reactions/:id')
    .delete(removeReaction);

// export router
module.exports = router;