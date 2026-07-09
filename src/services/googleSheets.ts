export async function appendRowToGoogleSheet(rowValues: any[]) {
  const webappUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

  if (!webappUrl) {
    console.warn("Google Sheet Webapp URL is not configured.");
    throw new Error("Google Sheets configuration missing.");
  }

  const response = await fetch(webappUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: rowValues,
    }),
  });

  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(`Failed to log to Google Sheets: ${errorMsg}`);
  }

  return await response.json();
}
