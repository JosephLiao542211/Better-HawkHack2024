"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const corsOptions = {
    origin: 'http://localhost:5173/',
};
app.use((0, cors_1.default)(corsOptions));
const PORT = 3000;
app.get('/api', (req, res) => {
    res.json({ message: 'penis2' });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
