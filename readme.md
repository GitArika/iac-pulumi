# Infrastructure as Code with Pulumi

![star](/public/star.gif)

## Overview

[Get Started](https://www.pulumi.com/docs/iac/get-started/aws/)

This project leverages Pulumi to manage infrastructure as code (IaC) using TypeScript. Pulumi allows you to define, deploy, and manage cloud infrastructure using familiar programming languages and tools.

## Pulumi Usage

Navigate to `infra/`

```sh
cd infra/
```

Deploy your stack in a single touch

```sh
pulumi up
```

Delete your stack easier then ever

```sh
pulumi destroy
```

### Scripts

Development

- `dev`: Starts the development server with hot-reloading.

```sh
npm run dev
```

Build

- `build`: Compiles the TypeScript code to JavaScript.

```sh
npm run build
```

Start

- `start`: Runs the compiled JavaScript code.

```sh
npm start
```

### Dockerfile

The Dockerfile is structured to create a multi-stage build for efficient image creation:

1. Base Stage: Uses Node.js 22 Alpine as the base image.
2. Deps Stage: Installs dependencies using pnpm.
3. Prod-Deps Stage: Installs production dependencies.
4. Builder Stage: Compiles the TypeScript code.
5. Runner Stage: Sets up the production environment and runs the application.

#### Useful Docker Commands

Build the Docker Image

```sh
docker build -t iac-pulumi .
```

Run the Docker Image

```sh
docker run -p 3333:3333 iac-pulumi
```

Stop the Docker Container

```sh
docker stop <container_id>
```

Remove the Docker Container

```sh
docker rm <container_id>
```

### Pulumi Advantages

- **Code Reusability**: Use familiar programming languages to define infrastructure.
- **State Management**: Pulumi manages the state of your infrastructure, ensuring consistency.
- **Multi-Cloud Support**: Deploy to AWS, Azure, GCP, and more with a single tool.
- **Rich Ecosystem**: Leverage a wide range of libraries and integrations.

---

🚀 Get started with Pulumi and streamline your infrastructure management!

# Credits

- [Rocketseat](https://rseat.in/PHuNS8XU3)
- [Ariel Evangelista](https://linkedin.com/in/ariel-evangelista/)
