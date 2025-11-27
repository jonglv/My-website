Belfast Black Cats — Upgraded Site (Calendar + Google Form RSVP + API-Football fixtures)

What I included
- FullCalendar on the homepage (month/week/list views)
- Club events pre-seeded in js/calendar.js
- Fixtures auto-import from API-Football (api-sports v3)
- RSVP opens your Google Form (set URL in js/config.js)
- Placeholder logo at logo.png (replace with your own file)
- Instructions below for setup and deployment

Important steps before deploying
1) Add your API-Football API key:
   - Open js/config.js and replace PUT_YOUR_API_KEY_HERE with your API key.
   - If your API plan requires different headers (e.g. RapidAPI), edit calendar.js fetch headers accordingly.

2) Add your Google Form URL:
   - Create a Google Form for RSVP (questions: name, email, event name/date, guests).
   - In js/config.js set GOOGLE_FORM_URL to the form's URL.
   - Optionally enable PREFILL_ENABLED and supply PREFILL_PARAMS to auto-fill event details when opening the form.

3) CORS note:
   - Many sports APIs do not allow direct client-side (browser) requests due to CORS restrictions.
   - If you see CORS errors in the browser console, use a server-side proxy or Netlify/Vercel serverless function to call the API and return JSON to the client.
   - Example serverless approach is provided below (simple Node/Express function) — contact me if you want me to create that for you.

4) Replace logo:
   - Overwrite logo.png in the site root with your own logo (recommend PNG 512x512).

5) Deploy:
   - Static hosts: Netlify, Vercel, GitHub Pages, or any static host.
   - If using Netlify or Vercel and you need a serverless proxy for the fixtures, I can add a ready-to-deploy function.

Files created
- index.html, about.html, events.html, membership.html, contact.html
- styles.css
- logo.png (placeholder image)
- js/config.js (you must edit)
- js/calendar.js (main logic)
- README.txt (this file)

Support
- I can (a) add a serverless proxy so the fixtures fetch will work without CORS issues, (b) integrate prefill for Google Forms, or (c) replace the logo with the file you upload and send an updated ZIP.

Enjoy!