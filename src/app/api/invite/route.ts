import { NextRequest, NextResponse } from 'next/server';
import sheets from './lib/google_auth';

export async function POST(request: NextRequest, response: NextResponse) {
    //check if email in body is already in the sheet
    const body = await request.json();
    const email = body.email;
    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    //found in email column
    const sheet = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'A:A',
    });
    const rows = sheet.data.values;
    const row = rows?.find((row) => {
        // Check if row exists and first cell contains valid email
        return row && row[0] && emailRegex.test(row[0]) && row[0] === email;
    });
    if (row) {
        return NextResponse.json({ error: 'You are already in the invite list' }, { status: 400 });
    }
    //add to sheet
    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'A:A',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
            values: [[email]]
        }
    });
    return NextResponse.json({ message: 'Email added to sheet' }, { status: 200 });

}
export async function GET(request: NextRequest, response: NextResponse) {
    // Set cache control headers for 5 minutes
    const headers = {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300'
    };

    //get count
    const sheet = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'A:A',
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //check if rows are valid emails
    const rows = sheet.data.values;
    const validRows = rows?.filter((row) => {
        return row && row[0] && emailRegex.test(row[0]);
    });
    const count = validRows?.length;
    
    return NextResponse.json(
        { count: count }, 
        { 
            status: 200,
            headers
        }
    );
}
