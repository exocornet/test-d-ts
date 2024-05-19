// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

const platform = process.platform;

if (platform === 'win32') {
	// Для Windows
	execSync('del /F /Q /S .next && rmdir /Q /S .next', { stdio: 'inherit' });
} else {
	// Для Linux и MacOS
	execSync('rm -rf .next', { stdio: 'inherit' });
}
