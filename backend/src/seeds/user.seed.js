import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "aarti.sharma@example.com",
    fullName: "Aarti Sharma",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "priya.verma@example.com",
    fullName: "Priya Verma",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "neha.kapoor@example.com",
    fullName: "Neha Kapoor",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "anjali.mehra@example.com",
    fullName: "Anjali Mehra",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "radhika.nair@example.com",
    fullName: "Radhika Nair",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "meera.das@example.com",
    fullName: "Meera Das",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "isha.singh@example.com",
    fullName: "Isha Singh",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1544005313-ff6f4e5c524e?crop=faces&fit=crop&w=200&h=200",
  },

  // Male Users
  {
    email: "arjun.kumar@example.com",
    fullName: "Arjun Kumar",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1502767089025-6572583495b0?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "rahul.shah@example.com",
    fullName: "Rahul Shah",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "vikram.rao@example.com",
    fullName: "Vikram Rao",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "siddharth.patel@example.com",
    fullName: "Siddharth Patel",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "rohit.gupta@example.com",
    fullName: "Rohit Gupta",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "manish.jain@example.com",
    fullName: "Manish Jain",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=200&h=200",
  },
  {
    email: "abhishek.mishra@example.com",
    fullName: "Abhishek Mishra",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();