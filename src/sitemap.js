const SitemapGenerator = require('sitemap-generator');
const generator = new SitemapGenerator('https://ayurveda-c0b70.firebaseapp.com/', {
    filepath: '../dist/sitemap.xml', // Save the sitemap.xml file in the 'dist' directory
    stripQuerystring: true // Strip query parameters from URLs
});

generator.on('done', () => {
    console.log('Sitemap generated successfully');
});

// Start the generator
generator.start();
