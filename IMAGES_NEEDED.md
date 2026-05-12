# Missing Images Documentation

This repository is currently missing image files that are referenced in the GitHub Copilot CLI exercise instructions. These images are essential for completing the exercise as intended.

## Why Images are Needed

The GitHub Copilot CLI supports image inputs through its `@images/filename` syntax. Students use these images to:
- Provide visual context for their requests
- See examples of calculator interfaces
- Understand what test cases to implement

## Missing Image Directories

### 1. `images/` Directory (Repository Root)

This directory should contain calculator reference images used during the coding exercises:

- **`js-calculator.png`** - Example JavaScript calculator UI showing basic operations
- **`calc-basic-operations.png`** - Visual examples of basic arithmetic operations
- **`calc-extended-operations.png`** - Visual examples of advanced operations (modulo, power, square root)

See `images/README.md` for detailed descriptions.

### 2. `.github/images/` Directory

This directory should contain screenshot images for the documentation:

- **`copilot-cli.png`** - Overview of Copilot CLI in action
- **`copilot-cli-add-directory.png`** - Trust folder security prompt
- **`copilot-cli-terminal-bindings.png`** - Terminal keybindings prompt
- **`copilot-cli-permissions.png`** - Permissions confirmation dialog

See `.github/images/README.md` for detailed descriptions.

## How to Add Images

1. Create appropriate image files based on the descriptions in the README files
2. Place them in the correct directories
3. Ensure filenames match exactly as referenced in the step files
4. Commit and push the images to the repository

## Impact of Missing Images

While the exercise can technically be completed without these images by describing requirements in text, the images:
- Enhance the learning experience
- Provide clear visual references
- Demonstrate Copilot CLI's image context feature
- Help students understand exactly what to implement

## References

Images are referenced in: `.github/steps/1-step.md`, `.github/steps/2-step.md`, and `.github/steps/3-step.md`
