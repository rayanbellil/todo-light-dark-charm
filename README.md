# Modern Todo App

A beautiful, modern todo application built with React, TypeScript, and Tailwind CSS. Features a clean minimal UI with dark/light mode toggle, smooth animations, and localStorage persistence.

![Modern Todo App](https://via.placeholder.com/800x400/6366f1/white?text=Modern+Todo+App)

## ✨ Features

- **Task Management**: Add, edit, mark as complete, and delete tasks
- **Priority System**: Set task priorities (Low, Medium, High)
- **Smart Filtering**: View all tasks, active tasks, or completed tasks
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Persistent Storage**: Tasks saved to localStorage automatically
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Beautiful micro-interactions and transitions
- **Clean UI**: Modern, minimal design with thoughtful typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd modern-todo-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:8080`

## 🛠️ Built With

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and design system
- **Vite** - Build tool and dev server
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI components

## 📱 Usage

### Adding Tasks
1. Type your task in the input field
2. Select a priority level (Low, Medium, High)
3. Press Enter or click the "Add" button

### Managing Tasks
- **Complete**: Click the checkbox next to any task
- **Edit**: Click the edit icon to modify task text
- **Delete**: Click the trash icon to remove a task

### Filtering Tasks
- **All**: View all tasks
- **Active**: View incomplete tasks
- **Completed**: View finished tasks

### Theme Toggle
Click the sun/moon icon in the top-right corner to switch between light and dark modes.

## 🎨 Design System

The app uses a modern design system with:
- **Purple/Blue Primary**: Modern gradient accent colors
- **Semantic Colors**: Success, warning, and error states
- **Smooth Animations**: Fade, slide, and scale transitions
- **Responsive Typography**: Clean, readable fonts
- **Consistent Spacing**: Harmonious layout system

## 🔧 Customization

### Colors
Edit the CSS custom properties in `src/index.css` to customize the color scheme:

```css
:root {
  --primary: 252 83% 65%;
  --background: 240 10% 98%;
  /* ... other colors */
}
```

### Animations
Modify animation timings and effects in `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fade-in 0.3s ease-out',
  'scale-in': 'scale-in 0.2s ease-out',
  // ... other animations
}
```

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🚀 Deploy to GitHub Pages

1. Install the GitHub Pages deployment package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

3. Deploy:
```bash
npm run deploy
```

Your app will be available at `https://yourusername.github.io/your-repo-name`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Design inspiration from modern todo apps

---

**Enjoy staying productive with your new Modern Todo App!** ✅
