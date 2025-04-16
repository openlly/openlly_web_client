import {google} from "googleapis"
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_id: process.env.CLIENT_ID,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({version: "v4", auth});

export default sheets;

