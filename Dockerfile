# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
