module.exports = {
    purge: [
      // Paths to your HTML files that use Tailwind CSS classes
      'index.html'
      // Add more file paths if needed
    ],
    media: false, // or 'media' or 'class'
    theme: {
      extend: {
        // You can extend the default Tailwind CSS theme here
      },
    },
    variants: {
      extend: {
        // You can extend or override Tailwind CSS variants here
      },
    },
    plugins: [
      // You can add custom plugins here
    ],
  }
  