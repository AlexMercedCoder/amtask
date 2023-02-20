# amtask

This is just a simple task runner made with DenoJS which you can use with any operating system.

## How it works

Assuming you install it and alias under the command `amtask` here is how it would work.

### Running a task in a file called tasks.json

By default, amtask will look for a file called `tasks.json` in the current working directory. Imagine it looks like this.

```json
{
    "run-script": "./script.sh"
}
```

Run this task like so:

```
amtask run-script
```

### Running a task in a file with a custom name

The `--filename`

```
amtask --filename ./tasky.json run-script
```

### Running a task on a remotely served task list.

```
amtask --url https://url./tasky.json run-script
```

## Installation

If you have Deno you can clone this repo and compile the binary for yourself.

```
deno compile --allow-any amtask.ts
```