import User from "../models/User.js";


//Update User CartData : /api/cart/update



export const update = async (req, res) => {
  try {
    const userId = req.userId;
    const { cartItems } = req.body;

    if (!cartItems || typeof cartItems !== 'object') {
      return res.json({ success: false, message: 'Invalid cart items' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    user.cartItems = cartItems;
    await user.save();

    return res.json({ success: true, message: 'Cart updated' });
  } catch (error) {
    console.log("Cart update error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};


// export const update = async (req, res) => {
//   try {
//     const userId = req.userId; // comes from authUser middleware
//     const { cartItems } = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.json({ success: false, message: 'User not found' });

//     user.cartItems = cartItems;
//     await user.save();

//     return res.json({ success: true, message: 'Cart updated' });
//   } catch (error) {
//     return res.json({ success: false, message: error.message });
//   }
// };


// export const update = async (req , res)=>{
//     try {
//         const { userId, cartItems } = req.body
//         await User.findByIdAndUpdate(userId, {cartItems})
//         res.json({ success : true, message: "Cart Updated"})
//     } catch (error) {
//          console.log(error.message);
//        res.json({ success: false, message: error.message });
//     }
// }

