const { exec } = require('child_process');
const os = require('os');

const command = os.platform() === 'win32'
  ? 'react-scripts start'
  : 'cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts start';

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
