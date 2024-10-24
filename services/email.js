const nodemaller = require('nodemailer');
const { USER_EMAIL, USER_PASSWORD } = require('../config/credentials')

const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.brevo.com";

const SENDER_EMAIL = "btech10361.19@bitmesra.ac.in";
const RECIEVER_EMAIL = "anupriyashahdeo2001@gmail.com"

const CC = []
const BCC = []

const email_Subject = "Birthday wishes"
const email_body = "Happpy Bithday To YOU"

const options = {
    from: SENDER_EMAIL,
    to: RECIEVER_EMAIL,
    cc: CC,
    bcc: BCC,
    subject: email_Subject,
    html: email_body
}

const transporter = nodemaller.createTransport({
    host: HOST_SERVICE,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD
    }
})

module.exports = { transporter, options }