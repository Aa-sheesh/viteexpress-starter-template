#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Get target directory from arguments or default to "."
const targetDir = process.argv[2] || ".";
const targetPath = path.resolve(process.cwd(), targetDir);

console.log(`Creating project in ${targetPath}...`);

// Only attempt to create the directory if it's not the current directory
if (targetDir !== ".") {
  if (!fs.existsSync(targetPath)) {
    execSync(`mkdir -p ${targetPath}`, { stdio: "inherit" });
  } else {
    console.log(`Directory "${targetDir}" already exists, skipping creation.`);
  }
}

// Copy files from the current directory (your template) into the target directory
// Note: This command might not copy hidden files (like .env) on some systems.
execSync(`cp -R . ${targetPath}`, { stdio: "inherit" });

console.log("Setup complete! Run 'npm install' in your project.");
