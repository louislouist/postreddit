"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reddit = void 0;
const snoowrap_1 = __importDefault(require("snoowrap"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.reddit = new snoowrap_1.default({
    userAgent: process.env.USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD,
});
