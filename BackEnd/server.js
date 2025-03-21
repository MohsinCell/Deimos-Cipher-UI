const express = require("express");
const multer = require("multer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const crypto = require("crypto");

const { encryptText } = require("./encrypt-text");
const { decryptText } = require("./decrypt-text");
const { encryptImage } = require("./encrypt-image");
const { decryptImage } = require("./decrypt-image");
const { encryptVideo } = require("./encrypt-video");
const { decryptVideo } = require("./decrypt-video");

const app = express();
app.use(cors());
app.use(express.json());

// Security Headers
app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    next();
});

// Rate Limiting (100 requests per 15 minutes)
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// Multer for handling file uploads (storing in memory)
const upload = multer({ storage: multer.memoryStorage() });

// Encrypt Text
app.post("/encrypt-text", (req, res) => {
    try {
        const { text, password } = req.body;
        if (!text || !password) throw new Error("Text and password required");
        res.json({ encryptedText: encryptText(text, password) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Decrypt Text
app.post("/decrypt-text", (req, res) => {
    try {
        const { ciphertext, password } = req.body;
        if (!ciphertext || !password) throw new Error("Ciphertext and password required");
        res.json({ decryptedText: decryptText(ciphertext, password) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Encrypt Image
app.post("/encrypt-image", upload.single("image"), async (req, res) => {
    try {
        if (!req.file || !req.body.password) throw new Error("File and password required");

        const encryptedBuffer = await encryptImage(req.file.buffer, req.body.password);

        res.setHeader("Content-Disposition", `attachment; filename=encrypted-image.txt`);
        res.setHeader("Content-Type", "text/plain");
        res.send(encryptedBuffer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Decrypt Image
app.post("/decrypt-image", upload.single("textfile"), async (req, res) => {
    try {
        if (!req.file || !req.body.password) throw new Error("File and password required");

        const encryptedBuffer = Buffer.from(req.file.buffer.toString(), "hex");
        const decryptedBuffer = await decryptImage(encryptedBuffer, req.body.password);

        res.setHeader("Content-Disposition", `attachment; filename=restored-image.png`);
        res.setHeader("Content-Type", "image/png");
        res.send(decryptedBuffer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Encrypt Video
app.post("/encrypt-video", upload.single("video"), async (req, res) => {
    try {
        if (!req.file || !req.body.password) throw new Error("File and password required");

        const encryptedBuffer = await encryptVideo(req.file.buffer, req.body.password);

        res.setHeader("Content-Disposition", `attachment; filename=encrypted-video.txt`);
        res.setHeader("Content-Type", "text/plain");
        res.send(encryptedBuffer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Decrypt Video
app.post("/decrypt-video", upload.single("textfile"), async (req, res) => {
    try {
        if (!req.file || !req.body.password) throw new Error("File and password required");

        const encryptedBuffer = Buffer.from(req.file.buffer.toString(), "hex");
        const decryptedBuffer = await decryptVideo(encryptedBuffer, req.body.password);

        res.setHeader("Content-Disposition", `attachment; filename=restored-video.mp4`);
        res.setHeader("Content-Type", "video/mp4");
        res.send(decryptedBuffer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
