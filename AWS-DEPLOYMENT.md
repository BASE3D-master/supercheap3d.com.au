# AWS Amplify deployment

This repository supports two deployment targets:

- `npm run build` keeps the existing ChatGPT Sites/Vinext deployment working.
- `npm run build:aws` creates a static website in `out/` for AWS Amplify Hosting.

## First deployment

1. In AWS Amplify Hosting, choose **Create new app** and connect this GitHub repository.
2. Select the `aws-amplify-ready` branch for the first test deployment.
3. Amplify reads `amplify.yml`, installs locked dependencies and publishes `out/`.
4. Test every page and submit the project enquiry form with multiple attachments.
5. In Amplify, add `supercheap3d.com.au` and `www.supercheap3d.com.au` under **Custom domains**.
6. Set the preferred hostname and redirect the alternative hostname to it.
7. Change only the web DNS records. Preserve all email-related MX and TXT records.

## Search launch checklist

1. Verify the final domain in Google Search Console using a DNS property.
2. Submit `https://supercheap3d.com.au/sitemap.xml`.
3. Inspect the home page and representative service pages, then request indexing.
4. Connect the production GA4 property and configure the successful enquiry as a conversion.
5. Keep the temporary ChatGPT Sites and Amplify test URLs out of search results; only the `.com.au` canonical domain should be submitted to Google.

## Ongoing updates

Merge approved changes into the AWS production branch. Amplify automatically builds and publishes each push. Always verify the form and thank-you route after deployment changes.
