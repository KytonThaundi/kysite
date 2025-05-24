# Kyton Marko Thaundi - IT Professional Website

A modern, responsive portfolio website showcasing Kyton Marko Thaundi's professional experience as an Information Technology specialist. Built with React, TypeScript, and Tailwind CSS, featuring a full-stack contact form with email functionality.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Contact Form**: Functional email sending with Resend API integration
- **Project Showcase**: Detailed portfolio of professional projects and achievements
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Resend** - Email delivery service
- **dotenv** - Environment variable management

### Development Tools
- **ESLint** - Code linting and formatting
- **Concurrently** - Run multiple commands simultaneously
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
kysite/
├── src/                          # Frontend source code
│   ├── components/               # React components
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact form
│   │   ├── CursorEffect.tsx     # Interactive cursor
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Landing section
│   │   ├── ProjectCard.tsx      # Project display card
│   │   └── Projects.tsx         # Projects showcase
│   ├── hooks/                   # Custom React hooks
│   │   └── useTheme.tsx         # Theme management
│   ├── assets/                  # Static assets
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── pages/                       # Backend API
│   └── api/
│       └── send.js              # Email sending endpoint
├── dist/                        # Production build output
├── public/                      # Public static files
├── .env                         # Environment variables
├── package.json                 # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Resend API Key** (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KytonThaundi/kysite.git
   cd kysite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   cp .env.example .env
   ```

   Update the `.env` file with your configuration:
   ```env
   # Resend API Configuration
   RESEND_API_KEY=your_resend_api_key_here

   # Email Configuration
   EMAIL_TO=your_email@example.com
   ```

4. **Get your Resend API Key**
   - Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
   - Go to your dashboard → "API Keys"
   - Create a new API key
   - Copy the key and update your `.env` file

### Development

Start the development server (runs both frontend and backend):

```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:5173/ (or 5174 if 5173 is in use)
- **Backend API**: http://localhost:5000

### Production Build

Build the application for production:

```bash
# Build both frontend and backend
npm run build:all

# Start production server
npm start
```

This will start:
- **Frontend**: http://localhost:4173/ (optimized build)
- **Backend API**: http://localhost:5000

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (frontend + backend) |
| `npm run client` | Start only the frontend development server |
| `npm run server` | Start only the backend API server |
| `npm run build` | Build frontend for production |
| `npm run build:server` | Prepare backend for production |
| `npm run build:all` | Build both frontend and backend |
| `npm start` | Start production server (frontend + backend) |
| `npm run start:client` | Start only the production frontend |
| `npm run start:server` | Start only the backend server |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code analysis |

## 🔧 API Endpoints

### Contact Form API

**POST** `/api/send-email`

Send an email through the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Failed to send email",
  "error": "Error details..."
}
```

## 🌐 Deployment

### Option 1: Static + API Hosting

**Frontend (Static Hosting):**
- Build: `npm run build`
- Deploy `dist/` folder to:
  - [Netlify](https://netlify.com)
  - [Vercel](https://vercel.com)
  - [GitHub Pages](https://pages.github.com)

**Backend (Server Hosting):**
- Deploy API server to:
  - [Railway](https://railway.app)
  - [Render](https://render.com)
  - [Heroku](https://heroku.com)
  - [DigitalOcean](https://digitalocean.com)

### Option 2: Full-Stack Hosting

Deploy both frontend and backend together:
- [Railway](https://railway.app) - Recommended
- [Render](https://render.com)
- [Fly.io](https://fly.io)

### Option 3: Serverless

Convert API to serverless functions:
- [Vercel Functions](https://vercel.com/docs/functions)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [AWS Lambda](https://aws.amazon.com/lambda/)

## 🔍 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `RESEND_API_KEY` | Resend API key for email sending | Yes | - |
| `EMAIL_TO` | Recipient email address | Yes | - |
| `PORT` | Server port (for deployment) | No | 5000 |

## 🐛 Troubleshooting

### Common Issues

**1. "concurrently is not recognized"**
```bash
# Solution: Reinstall dependencies
npm install
```

**2. "Email sent successfully: undefined"**
- Check if `RESEND_API_KEY` is set correctly in `.env`
- Verify the API key is valid on [resend.com](https://resend.com)

**3. "404 Not Found" on form submission**
- Ensure both frontend and backend are running
- Check Vite proxy configuration in `vite.config.ts`

**4. "Port already in use"**
```bash
# Kill existing processes
taskkill /f /im node.exe
# Or use different ports in the scripts
```

**5. Build fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Development Tips

- Use browser dev tools to check network requests
- Check server logs for API errors
- Verify environment variables are loaded correctly
- Test API endpoints directly with tools like Postman

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kyton Marko Thaundi**
- Email: kythaundi@gmail.com
- LinkedIn: [linkedin.com/in/kyton-thaundi](https://linkedin.com/in/kyton-thaundi)
- GitHub: [github.com/KytonThaundi](https://github.com/KytonThaundi)
- Location: Lilongwe, Malawi

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Resend](https://resend.com/) - Email service
- [Lucide](https://lucide.dev/) - Icon library