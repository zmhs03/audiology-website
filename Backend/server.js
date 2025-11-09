import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const allowedOrigins = [
	"http://localhost:3000",
	"https://zmhs03.github.io",
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		methods: ["GET", "POST"],
		credentials: true,
	})
);

app.use(express.json());

app.post("/send-email", async (req, res) => {
	const { name, email, subject, message } = req.body;

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
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
		console.error(error);
		res.status(500).json({ error: "Failed to send email" });
	}
});

app.listen(process.env.PORT || 5000, () => {
	console.log("Server running on port 5000");
});
