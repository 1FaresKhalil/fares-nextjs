# Fares Khalil App


### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 🔒 Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 📦 Type-safe ORM with DrizzleORM, compatible with SQLite, PostgreSQL, and MySQL
- 💽 Global Database with [Turso](https://turso.tech/?utm_source=nextjsstarterbp)
- 🌐 Multi-language (i18n) with next-intl
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form with React Hook From
- 🔴 Validation library with Zod
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🚨 Error Monitoring with [Sentry](https://sentry.io)
- 🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com)
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual testing with Percy (Optional)
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⌘ Database exploration with Drizzle Studio and CLI migration tool with Drizzle Kit
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Netlify (or manual deployment to any hosting services)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting


### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:



Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Set up authentication

Create a Clerk account at [Clerk.com](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) and create a new application in Clerk Dashboard. Then, copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` into `.env.local` file (not tracked by Git):

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now, you can a fully working authentication system with Next.js: Sign up, Sign in, Sign out, Forgot password, Reset password, Update profile, Update password, Update email, Delete account, and more.

### Set up remote database

The project uses DrizzleORM, a type-safe ORM compatible with SQLite, PostgreSQL, and MySQL databases. By default, the project is set up to work seamlessly with libSQL, and for production purposes, it's integrated with [Turso](https://turso.tech/?utm_source=nextjsstarterbp). The Next.js Boilerplate also enables a smooth transition to an alternative database provider if your project requires it.

First, you need to create a Turso account at [Turso.tech](https://turso.tech/?utm_source=nextjsstarterbp) and install the Turso CLI:

```shell
brew install tursodatabase/tap/turso
turso auth signup # Sign up to Turso
```

Then, create a new database:

```shell
turso db create nextjs-boilerplate
```

Now, you need to update the `DATABASE_URL` in `.env` file with the database URL provided by Turso:

```shell
turso db show nextjs-boilerplate --url

# .env
# DATABASE_URL=libsql://[RANDOM-CHARS]-[DB-NAME]-[ORG-NAME].turso.io
```

Finally, you also need to create a new environement variable `DATABASE_AUTH_TOKEN` in `.env.local` (not tracked by Git) with the auth token provided by Turso:

```shell
turso db tokens create nextjs-boilerplate

# .env.local
# DATABASE_AUTH_TOKEN=[your-auth-token]
```

### Translation (i18n) setup

For translation, the project uses `next-intl` combined with [Crowdin](https://l.crowdin.com/next-js). As a developer, you only need to take care of the English (or another default language) version. Other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project. In the newly created project, you will able to find the project ID. You'll also require to create a new Personal Access Tokens by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.

After defining the environment variables in your GitHub Actions, your localization files will be synchronized with Crowdin everytime you push a new commit to the `main` branch.

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/BaseTemplate.tsx`: default theme
- `next-sitemap.config.js`: sitemap configuration
- `.env`: default environment variables

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All unit tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Jest and React Testing Library for unit testing. You can run the tests with:

```shell
npm run test
```

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

### Enable Edge runtime (optional)

The App Router folder is compatible with the Edge runtime. You can enable it by uncommenting the following lines `src/app/layouts.tsx`:

```tsx
// export const runtime = 'edge';
```

For your information, the database migration is not compatible with the Edge runtime. So, you need to disable the automatic migration in `src/libs/DB.ts`:

```tsx
if (process.env.NODE_ENV !== 'production') {
  await migrate(db, { migrationsFolder: './migrations' });
}
```

After disabling it, you are required to run the migration manually with:

```shell
npm run db:migrate
```

You also require to run the command each time you want to update the database schema.

### Deploy to production

During the build process, the database migration is automatically executed. So, you don't need to run the migration manually. But, in your environment variable, `DATABASE_URL` and `DATABASE_AUTH_TOKEN` need to be defined.

Then, you can generate a production build with:

```shell
$ npm run build
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```shell
$ npm run start
```

You also need to defined the environment variables `CLERK_SECRET_KEY` using your own key.

The command starts a local server with the production build. Then, you can now open http://localhost:3000 with your favorite browser to see the project.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify in one click:



During the setup, you need to define the `DATABASE_URL` and `DATABASE_AUTH_TOKEN` environment variables.

### Error Monitoring

The project uses [Sentry](https://sentry.io) to monitor errors. For development environment, you don't need to do anything: NextJS Boilerplate is already configured to use Sentry and Spotlight (Sentry for Development). All errors will be automatically sent to your local Spotlight instance. So, you can try the Sentry experience locally.

For production environment, you need to create a Sentry account and create a new project. Then, in `next.config.mjs`, you need to update the `org` and `project` attribute in `withSentryConfig` function. You also need to add your Sentry DSN in `sentry.client.config.ts`, `sentry.edge.config.ts` and `sentry.server.config.ts`.

### Checkly monitoring

The project uses [Checkly](https://www.checklyhq.com) to ensure that your production environment is always up and running. At regular intervals, Checkly runs the tests ending with `*.check.spec.ts` extension and notifies you if any of the tests fail. Additionally, you have the flexibility to execute tests across multiple locations to ensure that your application is available worldwide.

To use Checkly, you must first create an account on [their website](https://www.checklyhq.com). Once you have an account, you can set the `CHECKLY_API_KEY` environment variable in GitHub Actions by generating a new API key in the Checkly Dashboard. Additionally, you will need to define the `CHECKLY_ACCOUNT_ID`, which can also be found in your Checkly Dashboard under User Settings > General.

To complete the setup, make sure to update the `checkly.config.ts` file with your own email address and production URL.

### Known warnings

#### webpack.cache.PackFileCacheStrategy

Warning: webpack.cache.PackFileCacheStrategy Serializing big strings (104kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)

This warning is caused by using `Clerk` and `next-intl` middlewares. It only happens when both middlewares are used together.

