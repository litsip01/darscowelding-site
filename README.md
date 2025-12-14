# Darsco Welding Website

Professional mobile welding services website for Darsco Welding, serving the Greater Edmonton Area.

## 🔥 Features

- **Next.js 14+** with App Router and TypeScript
- **Tailwind CSS** for styling
- **Static Site Generation (SSG)** for optimal performance
- **27 optimized pages** including dynamic routes
- **Mobile-responsive** design
- **Docker deployment** ready

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

```bash
docker-compose up -d --build
```

The site will be available on port 8004.

## 📁 Project Structure

```
darscowelding-site/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── gallery/           # Portfolio page
│   ├── services/          # Service pages (index + dynamic)
│   ├── industries/        # Industry pages (index + dynamic)
│   └── locations/         # Location pages (index + dynamic)
├── components/
│   ├── layout/            # Header, Footer
│   └── sections/          # Hero, CTA, ServiceCard
├── lib/
│   └── data.ts            # Data access layer
├── data/
│   └── site-data.json     # Site configuration
├── Dockerfile             # Production container
└── docker-compose.yml     # Docker orchestration
```

## 🎨 Brand Details

- **Brand**: Darsco Welding
- **Domain**: darscowelding.ca
- **Phone**: (780) 405-3244
- **Email**: info@darscowelding.ca
- **Primary Color**: Amber (#d97706)

## 📍 Service Areas

- Edmonton
- Sherwood Park
- Nisku
- Leduc
- Pigeon Lake

## 🔧 Services

- MIG/TIG Welding
- Structural Welding
- Mobile Welding Services
- Fabrication
- Repairs & Maintenance
- Custom Metalwork

## 🏭 Industries Served

- Construction Companies
- Oil & Gas
- Manufacturing
- Agricultural
- Commercial Buildings
- Residential

## 📞 Contact

For support or inquiries:
- Phone: (780) 405-3244
- Email: info@darscowelding.ca
