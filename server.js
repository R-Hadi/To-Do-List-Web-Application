const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the environment port or 3000 for local development

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});