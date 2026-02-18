require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");

const User = require("../models/user.model");
const Product = require("../models/product.model");

const seedData = async () => {
  try {
    await connectDB();

    // Clear old data
    await User.deleteMany();
    await Product.deleteMany();

    // Create users
    const password = await bcrypt.hash("123456", 10);

    const users = await User.insertMany([
      {
        name: "Mohit",
        email: "mohit@test.com",
        password,
      },
      {
        name: "Test User",
        email: "test@test.com",
        password,
      },
    ]);

    const productsData = [
      {
        title: "iPhone 13",
        price: 50000,
        description: "Excellent condition iPhone",
        image: "https://imgs.search.brave.com/l44uU6IZ-R0xXbzIvXOdcXAT8mydbqveaiuF1WQnVGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3JM/ZWNjZVVTNVV6OTZj/dzdZaU1nQkouanBn",
        createdBy: users[0]._id,
      },
      {
        title: "MacBook Air",
        price: 75000,
        description: "M1 chip, 8GB RAM",
        image: "https://imgs.search.brave.com/SDbrYYE5xkI3UkKyyo32x6wE_t6oKiu7TP-udsK0Opo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92c3By/b2QudmlqYXlzYWxl/cy5jb20vbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0LzIvMy8yMzg1/OTRfMV8uanBnP29w/dGltaXplPW1lZGl1/bSZmaXQ9Ym91bmRz/JmhlaWdodD01MDAm/d2lkdGg9NTAw",
        createdBy: users[0]._id,
      },
      {
        title: "Gaming Laptop",
        price: 85000,
        description: "RTX Graphics, 16GB RAM",
        image: "https://imgs.search.brave.com/L1fQjzybRljj9vegy4k5SnKwFIW6B2VzqC3LJghaSoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/NjMwLzgyMi9zbWFs/bC9nYW1pbmctbGFw/dG9wLW1vY2t1cC1h/ZHZhbmNlZC10ZWNo/LWRlc2lnbi1mcmVl/LXBob3RvLmpwZw",
        createdBy: users[1]._id,
      },
      {
        title: "Wireless Headphones",
        price: 4000,
        description: "Noise Cancelling",
        image: "https://imgs.search.brave.com/8hsPFubE_dHqgrl_DyF1H3KYW_ziCf_anGGlV8khiXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/MjAyLzI5MC9zbWFs/bC9tb2Rlcm4td2hp/dGUtc2xpbS13aXJl/bGVzcy1oZWFkcGhv/bmVzLXdpdGgtc2ls/dmVyLWRldGFpbHMt/cGhvdG8uanBn",
        createdBy: users[1]._id,
      },
      {
        title: "Smart Watch",
        price: 12000,
        description: "Fitness Tracking Watch",
        image: "https://imgs.search.brave.com/7STTmOI2iDYHC77csZ1S7P9x-4pld-IuUoSIx4FEmVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXlnLmluL2ltYWdl/cy90aHVtYm5haWxz/LzI1MC8yNTAvZGV0/YWlsZWQvMTIwLzI0/MzY4NF8zXy5qcGcu/cG5n",
        createdBy: users[0]._id,
      },
      {
        title: "Bluetooth Speaker",
        price: 3000,
        description: "Portable speaker",
        image: "https://imgs.search.brave.com/D6GBWIOoHSPRY_zTeiEa31lB1WVHPDDhsL0CsKnp2jM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTUzLzQ0MS9zbWFs/bC9zdHlsaXNoLXBv/cnRhYmxlLWJsdWV0/b290aC1zcGVha2Vy/LW9uLXZpYnJhbnQt/c3VyZmFjZS10cmVu/ZHktc3VyZmFjZS1w/aG90by5qcGc",
        createdBy: users[0]._id,
      },
      {
        title: "DSLR Camera",
        price: 60000,
        description: "Professional photography camera",
        image: "https://imgs.search.brave.com/IK5zsDnfLt657Wi-LW-Yp1LkD_WzOAPH6VAVsxc1RF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/ODcyLzMxNi9zbWFs/bC9kc2xyLWNhbWVy/YS13aXRoLWdyZWVu/LWJhY2tncm91bmQt/cGhvdG8uanBn",
        createdBy: users[1]._id,
      },
      {
        title: "Office Chair",
        price: 7000,
        description: "Ergonomic chair",
        image: "https://imgs.search.brave.com/8RwydnfVRIhbYHcV3xFgHGX2w0_WIq554Dbxwm09VxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/OTIwLzU4MC9zbWFs/bC9hLWJsYWNrLW9m/ZmljZS1jaGFpci1p/bi1hLWRhcmstcm9v/bS1mcmVlLXBob3Rv/LmpwZw",
        createdBy: users[1]._id,
      },
      {
        title: "Mechanical Keyboard",
        price: 4500,
        description: "RGB mechanical keyboard",
        image: "https://imgs.search.brave.com/OmSg55TKgKkY8YJ31pup6bwKf80Hx7Lpe0FQvt7qGVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVkcmFnb24uaW4v/Y2RuL3Nob3AvZmls/ZXMvMV8zZWY1YjRi/OC1iZWZmLTRlNWEt/Yjg4NC1iNTA2MWRh/N2ZhZmIucG5nP3Y9/MTczNzAzMDE3MSZ3/aWR0aD0xMDAw",
        createdBy: users[0]._id,
      },
      {
        title: "External SSD",
        price: 8000,
        description: "1TB portable SSD",
        image: "https://imgs.search.brave.com/p0VSS1jvwBhaOchytGa7XkAqz_7HQXGVK2Wj-rR_ll8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/NDE5LzQwNC9zbWFs/bC9tb2Rlcm4tcG9y/dGFibGUtc3NkLWV4/dGVybmFsLWhhcmQt/ZHJpdmUtY29ubmVj/dGVkLW9uLWEtd29v/ZGVuLXRhYmxlLWZy/ZWUtcGhvdG8uanBn",
        createdBy: users[1]._id,
      },
    ];

    await Product.insertMany(productsData);

    console.log("🌱 Data Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
