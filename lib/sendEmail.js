export default async function sendEmail (fromName, fromEmail, message) {
  const payload = {
    from: { name: fromName, email: fromEmail },
    message
  }

  return new Promise((resolve, reject) => 
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(res => {
        res.text().then(text => res.status === 200 ? resolve(text) : reject(text))
      })
      .catch(err => reject(err))
  )
}