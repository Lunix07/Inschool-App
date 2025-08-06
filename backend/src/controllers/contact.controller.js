// controllers/contact.controller.js
const contactService = require("../services/contact.service");

exports.submitInquiry = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newInquiry = await contactService.submitInquiry({ name, email, message });
        res.status(201).json({ message: "Inquiry submitted successfully", data: newInquiry });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.getAllInquiries = async (req, res) => {
    try {
        const inquiries = await contactService.getInquiries();
        res.status(200).json(inquiries);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.replyToInquiry = async (req, res) => {
    try {
        const { subject, message } = req.body;
        const { email } = req.params;

        if (!subject || !message) {
            return res.status(400).json({ message: "Subject and message are required" });
        }

        await contactService.replyToInquiry(email, subject, message);

        res.status(200).json({ message: "Reply sent successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to send reply", error: err.message });
    }
};
