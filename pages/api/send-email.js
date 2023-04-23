import nodemailer from 'nodemailer'

const GMAIL_SERVER_HOST = 'smtp.gmail.com'
const GMAIL_SERVER_PORT = 465

export default async function handler(req, res) {
  if (req.method !== 'POST') { 
    res.status(501).send('Not implemented') 
    return
  }

  const { from = {}, message } = req.body
  const { name, email } = from

  if (!name || !email || !message) {
    res.status(400).send('Missing sender info or message') 
    return
  }

  try {
    await sendEmail(name, email, message)
    res.status(200).send('Email succesfully sent')
  } catch(err) {
    console.log(err)
    res.status(500).send('An error has occurred while sending the email')
  }
}

async function sendEmail(fromName, fromEmail, message) {
  let transporter = nodemailer.createTransport({
    host: GMAIL_SERVER_HOST,
    port: GMAIL_SERVER_PORT,
    secure: true,
    auth: {
      user: 'andreamafessoni@gmail.com',
      pass: 'vlmpwscabzqehwxx',
    },
  })

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: 'andreamafessoni@gmail.com',
    subject: `You got a new message from ${fromName} <${fromEmail}>! ⭐️`,
    text: message,
  })
}