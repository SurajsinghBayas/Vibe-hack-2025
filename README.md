# MERN Blogging Platform

A modern, secure, scalable blogging platform built with React, Node.js, Express, MongoDB, and Docker.

## Structure
- `client/`: React frontend
- `server/`: Express backend
- `docker/`: Dockerfiles and compose
- `scripts/`: CI/CD, setup scripts

## Getting Started
1. Copy `.env.example` to `.env` and fill in secrets
2. Run `docker-compose up --build` in the `docker/` folder
3. Access client at `localhost:3000`, server at `localhost:5000`

## Features
- JWT Auth, RBAC
- Article approval workflow
- Trending, search, analytics
- Responsive UI

## License
MIT
