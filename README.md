# Jade & Oak

A single-page web application for a wellness retreat and e-commerce site built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Responsive design for all device sizes
- Modern UI with Tailwind CSS
- Type-safe code with TypeScript
- Fast development with Vite
- AWS Amplify deployment

## Pages

- **Home**: Landing page with featured events and products
- **Events**: Listing of wellness retreats, workshops, and classes
- **Shop**: E-commerce section for wellness products
- **Blog**: Articles and insights on wellness topics
- **About**: Information about Jade & Oak and contact form

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Deployment**: AWS Amplify

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jade-and-oak.git
   cd jade-and-oak
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured for deployment to AWS Amplify. To deploy:

1. Set up your AWS Amplify app and update the `.env.production` file with your AWS configuration.

2. Run the deployment script:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

## Future Enhancements

- API integration for dynamic content
- E-commerce backend integration (Shopify or similar)
- User authentication
- Event registration functionality
- CMS integration for blog content

## License

This project is licensed under the MIT License - see the LICENSE file for details.
