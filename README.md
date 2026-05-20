# Touch

Official public website for **Touch**, a mood-based social app developed by IJ Roy. The site provides product information, safety standards, legal policies, account deletion instructions, and contact details for users and platform reviewers.

## Website

https://ij-roy.github.io/touch/

## About Touch

Touch is designed for mood-based social expression through anonymous posts, mood reels, communities, post queues, and community chat. This repository contains the static GitHub Pages site used to explain the app and publish required public policy pages.

## Pages

- Home: overview of Touch and its core experiences
- Child Safety Standards: CSAE and CSAM policy, reporting contact, and escalation commitments
- Privacy Policy: user data and privacy information
- Terms and Conditions: app usage terms
- Community Guidelines: behavior and content expectations
- Account Deletion: instructions for requesting account removal
- Contact: support and reporting contact information

## Project Structure

```text
.
|-- account-deletion/
|-- assets/
|   |-- css/
|   `-- js/
|-- child-safety-standards/
|-- community-guidelines/
|-- contact/
|-- privacy-policy/
|-- public/
|-- terms-and-conditions/
`-- index.html
```

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Local Preview

Because this is a static site, it can be opened directly in a browser:

```text
index.html
```

For a local server preview, run any static server from the repository root, for example:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Developer

Touch is developed by IJ Roy.

## License

This project is licensed under the terms in [LICENSE](LICENSE).
