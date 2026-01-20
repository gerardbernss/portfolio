# Modern Web Portfolio

A beautiful, modern portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 16** - React framework for production
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✨ **Modern UI** - Clean and professional design with gradient effects
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔤 **TypeScript** - Type-safe development
- 📧 **Contact Form** - Functional contact form with validation
- 🎯 **SEO Optimized** - Metadata and proper structure
- ⚡ **Performance** - Optimized for speed with Next.js

## Pages

- **Home** - Hero section with featured projects and skills overview
- **Projects** - Showcase of portfolio projects with descriptions and tags
- **About** - Personal information, skills breakdown, and experience highlights
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   ├── ProjectCard.tsx         # Project card component
│   └── SkillCard.tsx           # Skill card component
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `src/app/page.tsx` - Home page content
- `src/app/about/page.tsx` - About page and biography
- `src/app/projects/page.tsx` - Project listings
- `src/components/Navbar.tsx` - Navigation and branding
- `src/components/Footer.tsx` - Footer links and contact info

### Add Your Projects

Update the `projects` array in `src/app/projects/page.tsx` with your project details.

### Customize Colors

The portfolio uses Tailwind CSS for styling. Modify color classes in components to match your brand.

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: React
- **Deployment**: Ready for Vercel, AWS, or any Node.js host

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Import the project in [Vercel](https://vercel.com/)
3. Vercel will automatically detect Next.js and configure it
4. Your site will be deployed!

### Other Deployment Options

You can deploy this Next.js app on any Node.js hosting provider:

- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Self-hosted servers

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to create an issue or reach out through the contact form on the website.

---

Made with ❤️ using Next.js
