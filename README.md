# Expert Listing — Admin Dashboard

A modern, responsive, and feature-rich Admin Dashboard built for **Expert Listing** — a real estate management platform. This application provides real-time insights into sales overview, property listings performance, user accounts, and platform transactions.

---

## ✨ Features

- 📊 **Sales & Financial Overview**: Visual metrics for total revenue, wallet balance, and interactive modal transaction logs.
- 🏠 **Property & Listing Insights**: Interactive carousels showcasing total site visits, most clicked properties, and watchlisted listings.
- 👥 **User & Agent Management**: Comprehensive breakdown of registered agents, active buyers, and geographic distribution metrics.
- 🔗 **URL Tab Synchronization**: Seamless navigation with URL query parameter support (`?tab=Listings`, `?tab=Users`, etc.) allowing direct page bookmarking and browser history integration.
- ⚡ **Smooth UX & Splash Screen**: Minimalist 2-second initial loading screen and click-outside dismiss listeners on all popups, dropdown menus, and modal dialogs.
- 📱 **Fully Responsive Layout**: Custom mobile drawer navigation and optimized touch-friendly interface across all screen sizes.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tooling**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed on your environment:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (comes bundled with Node.js)

### Installation & Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/davidwale/expert-listing.git
   cd expert-listing
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📦 Production Build

To test or generate the production build bundle:

```bash
# Type check and build bundle
npm run build

# Locally preview production build
npm run preview
```

---

## 📁 Project Structure

```
expert-listing/
├── public/                  # Static assets (Logos, SVGs)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── DetailModal.tsx
│   │   ├── Header.tsx
│   │   ├── ListingsOverviewCard.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navigation.tsx
│   │   ├── PropertyCardSection.tsx
│   │   ├── SalesOverviewCard.tsx
│   │   ├── TransactionsModal.tsx
│   │   └── UserOverviewCard.tsx
│   ├── data/                # Mock data & datasets
│   │   └── mockData.ts
│   ├── types/               # TypeScript interfaces & types
│   │   └── dashboard.ts
│   ├── App.tsx              # Main application root
│   ├── main.tsx             # React DOM entrypoint
│   └── index.css            # Tailwind CSS directives
├── package.json
└── vite.config.ts
```
