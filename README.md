# Portfolio Website

This is a personal portfolio website built with React, Three.js, and Tailwind CSS. The project showcases skills, projects, and experiences with interactive 3D elements.

## Live Demo

The portfolio is live at: [spyscout.netlify.app](https://spyscout.netlify.app/)

## Features

- Interactive 3D models using Three.js
- Smooth animations with @react-spring/three
- Contact form with EmailJS integration
- Modern UI with Tailwind CSS
- Routing with React Router
- Toast notifications using React Toastify
- Responsive design for all devices

## Technologies Used

### Frontend

- React 18
- React Three Fiber & Drei (for 3D elements)
- Tailwind CSS
- React Router
- React Toastify

### Development & Build Tools

- Vite (for fast development and build)
- ESLint (for code linting)
- PostCSS & Autoprefixer (for CSS processing)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build the project:**

   ```sh
   npm run build
   ```

5. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Environment Variables

Create a `.env` file in the root directory and add the required environment variables for EmailJS:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

The website is deployed on [Netlify](https://www.netlify.com/). To deploy:

1. Push your code to GitHub.
2. Connect the repository to Netlify.
3. Set up environment variables in Netlify's settings.
4. Deploy!

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to modify this README as per your needs!
