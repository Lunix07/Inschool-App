const pool = require("../config/db");
const nodemailer = require("nodemailer");

// Submit a new inquiry
exports.submitInquiry = async (data) => {
    const { name, email, message } = data;
    const query = `
        INSERT INTO contacts (name, email, message, status)
        VALUES ($1, $2, $3, 'pending')
        RETURNING *;
    `;
    const values = [name, email, message];

    const { rows } = await pool.query(query, values);
    return rows[0]; // Return the inserted contact
};

// Get all inquiries, latest first
exports.getInquiries = async () => {
    const query = `SELECT * FROM contacts ORDER BY created_at DESC;`;
    const { rows } = await pool.query(query);
    return rows;
};

// Mark an inquiry as replied
exports.markAsReplied = async (id) => {
    const query = `
        UPDATE contacts
        SET status = 'replied'
        WHERE id = $1
        RETURNING *;
    `;
    const { rows } = await pool.query(query, [id]);
    return rows[0]; // Returns the updated row
};

// Optional: Send reply email
exports.replyToInquiry = async (email, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    await transporter.sendMail({
        from: `Inschool Support <${process.env.SMTP_EMAIL}>`,
        to: email,
        subject,
        text: message,
    });

    return { success: true, message: "Email sent successfully" };
};
