import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//register user 
export const register = async (req, res) => {
    try {
        const { fullname, email,  phoneNumber,password, role } = req.body;
        if (!fullname || !email || !phoneNumber  || !password || !role) {
          
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            }
            );
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "Email already exists",
                success: false
            });
        }
        //converting password to hash
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });
        await newUser.save();

        return res.status(201).json({
            message: `Account  created  successfully ${newUser.fullname}`,
            success: true
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "server error registering user",
            success: false
        });
    }
};

export const login = async (req, res) => {
    try {
      const { email, password, role } = req.body;
      if (!email || !password || !role) {
        return res.status(400).json({
          message: "Please fill all the fields",
          success: false,
        });
      }
  
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Incorrect password",
          success: false,
        });
      }
  
      // Check user role
      if (user.role !== role) {
        return res.status(403).json({
          message: "Unauthorized access",
          success: false,
        });
      }
  
      // Generate token
      const tokenData = {
        userId: user._id,
      };
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
  
      user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };
  
      // Set cookie and send response
      return res
        .cookie("token", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
          httpOnly: true,
          sameSite: "Strict",
        })
        .status(200)
        .json({
          message: `Welcome ${user.fullname}`,
          user,
          success: true,
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Server error logging in",
        success: false,
      });
    }
  };
  
// logout  user
export const logout = async (req, res) => {
    try {
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
        message: "Logged out successfully",
        success: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Server Error logging out",
        success: false,
      });
    }
  };
  

export const updateProfile = async (req, res) => {
    try {
      const { fullname, email, phoneNumber, bio, skills } = req.body;
      const file = req.file;
  
      const userId = req.id; // Assuming authentication middleware sets req.id
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
  
      if (fullname) user.fullname = fullname;
      if (email) user.email = email;
      if (phoneNumber) user.phoneNumber = phoneNumber;
      if (bio) user.profile.bio = bio;
      if (skills) user.profile.skills = skills.split(",");
  
      if (file) {
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        user.profile.resume = cloudResponse.secure_url;
        user.profile.resumeOriginalName = file.originalname;
      }
  
      await user.save();
  
      const updatedUser = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      };
  
      return res.status(200).json({
        message: "Profile updated successfully",
        user: updatedUser,
        success: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Server Error updating profile",
        success: false,
      });
    }
  };


