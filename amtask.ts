let task: string;
let url: string;
let filename: string;

console.log(Deno.args);

if (Deno.args.includes("--help")) {
  console.log(`
  ### Running a task in a file called tasks.json

  By default, amtask will look for a file called tasks.json in the current working directory. 
  Imagine it looks like this.
  
  {
      "run-script": "./script.sh"
  }
  
  Run this task like so:
  
  amtask run-script
  
  ### Running a task in a file with a custom name
  
  amtask --filename ./tasky.json run-script
  
  ### Running a task on a remotely served task list.
  
  amtask --url https://url./tasky.json run-script

  FULL DOCS: https://github.com/AlexMercedCoder/amtask
    `);
} else {
  Deno.args.forEach((arg, index) => {
    switch (arg) {
      case "--url":
        url = Deno.args[index + 1];
        break;

      case "--filename":
        filename = Deno.args[index + 1];
        break;

      default:
        index;
    }
  });

  getTasksLists();
}

// FUNCTIONS

async function getTasksLists() {
  if (url) {
    try {
      const response = await fetch(url);
      if (
        response.ok == true &&
        response.headers.get("content-type") == "application/json"
      ) {
        const tasks = await response.json();
        task = tasks[Deno.args.at(-1) as string];
        runTask(task);
      } else {
        console.log("failed request or response not JSON");
      }
      return 0;
    } catch (e) {
      console.log(e);
    }
    return 0;
  }

  if (filename) {
    try {
      const tasks = JSON.parse(await Deno.readTextFile(filename));
      task = tasks[Deno.args.at(-1) as string];
      runTask(task);
      return 0;
    } catch (e) {
      if (e instanceof Deno.errors.NotFound)
        console.error("file does not exists");
      return 0;
    }
  }

  try {
    const tasks = JSON.parse(await Deno.readTextFile("./tasks.json"));
    task = tasks[Deno.args.at(-1) as string];
    runTask(task);
    return 0;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound)
      console.error("file does not exists");
    return 0;
  }
}

async function runTask(task: string) {
  const result = await Deno.run({
    cmd: [...task.split(" ")],
    stdout: "piped",
    stderr: "piped",
    stdin: "piped",
  });

  const out = new TextDecoder().decode(await result.output());
  console.log(out);
}
