const router = require('express').Router();

//import user-controller functions
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// GET all /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// GET one, PUT, DELETE  on /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST and DELETE on /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

// export router
module.exports = router;