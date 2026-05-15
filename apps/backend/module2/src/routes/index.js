const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const kelasRoutes = require("./kelasRoutes");
const enrollmentRoutes = require("./enrollmentRoutes");
const nilaiRoutes = require("./nilaiRoutes");
const capaianRoutes = require("./capaianRoutes");
const dashboardRoutes = require("./dashboardRoutes");

// grouping routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/kelas", kelasRoutes);
router.use("/enrollment", enrollmentRoutes);
router.use("/nilai", nilaiRoutes);
router.use("/capaian", capaianRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;