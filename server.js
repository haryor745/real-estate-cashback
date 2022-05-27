const express = require("express");
const app = express();
const multer = require("multer");
const { google } = require("googleapis");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static("client/build"));
app.post("/estate_mail", async (req, res) => {
  const body = req.body;
  const {
    cfName,
    cEmail,
    cPhone,
    cDOB,
    cMS,
    cGender,
    cOrigin,
    invested,
    acName,
    duration,
    uorM,
    passport,
    eofP,
    ID,
    appDate,
    kFN,
    kMail,
    kAddress,
    kPhone,
    rCID,
    rFN,
    rMail,
    rPhone,
  } = body;
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "realestatecashbackltd@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  await transporter.sendMail({
    from: cEmail,
    to: "realestatecashbackltd@gmail.com",
    subject: "New Real Estate Cash Back entry!",
    html: `<h1>Real Estate Cash Back Form</h1>
    <p><b>Client’s Full Name</b>: ${cfName}</p>
    <p><b>Client's Email Address: </b>${cEmail}</p>
    <p><b>Phone: </b>${cPhone}</p>
    <p><b>Client's Date of Birth: </b>${cDOB}</p>
    <p><b>Client's Marital Status: </b>${cMS}</p>
    <p><b>Gender: </b>${cGender}</p>
    <p><b>Amount Invested: </b>${invested}</p>
    <p><b>Country: </b>${cOrigin}</p>
    <p><b>Account Name: </b>${acName}</p>
    <p><b>Duration: </b>${duration}</p>
    <p><b>Upfront or Maturity: </b>${uorM}</p>
    <p><b>Application Date: </b>${appDate}</p>
    <p><b>Next of Kin's Full Name: </b>${kFN}</p>
    <p><b>Next of Kin's Email: </b>${kMail}</p>
    <p><b>Next of Kin's Address: </b>${kAddress}</p>
    <p><b>Next of Kin's Phone Number: </b>${kPhone}</p>
    <p><b>Realtor's CID: </b>${rCID}</p>
    <p><b>Realtor's Full Name: </b>${rFN}</p>
    <p><b>Realtor's Email: </b>${rMail}</p>
    <p><b>Realtor's Phone Number: </b>${rPhone}</p>`,
  });
});
app.post("/pdss_mail", cors(), async (req, res) => {
  const body = req.body;
  const {
    cfName2,
    cEmail2,
    cPhone2,
    cDOB2,
    cMS2,
    cGender2,
    cOrigin2,
    invested2,
    acName2,
    duration2,
    uorM2,
    passport2,
    eofP2,
    narration,
    ID2,
    appDate2,
    rCID2,
    rFN2,
    rMail2,
    rPhone2,
  } = body;
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "realestatecashbackltd@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  await transporter.sendMail({
    from: cEmail2,
    to: "realestatecashbackltd@gmail.com",
    subject: "New PDSS entry!",
    html: `<h1>PDSS Form</h1>
    <p><b>Client’s Full Name</b>: ${cfName2}</p>
    <p><b>Client's Email Address: </b>${cEmail2}</p>
    <p><b>Phone: </b>${cPhone2}</p>
    <p><b>Client's Date of Birth: </b>${cDOB2}</p>
    <p><b>Client's Marital Status: </b>${cMS2}</p>
    <p><b>Gender: </b>${cGender2}</p>
    <p><b>Amount Invested: </b>${invested2}</p>
    <p><b>Country: </b>${cOrigin2}</p>
    <p><b>Account Name: </b>${acName2}</p>
    <p><b>Duration: </b>${duration2}</p>
    <p><b>Upfront or Maturity: </b>${uorM2}</p>
    <p><b>Narration: </b>${narration}</p>
    <p><b>Application Date: </b>${appDate2}</p>
    <p><b>Realtor's CID: </b>${rCID2}</p>
    <p><b>Realtor's Full Name: </b>${rFN2}</p>
    <p><b>Realtor's Email: </b>${rMail2}</p>
    <p><b>Realtor's Phone Number: </b>${rPhone2}</p>`,
  });
});
app.post("/contact_mail", cors(), async (req, res) => {
  const body = req.body;
  const { name, email, message } = body;
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "realestatecashbackltd@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  await transporter.sendMail({
    from: email,
    to: "realestatecashbackltd@gmail.com",
    subject: "New contact form entry!",
    html: `<h1>Contact Form Entry</h1>
    <p><b>Name</b>: ${name}</p>
    <p><b>Email</b>: ${email}</p>
    <p><b>Message</b>: ${message}</p>`,
  });
});
app.post("/newsletter", cors(), async (req, res) => {
  const body = req.body;
  const { cEmail, phoneNo } = body;
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "realestatecashbackltd@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  await transporter.sendMail({
    from: cEmail,
    to: "realestatecashbackltd@gmail.com",
    subject: "Newsletter Registration!",
    html: `<h1>New entry to join Newsletter</h1>
    <p><b>Email</b>: ${cEmail}</p>
    <p><b>Phone</b>: ${phoneNo}</p>`,
  });
});
app.post("/partner_form", cors(), async (req, res) => {
  const body = req.body;
  const { pfName, plName, wMail, company, nation, city } = body;
  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "realestatecashbackltd@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  await transporter.sendMail({
    from: wMail,
    to: "realestatecashbackltd@gmail.com",
    subject: "Partner Registration!",
    html: `<h1>Partner Form Entry</h1>
    <p><b>First Name</b>: ${pfName}</p>
    <p><b>Last Name</b>: ${plName}</p>
    <p><b>Company/Organization</b>: ${company}</p>
    <p><b>Work Email</b>: ${wMail}</p>
    <p><b>Country</b>: ${nation}</p>
    <p><b>City</b>: ${city}</p>
    `,
  });
});
const PORT = 7822;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
