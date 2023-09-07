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

# Define a build argument for the port, with a default value of 3000
ARG PORT=3000

# Expose a port
EXPOSE $PORT

# Start the application
CMD ["npm", "start"]
