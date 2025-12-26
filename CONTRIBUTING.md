# Contributing to NEXUS Pro CRM v7.0

First off, thank you for considering contributing to NEXUS Pro CRM! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs** if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior** and **explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the JavaScript/TypeScript/Python styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Process

1. Fork the repo
2. Create a new branch from `main`
3. Make your changes
4. Write or update tests as necessary
5. Ensure the test suite passes
6. Make sure your code lints
7. Commit your changes
8. Push to your fork
9. Submit a pull request

### Branch Naming

* `feature/feature-name` - for new features
* `bugfix/bug-description` - for bug fixes
* `hotfix/critical-bug` - for critical production fixes
* `docs/documentation-update` - for documentation changes
* `refactor/code-improvement` - for code refactoring

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body

footer
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat(api): add customer sentiment analysis endpoint

Implemented new endpoint for analyzing customer sentiment
using ML model. Returns sentiment scores and key phrases.

Closes #123
```

## Styleguides

### JavaScript/TypeScript Styleguide

* Use 2 spaces for indentation
* Use semicolons
* Use single quotes for strings
* Use template literals for string interpolation
* Use async/await instead of callbacks
* Use TypeScript types/interfaces
* Follow ESLint configuration

### Python Styleguide

* Follow PEP 8
* Use 4 spaces for indentation
* Use type hints
* Use docstrings for functions and classes
* Maximum line length of 88 characters (Black formatter)

### CSS Styleguide

* Use TailwindCSS utility classes when possible
* Follow BEM naming convention for custom CSS
* Use CSS variables for theming

## Testing

* Write unit tests for new features
* Write integration tests for API endpoints
* Write E2E tests for critical user flows
* Aim for >80% code coverage

Run tests:
```bash
npm test
npm run test:unit
npm run test:integration
npm run test:e2e
```

## Documentation

* Update README.md if needed
* Add JSDoc comments for functions
* Update API documentation
* Add examples for new features

## Questions?

Feel free to open an issue with your question or contact the maintainers.

Thank you for contributing! 🙏
