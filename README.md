# Portfolio

Personal portfolio built with Next.js.

## Local Development

1. Install dependencies:

	npm install

2. Start development server:

	npm run dev

## Contact Form Setup (Free)

The Contact section submits directly through FormSubmit (free tier), so no backend API key is required.

Activation steps:

1. Run the site and submit the form once.
2. Check your inbox for FormSubmit activation email.
3. Click the activation link.
4. Future submissions will arrive in your inbox.

Notes:

- Current receiver address is set in the form endpoint inside src/components/Contact.tsx.
- If you want a different inbox, replace the email inside the FormSubmit endpoint URL.

## Build

To verify production build locally:

npm run build
