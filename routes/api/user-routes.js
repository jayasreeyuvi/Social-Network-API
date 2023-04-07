const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// (/api/users)
router.route("/").get(getAllUser).post(createUser);
router.route("/").get(getAllUser);

//(/api/users/:id)
router.route("/:id").get(getUserById);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

// (/api/users/:userId/friends/:friendId)
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
router.route("/:userId/friends/:friendId").post(addFriend);
module.exports = router;
