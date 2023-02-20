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

### Getting Binary
If you have Deno you can clone this repo and compile the binary for yourself.

```
deno compile --allow-any amtask.ts
```

You can also download pre-comiled binaries below:

- 0.0.1
    - [Linux](https://drive.google.com/file/d/1-8JGOyM7RvWY_MAQsrKcy5j6jARSB5M4/view?usp=share_link)
    - [Windows](https://drive.google.com/file/d/1MUgzrOzD_PVpeZg4q9JbwYOlu9WM8eT6/view?usp=share_link)
    - [Mac](https://drive.google.com/file/d/1nKQt7-4EZHPTRoPn_ijsF03WoNuaVrBI/view?usp=share_link)
    - [Mac-Arm](https://drive.google.com/file/d/1oSGjprLRoomEAB4QPORHFHf4lJiaBHK3/view?usp=share_link)

### Installation

#### Get the File Path

1. Get the file path of the file
    - [Mac](http://stackoverflow.com/a/3572105/2063546)
    - [Linux](https://stackoverflow.com/a/3915075/11878194)
    - [Windows/Powershell](https://stackoverflow.com/questions/13126175/get-full-path-of-the-files-in-powershell)

### Create a Alias

- BASH/ZSH (Linux/Mac)
    - add the following two lines to your `.bashrc`/`.zshrc` (or equivalent terminal configuration file)

```bash
PATHTOAMTASK=/file/path/from/previous/step/amtask
alias amtask="$PATHTOAMTASK"
```

- POWERSHELL
    - Setup an alias in your Profile
    - [Profile Scripting](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.3&viewFallbackFrom=powershell-7)
    - [Creating Aliases](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_aliases?view=powershell-7.3)
    - [Running Executables from Powersell](https://techgenix.com/three-ways-to-run-exe-files-in-powershell/)

In summary, you want an alias that points to the binary you downloaded so you don't have to type the full path everytime you use it but instead use the alias, ideally "amtask".