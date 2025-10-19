import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'pranavkarthik2007.96@gmail.com',
    to: 'delivered@resend.dev',
    subject: 'Your OTP for NITR Travel Mates',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();