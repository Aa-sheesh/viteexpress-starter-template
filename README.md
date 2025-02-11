# Starter Template 491

A simple project template CLI to quickly scaffold new projects with a pre-configured structure.

## Features

- **Quick Setup:** all template files into your target directory.
<!-- - **Cross-Platform:** Uses Node.js native APIs (e.g., `fs.cpSync`) so it works on Windows, macOS, and Linux. -->
- **Customizable:** Easily modify the template files for your own projects.

## Installation

You can either install the CLI tool globally or run it directly with `npx`.

### Using npx

```sh
npx starter-template-491 <target-directory>
```

### Global Installation

```sh
npm install -g starter-template-491
starter-template-491 <target-directory>
```

### Usage

1. Create in a New Directory:

```sh
npx starter-template-491 my-new-project
```

2. Create in the Current Directory:

```sh
npx starter-template-491 .
```

After running the command, the template files will be copied to the target directory. Then, simply run:

```sh
npm install
```

to install the project dependencies.

## License

This project is licensed under the [MIT License](/LICENSE).
