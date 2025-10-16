#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sessionPath = path.join(__dirname, 'session.json');

try {
    console.log("=========================================================");
    console.log('Welcome to Collab Days BE 2025');
    console.debug('Loading session data from session.json...');
    const sessionData = JSON.parse(fs.readFileSync(sessionPath, 'utf8'));
    console.log(`Session Title: ${sessionData.title} 🧑‍🏫`);
    console.log("=========================================================");
    // For each speaker, print their name and topic
    sessionData.speakers.forEach((speaker, index) => {
        console.log(`Speaker ${index + 1}: ${speaker.name}`);
        console.log(`Bio: ${speaker.bio}`);
    });
} catch (err) {
    console.error('Error loading session.json:', err.message);
}