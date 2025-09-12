# 🛠️ Contributing Guide

Thank you for your interest in contributing to the Transaction Limit Service! This guide will walk you through our fork-based contribution workflow.

## 🔄 Contribution Workflow

### Step 1: Fork the Repository
1. Navigate to the main repository on GitHub
2. Click the **Fork** button in the top-right corner
3. This creates your own copy of the repository under your GitHub account

### Step 2: Clone Your Fork
Clone your forked repository to your local machine:
```bash
git clone https://github.com/YOUR-USERNAME/transaction-limit-service.git
cd transaction-limit-service
```

### Step 3: Set Up Remote Upstream
Add the original repository as an upstream remote to keep your fork in sync:
```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/transaction-limit-service.git
git remote -v  # Verify your remotes
```

### Step 4: Create a Feature Branch
Always create a new branch from `main` for your work:
```bash
git checkout main
git pull upstream main  # Ensure you have the latest changes
git checkout -b feature/TLS-your-feature-name
```

### Step 5: Make Your Changes
- Follow our [code style guidelines](#-code-style)
- Write comprehensive tests for your changes
- Ensure all existing tests still pass
- Follow the [self-review checklist](self-review.md) before committing

### Step 6: Commit Your Changes
We follow [Conventional Commits](https://www.conventionalcommits.org/) format:
```bash
git add .
git commit -m "feat: add transaction rollback feature"
```

**Commit Types:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Step 7: Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### Step 8: Create a Pull Request
1. Go to your fork on GitHub
2. Click **Compare & pull request**
3. Set the base repository to the original repo and base branch to `main`
4. Fill out the PR template with:
   - Clear description of changes
   - Link to related issues
   - Screenshots (if applicable)
   - Testing details

### Step 9: Address Review Feedback
- Respond to reviewer comments
- Make requested changes in your feature branch
- Push additional commits to update the PR
- Mark conversations as resolved once addressed

### Step 10: After Your PR is Merged 🎉
Once your PR is merged, sync your fork and update your local repository:

```bash
# Switch to main branch
git checkout main

# Sync your fork with upstream
git pull upstream main
git push origin main

# Delete the feature branch (optional but recommended)
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

## 🔍 Code Style
- Follow ESLint and Prettier configurations
- Use TypeScript for all new code
- Write meaningful variable and function names
- Write modular code
- Add JSDoc comments for public APIs
- Ensure all tests pass: `npm test`

## 🧪 Testing Requirements
- Write unit tests for all new functions
- Add integration tests for API endpoints
- Ensure test coverage remains above 80%
- Run the full test suite before submitting: `npm test`

## 📋 Issue Guidelines

### Creating Issues
- Search existing issues before creating new ones
- Use issue templates when available
- Provide clear reproduction steps for bugs
- Include relevant system information

### Working on Issues
- Browse [open issues](https://github.com/Dev-Mentorship-Programme/transaction-limit-service/issues)
- Use labels to filter issues by type/difficulty
- Comment on issues you'd like to work on
- Reference issues in your PR description using `#issue-number`

## 🚫 What Not to Do
- Don't work directly on the `main` branch
- Don't force push to shared branches
- Don't ignore linting errors

## 🆘 Need Help?
- Check our [documentation](README.md)
- Look at existing PRs for examples
- Ask questions in issue comments
- Reach out to maintainers for guidance

Thank you for contributing! 🙏
