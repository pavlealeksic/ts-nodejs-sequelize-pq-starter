# TypeScript Node.js Sequelize PostgreSQL Starter

A production-ready starter template for building scalable Node.js applications with TypeScript, Sequelize ORM, and PostgreSQL.

## Features

- 🚀 **TypeScript** for type safety and better developer experience
- 🛡️ **Express.js** with proper error handling and middleware setup
- 📦 **Sequelize ORM** for database operations
- 🐘 **PostgreSQL** integration
- 🔒 **Security** with Helmet middleware
- 📝 **Request Logging** with Morgan
- 🔄 **CORS** enabled
- 🧪 **Jest** setup for testing
- 🔄 **Hot Reloading** for development
- 🌍 **Environment Variables** support
- 🚦 **API Routes** with dynamic routing
- ⚡️ **Production Ready** build setup

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ts-nodejs-sequelize-pq-starter.git
   cd ts-nodejs-sequelize-pq-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   POSTGRES_URL=postgresql://username:password@localhost:5432/database_name
   ```

4. Run database migrations:
   ```bash
   npm run migrate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm start` - Run the production server
- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run migrate` - Run database migrations
- `npm run seed` - Run database seeders
- `npm test` - Run tests
- `npm run watch` - Start development server with file watching

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `POSTGRES_URL` - PostgreSQL connection URL

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/*` - API routes (add your own endpoints)

## Database Configuration

The database configuration is managed through `config/config.json` and supports multiple environments. The connection URL should be provided through the `POSTGRES_URL` environment variable.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.