"use strict";

// The GitHub Pages URL location of result.json depends on repo settings and domain
// This example assumes result.json is published at the root of gh-pages branch
// and served at https://<user>.github.io/<repo>/result.json

// To make this generic and functional locally only, we try fetch relative path
// but the file is not commited and must be loaded only from the GitHub Pages deployment.

// This script expects to be served from https://<user>.github.io/<repo>/ or local file where result.json might not exist

async function fetchResultJson() {
  try {
    // Try fetching result.json relative (will fail locally)
    const response = await fetch('result.json', {cache: 'no-cache'});
    if (!response.ok) throw new Error('result.json not found');
    const data = await response.json();
    return data;
  } catch (err) {
    // Provide instruction if loading fails
    return null;
  }
}

async function displayData() {
  const container = document.getElementById('result');
  const data = await fetchResultJson();
  if (data === null) {
    container.innerHTML = '<p><em>result.json not found locally. Please view this page on the GitHub Pages URL where result.json is published.</em></p>';
    return;
  }
  container.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
}

displayData();