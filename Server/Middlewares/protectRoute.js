import jwt from 'jsonwebtoken';
import { User } from '../Models/user.model.js';

export async function protectRoute(req, res, next) {
    try {
        const token = req.cookies.jwt

        if (!token) {
            res.status(401).send("Unauthorized - No token provided!")
            return
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        if (!decoded) {
            res.status(401).send("Unauthorized - Invalid token!")
            return
        }

        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            res.status(401).send("User not found!")
        }

        req.user = user

        next()

    } catch (error) {
        res.status(500).send("Something went wrong!")
    }
}
