const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require("../middleware/auth");

/**
 * @method - GET
 * @param - /shop/list
 * @description - retrieve the current shopping list
 */

router.get('/list', auth, async (req, res) => {
    try {
        // req.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.send(user.shoppingList);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
});

/**
 * @method - POST
 * @param - /shop/add
 * @description - add a new item to the list
 */

 router.post('/add', auth, async (req, res) => {
    try {
        // req.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        user.shoppingList.push(req.body.item);
        await user.save();
        res.send(user.shoppingList);
    } catch (e) {
      res.send(e);
    }
});

/**
 * @method - DELETE
 * @param - /shop/delete
 * @description - delete an item from the list
 */

router.delete('/delete', auth, async (req, res) => {
    try {
        // req.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        user.shoppingList.pull(req.body.item);
        await user.save();
        res.send(user.shoppingList);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
});

module.exports = router;
