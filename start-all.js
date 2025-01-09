const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const startProject = (projectPath, port) => {
  const projectName = path.basename(projectPath);
  console.log(`Starting ${projectName} on port ${port}...`);
  exec(
    `cd ${projectPath} && pnpm dev --port ${port}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(`Error starting project at ${projectPath}:`, err);
        return;
      }
      console.log(`Project at ${projectPath} started on port ${port}`);
      console.log(stdout);
      console.error(stderr);
    },
  );
};

const startAllProjects = (baseDir) => {
  fs.readdir(baseDir, (err, files) => {
    if (err) {
      console.error("Error reading base directory:", err);
      return;
    }

    files.forEach((file) => {
      const projectPath = path.join(baseDir, file);
      if (fs.lstatSync(projectPath).isDirectory()) {
        const packageJsonPath = path.join(projectPath, "package.json");
        if (fs.existsSync(packageJsonPath)) {
          const portMatch = file.match(/^(\d+)/);
          if (portMatch) {
            const port = portMatch[1];
            startProject(projectPath, port);
          } else {
            console.log(
              `Skipping ${projectPath}, no port found in folder name.`,
            );
          }
        } else {
          console.log(`Skipping ${projectPath}, no package.json found.`);
        }
      }
    });
  });
};

startAllProjects(__dirname);
