// config.js - edit these values before deploying
// Add your API-Football API key here (API-SPORTS / api-football v3)
const API_FOOTBALL_KEY = "PUT_YOUR_API_KEY_HERE";
// If using RapidAPI, set API_HOST and use 'x-rapidapi-key' instead. For api-sports, use 'x-apisports-key' header.
const API_FOOTBALL_HOST = "v3.football.api-sports.io";
// Team search name (Sunderland)
const TEAM_SEARCH_NAME = "Sunderland";
// Number of upcoming fixtures to fetch
const FIXTURE_COUNT = 12;
// Your Google Form URL for RSVPs (open in new tab)
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
// If you want prefilled RSVP links, set PREFILL_ENABLED = true and edit PREFILL_PARAMS below after creating your Google Form.
const PREFILL_ENABLED = false;
const PREFILL_PARAMS = {}; // e.g. { "entry.12345678": "EVENT_TITLE", "entry.87654321":"EVENT_DATE" }
