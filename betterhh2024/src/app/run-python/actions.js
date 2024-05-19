"use server";
const { spawn } = require('child_process');
import { join } from "path";

export async function runPython () {
    const childPython = spawn('streamlit', ['run', join(process.cwd(), 'src/app/run-python/app.py')]);

    childPython.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childPython.stderr.on('data', (data) => {
        console.error(`suiiiiiiiiiiiiiiii: ${data}`);
    });

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}