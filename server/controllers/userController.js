import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import Car from "../models/Car.js";

// generate jwt token 
const generateToken=(userId)=>{
    const payload = userId; 
    return jwt.sign(payload,process.env.JWT_SECRET)
}

// register user 
export const registerUser = async(req,res)=>{
    try {
        const {name,email,password}=req.body

        if(!name || !email || !password){
            return res.json({success:false, message:"Fill all the fields"})
        }

        // 3. Check password length
        if (password.length < 8) {
        return res.json({
        success: false,
        message: "Password must be at least 8 characters long.",
        });
        }

        // Validate email format (Gmail-only)
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!gmailRegex.test(email)) {
            return res.json({
                success: false,
                message: "Only valid Gmail addresses are allowed.",
            });
        }


        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({success:false, message:"User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({name,email,password:hashedPassword})
        const token =generateToken(user._id.toString())
        res.json({success:true, token, message:"User data created successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }

}

// login user

export const loginUser=async(req,res)=>{
 try {
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return res.json({success:false, message:"User not found"})
    }
    const isMatched= await bcrypt.compare(password,user.password)
    if(!isMatched){
        return res.json({success:false, message:"Invalid Credentials"})
    }
    const token =generateToken(user._id.toString())
        res.json({success:true, token, message:"Login successfully"})
 } catch (error) {
    console.log(error.message)
    res.json({success:false, message:error.message})   
 }   
}

// get user data  using jwt token

export const getUserData=async(req,res)=>{
    try {
        const {user}=req;
        res.json({success:true,user, message:"user data fetched"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})   
    }
}

// get all cars for frontend 

export const getCars=async(req,res)=>{
    try {
        const cars= await Car.find({isAvaliable:true})
        res.json({success:true,cars, message:"all available cars fetched"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})   
    }
}
