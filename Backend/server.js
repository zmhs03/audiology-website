import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
	cors({
		origin: "https://zmhs03.github.io",
		methods: ["GET", "POST", "OPTIONS"],
		allowedHeaders: ["Content-Type"],
	})
);

// Handle preflight OPTIONS
app.options("*", cors());

// Middleware
app.use(express.json());

app.post("/send-email", async (req, res) => {
	const { name, email, subject, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const mailOptions = {
		from: `"${name}" <${email}>`,
		to: process.env.RECEIVER_EMAIL,
		subject: `Contact Form: ${subject}`,
		text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
		`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.json({ success: true });
	} catch (error) {
		console.error("Email error:", error);
		res.status(500).json({ error: "Failed to send email" });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
