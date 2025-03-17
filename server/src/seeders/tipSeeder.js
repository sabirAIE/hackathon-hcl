const Tip = require("../models/Tips")

const predefinedTips = [
    { text: "Drink at least 8 glasses of water daily to stay hydrated.", category: "health" },
    { text: "Take a 10-minute walk after meals to improve digestion.", category: "fitness" },
    { text: "Include at least one serving of vegetables in every meal.", category: "nutrition" },
    { text: "Practice deep breathing for 5 minutes daily to reduce stress.", category: "mental-health" },
    { text: "Get at least 7-8 hours of sleep every night for optimal health.", category: "health" },
    { text: "Limit screen time before bed to improve sleep quality.", category: "general" },
    { text: "Start your day with a healthy breakfast to boost energy levels.", category: "nutrition" }
];
Tip.insertMany(predefinedTips)
    .then(() => console.log('Tips seeded successfully'))
    .catch((err) => console.error('Error seeding tips:', err));