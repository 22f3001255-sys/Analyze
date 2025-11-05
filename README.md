# Minimal Static Web App with execute.py and data

## Overview

This repository contains:

- `execute.py`: A Python 3.11+ script that processes `data.csv` (converted from `data.xlsx`) using Pandas 2.3.
- `data.csv`: CSV data converted from the provided `data.xlsx` file.
- `.github/workflows/ci.yml`: A GitHub Actions workflow that runs `ruff` linter, executes `execute.py` to produce `result.json`, and publishes `result.json` via GitHub Pages.
- `index.html`, `style.css`, `script.js`: A minimal static web page that attempts to fetch and display the published `result.json` file.

## Usage

### Local development

- You can open `index.html` locally but `result.json` will not be available locally since it is not committed and generated only in CI.

### CI/CD

- On push to `main`, GitHub Actions will:
  - Run `ruff` linting.
  - Run `execute.py` to generate `result.json`.
  - Publish `result.json` on GitHub Pages branch `gh-pages`.

## Requirements

- Python 3.11+
- Pandas 2.3
- Ruff linter

## Notes

- `result.json` is not committed and only generated and published via GitHub Actions.
- To see the results, visit the GitHub Pages URL for this repository after a successful workflow run.