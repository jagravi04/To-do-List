
#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Install Firebase CLI if not already installed
if ! command -v firebase &> /dev/null
then
    echo "Firebase CLI not found, installing..."
    npm install -g firebase-tools
fi

# Login to Firebase (skip if already logged in)
echo "Logging in to Firebase..."
firebase login

# Initialize Firebase if not already initialized
if [ ! -f "firebase.json" ]; then
    echo "Initializing Firebase..."
    firebase init hosting
fi

# Deploy to Firebase
echo "Deploying to Firebase..."
firebase deploy --only hosting

echo "Deployment complete!"
