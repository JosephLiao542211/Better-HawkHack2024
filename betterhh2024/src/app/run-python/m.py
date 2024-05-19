import subprocess

command = ["streamlit", "run", "src/app/run-python/app.py"]

result = subprocess.run(command, capture_output=True, text=True)

#Print the output
print(result.stdout)
print(result.stderr)
