import type { Cheatsheet } from "@/types";

export const cheatsheets: Cheatsheet[] = [
  {
    id: "cheatsheet-git",
    title: "Git Cheatsheet",
    slug: "git-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Repository Setup",
        items: [
          { label: "Initialize repo", value: "git init", description: "Create a new local repository in the current folder." },
          { label: "Clone repo", value: "git clone <url>", description: "Download a remote repository to your machine." },
          { label: "Check status", value: "git status", description: "Inspect modified, staged, and untracked files." },
          { label: "Show remotes", value: "git remote -v", description: "List remote names and URLs." },
          { label: "Add remote", value: "git remote add origin <url>", description: "Attach a new remote named origin." }
        ]
      },
      {
        title: "Staging and Commits",
        items: [
          { label: "Stage file", value: "git add <file>", description: "Stage a single file." },
          { label: "Stage everything", value: "git add .", description: "Stage all current changes." },
          { label: "Unstage file", value: "git restore --staged <file>", description: "Remove a file from the staging area." },
          { label: "Commit", value: "git commit -m \"message\"", description: "Create a commit from staged changes." },
          { label: "Amend commit", value: "git commit --amend", description: "Edit the latest commit message or contents." }
        ]
      },
      {
        title: "History and Diffs",
        items: [
          { label: "Compact log", value: "git log --oneline --graph --decorate", description: "View commit history in a concise graph." },
          { label: "Show commit", value: "git show <commit>", description: "Display metadata and diff for one commit." },
          { label: "Working diff", value: "git diff", description: "Compare working tree changes to the index." },
          { label: "Staged diff", value: "git diff --staged", description: "Compare staged changes to the last commit." },
          { label: "Blame file", value: "git blame <file>", description: "See who changed each line last." }
        ]
      },
      {
        title: "Branches and Sync",
        items: [
          { label: "List branches", value: "git branch", description: "Show local branches." },
          { label: "Create branch", value: "git switch -c <branch>", description: "Create and switch to a branch." },
          { label: "Switch branch", value: "git switch <branch>", description: "Move to another branch." },
          { label: "Pull with rebase", value: "git pull --rebase", description: "Update branch while avoiding merge commits." },
          { label: "Push upstream", value: "git push -u origin <branch>", description: "Publish a branch and track its upstream." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-linux-cli",
    title: "Linux CLI Cheatsheet",
    slug: "linux-cli-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Navigation",
        items: [
          { label: "Print working directory", value: "pwd", description: "Show the current absolute directory path." },
          { label: "List files", value: "ls -la", description: "List files including hidden ones with metadata." },
          { label: "Change directory", value: "cd <dir>", description: "Move into a directory." },
          { label: "Parent directory", value: "cd ..", description: "Move up one level." },
          { label: "Home directory", value: "cd ~", description: "Jump to the current user's home folder." }
        ]
      },
      {
        title: "Files and Folders",
        items: [
          { label: "Create file", value: "touch <file>", description: "Create an empty file or update its timestamp." },
          { label: "Create folders", value: "mkdir -p <dir>", description: "Create nested directories in one command." },
          { label: "Copy", value: "cp <src> <dest>", description: "Copy a file or folder." },
          { label: "Move or rename", value: "mv <src> <dest>", description: "Move or rename a path." },
          { label: "Delete file", value: "rm <file>", description: "Remove a file." }
        ]
      },
      {
        title: "Viewing and Search",
        items: [
          { label: "Print file", value: "cat <file>", description: "Output full file contents." },
          { label: "Page file", value: "less <file>", description: "Scroll through a file interactively." },
          { label: "First lines", value: "head -n 20 <file>", description: "Show the first lines of a file." },
          { label: "Last lines", value: "tail -n 20 <file>", description: "Show the last lines of a file." },
          { label: "Recursive search", value: "grep -R \"pattern\" .", description: "Search recursively for matching text." }
        ]
      },
      {
        title: "Permissions and Processes",
        items: [
          { label: "Change mode", value: "chmod 755 <file>", description: "Set read/write/execute permissions." },
          { label: "Change owner", value: "chown user:group <file>", description: "Set file owner and group." },
          { label: "List processes", value: "ps aux", description: "Display running processes." },
          { label: "Live monitor", value: "top", description: "Monitor system usage in real time." },
          { label: "Kill process", value: "kill -9 <pid>", description: "Force-stop a process." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-docker",
    title: "Docker Cheatsheet",
    slug: "docker-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Images",
        items: [
          { label: "List images", value: "docker images", description: "Show local Docker images." },
          { label: "Pull image", value: "docker pull <image>", description: "Download an image from a registry." },
          { label: "Build image", value: "docker build -t app:latest .", description: "Build an image from a Dockerfile." },
          { label: "Remove image", value: "docker rmi <image>", description: "Delete a local image." },
          { label: "Inspect image", value: "docker image inspect <image>", description: "View low-level image metadata." }
        ]
      },
      {
        title: "Containers",
        items: [
          { label: "List containers", value: "docker ps -a", description: "Show running and stopped containers." },
          { label: "Run container", value: "docker run -p 3000:3000 <image>", description: "Start a container and publish a port." },
          { label: "Stop container", value: "docker stop <container>", description: "Gracefully stop a container." },
          { label: "Remove container", value: "docker rm <container>", description: "Delete a container." },
          { label: "Container logs", value: "docker logs -f <container>", description: "Follow container output." }
        ]
      },
      {
        title: "Compose",
        items: [
          { label: "Start services", value: "docker compose up -d", description: "Run services in the background." },
          { label: "Stop services", value: "docker compose down", description: "Stop and remove compose services." },
          { label: "Rebuild services", value: "docker compose up --build", description: "Build and start services together." },
          { label: "View compose logs", value: "docker compose logs -f", description: "Tail logs from all services." },
          { label: "Exec into service", value: "docker compose exec <service> sh", description: "Open a shell inside a service container." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-vim",
    title: "Vim Cheatsheet",
    slug: "vim-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Modes and Movement",
        items: [
          { label: "Normal mode", value: "Esc", description: "Return to command/navigation mode." },
          { label: "Insert mode", value: "i", description: "Insert before the cursor." },
          { label: "Append", value: "a", description: "Insert after the cursor." },
          { label: "Move by line", value: "j / k", description: "Move down or up a line." },
          { label: "Move by word", value: "w / b", description: "Move forward or backward by word." }
        ]
      },
      {
        title: "Editing",
        items: [
          { label: "Delete char", value: "x", description: "Delete the character under the cursor." },
          { label: "Delete line", value: "dd", description: "Delete the current line." },
          { label: "Yank line", value: "yy", description: "Copy the current line." },
          { label: "Paste", value: "p", description: "Paste after the cursor." },
          { label: "Undo / redo", value: "u / Ctrl+r", description: "Undo and redo changes." }
        ]
      },
      {
        title: "Search and Files",
        items: [
          { label: "Search", value: "/pattern", description: "Search forward for text." },
          { label: "Next result", value: "n", description: "Jump to the next search match." },
          { label: "Previous result", value: "N", description: "Jump to the previous match." },
          { label: "Save file", value: ":w", description: "Write file to disk." },
          { label: "Quit", value: ":q", description: "Close the current file." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-sql",
    title: "SQL Cheatsheet",
    slug: "sql-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Selecting Data",
        items: [
          { label: "Select all", value: "SELECT * FROM users;", description: "Return all columns from a table." },
          { label: "Select columns", value: "SELECT id, email FROM users;", description: "Return only chosen columns." },
          { label: "Filter rows", value: "SELECT * FROM users WHERE active = true;", description: "Return rows matching a condition." },
          { label: "Sort rows", value: "SELECT * FROM users ORDER BY created_at DESC;", description: "Order results by one or more columns." },
          { label: "Limit rows", value: "SELECT * FROM users LIMIT 10;", description: "Return only the first N rows." }
        ]
      },
      {
        title: "Joins and Groups",
        items: [
          { label: "Inner join", value: "SELECT * FROM orders o JOIN users u ON o.user_id = u.id;", description: "Return rows with matching keys in both tables." },
          { label: "Left join", value: "SELECT * FROM users u LEFT JOIN orders o ON o.user_id = u.id;", description: "Return all left-table rows plus matches." },
          { label: "Count", value: "SELECT COUNT(*) FROM orders;", description: "Count rows in a result set." },
          { label: "Group by", value: "SELECT status, COUNT(*) FROM orders GROUP BY status;", description: "Aggregate rows by a column." },
          { label: "Having", value: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 5;", description: "Filter grouped results." }
        ]
      },
      {
        title: "Data Changes",
        items: [
          { label: "Insert row", value: "INSERT INTO users (name, email) VALUES ('Ada', 'ada@example.com');", description: "Add a new row." },
          { label: "Update row", value: "UPDATE users SET active = false WHERE id = 10;", description: "Modify existing data." },
          { label: "Delete row", value: "DELETE FROM users WHERE id = 10;", description: "Remove rows matching a condition." },
          { label: "Create table", value: "CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT);", description: "Create a new table." },
          { label: "Drop table", value: "DROP TABLE users;", description: "Delete a table permanently." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-javascript",
    title: "JavaScript Cheatsheet",
    slug: "javascript-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Core Syntax",
        items: [
          { label: "Arrow function", value: "const add = (a, b) => a + b;", description: "Define a concise function." },
          { label: "Destructure object", value: "const { name, email } = user;", description: "Extract fields into variables." },
          { label: "Spread array", value: "const next = [...items, newItem];", description: "Copy and extend an array." },
          { label: "Template string", value: "`Hello ${name}`", description: "Interpolate values into strings." },
          { label: "Optional chaining", value: "user.profile?.avatar", description: "Safely access nested properties." }
        ]
      },
      {
        title: "Arrays and Objects",
        items: [
          { label: "Map", value: "items.map((item) => item.id)", description: "Transform each array item." },
          { label: "Filter", value: "items.filter((item) => item.active)", description: "Keep only matching items." },
          { label: "Find", value: "items.find((item) => item.id === target)", description: "Return the first matching item." },
          { label: "Object entries", value: "Object.entries(config)", description: "Get key-value pairs from an object." },
          { label: "Merge objects", value: "const merged = { ...a, ...b };", description: "Combine properties into a new object." }
        ]
      },
      {
        title: "Async",
        items: [
          { label: "Promise chain", value: "fetch(url).then((res) => res.json())", description: "Work with promise-based APIs." },
          { label: "Async function", value: "const data = await fetch(url).then((res) => res.json());", description: "Await asynchronous work inside async functions." },
          { label: "Parallel promises", value: "await Promise.all([a(), b()]);", description: "Run async work in parallel." },
          { label: "Try/catch", value: "try { ... } catch (error) { ... }", description: "Handle synchronous or awaited errors." },
          { label: "Timeout", value: "setTimeout(() => console.log('done'), 1000);", description: "Run a callback later." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-typescript",
    title: "TypeScript Cheatsheet",
    slug: "typescript-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Types and Interfaces",
        items: [
          { label: "Type alias", value: "type Status = 'idle' | 'loading' | 'done';", description: "Create a reusable type definition." },
          { label: "Interface", value: "interface User { id: string; email: string; }", description: "Describe object shapes." },
          { label: "Optional property", value: "interface User { avatar?: string; }", description: "Mark a property as optional." },
          { label: "Readonly", value: "readonly id: string", description: "Prevent reassignment after creation." },
          { label: "Array type", value: "const ids: string[] = [];", description: "Type an array of values." }
        ]
      },
      {
        title: "Functions and Generics",
        items: [
          { label: "Function return", value: "function sum(a: number, b: number): number { return a + b; }", description: "Type parameters and return values." },
          { label: "Generic function", value: "function first<T>(items: T[]): T | undefined { return items[0]; }", description: "Write reusable typed functions." },
          { label: "Generic type", value: "type ApiResponse<T> = { data: T; error?: string };", description: "Wrap other types in a generic container." },
          { label: "Type assertion", value: "const input = event.target as HTMLInputElement;", description: "Refine a value when TypeScript cannot infer it." },
          { label: "Union narrowing", value: "if (typeof value === 'string') { ... }", description: "Narrow a union with runtime checks." }
        ]
      },
      {
        title: "Utility Types",
        items: [
          { label: "Partial", value: "Partial<User>", description: "Make all properties optional." },
          { label: "Pick", value: "Pick<User, 'id' | 'email'>", description: "Select a subset of properties." },
          { label: "Omit", value: "Omit<User, 'password'>", description: "Remove properties from a type." },
          { label: "Record", value: "Record<string, number>", description: "Map keys to a value type." },
          { label: "ReturnType", value: "ReturnType<typeof getUser>", description: "Extract a function's return type." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-bash",
    title: "Bash Cheatsheet",
    slug: "bash-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Variables and Input",
        items: [
          { label: "Set variable", value: "name=\"Ada\"", description: "Assign a shell variable." },
          { label: "Read variable", value: "echo \"$name\"", description: "Print a variable value." },
          { label: "Read user input", value: "read -r name", description: "Prompt for input from stdin." },
          { label: "Default value", value: "${name:-guest}", description: "Use a fallback when a variable is empty." },
          { label: "Export variable", value: "export NODE_ENV=production", description: "Expose a variable to child processes." }
        ]
      },
      {
        title: "Flow Control",
        items: [
          { label: "If statement", value: "if [[ -f file.txt ]]; then echo yes; fi", description: "Run logic conditionally." },
          { label: "For loop", value: "for file in *.ts; do echo \"$file\"; done", description: "Iterate over a list of values." },
          { label: "While loop", value: "while read -r line; do echo \"$line\"; done < file.txt", description: "Loop over input lines." },
          { label: "Case statement", value: "case $env in prod) ... ;; dev) ... ;; esac", description: "Branch on string values." },
          { label: "Exit on error", value: "set -e", description: "Stop the script when a command fails." }
        ]
      },
      {
        title: "Pipes and Utilities",
        items: [
          { label: "Pipe output", value: "ps aux | grep node", description: "Send one command's output into another." },
          { label: "Redirect output", value: "echo \"hello\" > file.txt", description: "Write stdout to a file." },
          { label: "Append output", value: "echo \"hello\" >> file.txt", description: "Append stdout to a file." },
          { label: "Command substitution", value: "today=$(date +%F)", description: "Capture a command result into a variable." },
          { label: "Subshell", value: "(cd app && npm run build)", description: "Run commands in a separate shell context." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-http-methods-cheatsheet",
    title: "HTTP Methods Cheatsheet",
    slug: "http-methods-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "http-methods-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-http-status-codes-quick-ref",
    title: "HTTP Status Codes Quick Ref",
    slug: "http-status-codes-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "http-status-codes-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-rest-api-design-cheatsheet",
    title: "REST API Design Cheatsheet",
    slug: "rest-api-design-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "rest-api-design-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-graphql-syntax-cheatsheet",
    title: "GraphQL Syntax Cheatsheet",
    slug: "graphql-syntax-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "graphql-syntax-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-curl-cheatsheet",
    title: "cURL Cheatsheet",
    slug: "curl-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "curl-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-postman-shortcuts-reference",
    title: "Postman Shortcuts/Reference",
    slug: "postman-shortcuts-reference",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "postman-shortcuts-reference", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-websocket-events-cheatsheet",
    title: "WebSocket Events Cheatsheet",
    slug: "websocket-events-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "websocket-events-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-json-schema-quick-ref",
    title: "JSON Schema Quick Ref",
    slug: "json-schema-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "json-schema-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-kubernetes-cheatsheet",
    title: "Kubernetes Cheatsheet",
    slug: "kubernetes-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "kubernetes-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-nginx-cheatsheet",
    title: "Nginx Cheatsheet",
    slug: "nginx-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "nginx-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-apache-config-cheatsheet",
    title: "Apache Config Cheatsheet",
    slug: "apache-config-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "apache-config-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-terraform-cheatsheet",
    title: "Terraform Cheatsheet",
    slug: "terraform-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "terraform-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-ansible-cheatsheet",
    title: "Ansible Cheatsheet",
    slug: "ansible-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "ansible-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-github-actions-cheatsheet",
    title: "GitHub Actions Cheatsheet",
    slug: "github-actions-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "github-actions-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-docker-compose-cheatsheet",
    title: "Docker Compose Cheatsheet",
    slug: "docker-compose-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "docker-compose-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-linux-permissions-quick-ref",
    title: "Linux Permissions Quick Ref",
    slug: "linux-permissions-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "linux-permissions-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-systemd-cheatsheet",
    title: "Systemd Cheatsheet",
    slug: "systemd-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "systemd-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-ssh-cheatsheet",
    title: "SSH Cheatsheet",
    slug: "ssh-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "ssh-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-postgresql-cheatsheet",
    title: "PostgreSQL Cheatsheet",
    slug: "postgresql-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "postgresql-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-mysql-cheatsheet",
    title: "MySQL Cheatsheet",
    slug: "mysql-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "mysql-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-sqlite-cheatsheet",
    title: "SQLite Cheatsheet",
    slug: "sqlite-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "sqlite-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-mongodb-cheatsheet",
    title: "MongoDB Cheatsheet",
    slug: "mongodb-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "mongodb-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-redis-cheatsheet",
    title: "Redis Cheatsheet",
    slug: "redis-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "redis-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-prisma-cheatsheet",
    title: "Prisma Cheatsheet",
    slug: "prisma-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "prisma-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-sql-joins-quick-ref",
    title: "SQL Joins Quick Ref",
    slug: "sql-joins-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "sql-joins-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-indexing-performance-cheatsheet",
    title: "Indexing/Performance Cheatsheet",
    slug: "indexing-performance-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "indexing-performance-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-react-cheatsheet",
    title: "React Cheatsheet",
    slug: "react-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "react-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-nextjs-cheatsheet",
    title: "Next.js Cheatsheet",
    slug: "nextjs-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "nextjs-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-tailwind-cheatsheet",
    title: "Tailwind Cheatsheet",
    slug: "tailwind-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "tailwind-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-html-semantics-cheatsheet",
    title: "HTML Semantics Cheatsheet",
    slug: "html-semantics-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "html-semantics-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-css-flexbox-cheatsheet",
    title: "CSS Flexbox Cheatsheet",
    slug: "css-flexbox-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "css-flexbox-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-css-grid-cheatsheet",
    title: "CSS Grid Cheatsheet",
    slug: "css-grid-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "css-grid-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-accessibility-quick-ref",
    title: "Accessibility Quick Ref",
    slug: "accessibility-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "accessibility-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-dom-events-cheatsheet",
    title: "DOM Events Cheatsheet",
    slug: "dom-events-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "dom-events-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-browser-storage-cheatsheet",
    title: "Browser Storage Cheatsheet",
    slug: "browser-storage-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "browser-storage-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-java-cheatsheet",
    title: "Java Cheatsheet",
    slug: "java-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "java-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-csharp-cheatsheet",
    title: "C# Cheatsheet",
    slug: "csharp-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "csharp-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-go-cheatsheet",
    title: "Go Cheatsheet",
    slug: "go-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "go-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-rust-cheatsheet",
    title: "Rust Cheatsheet",
    slug: "rust-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "rust-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-php-cheatsheet",
    title: "PHP Cheatsheet",
    slug: "php-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "php-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-ruby-cheatsheet",
    title: "Ruby Cheatsheet",
    slug: "ruby-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "ruby-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-shell-scripting-cheatsheet",
    title: "Shell Scripting Cheatsheet",
    slug: "shell-scripting-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "shell-scripting-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-nodejs-quick-ref",
    title: "Node.js Quick Ref",
    slug: "nodejs-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "nodejs-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-jest-cheatsheet",
    title: "Jest Cheatsheet",
    slug: "jest-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "jest-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-playwright-cheatsheet",
    title: "Playwright Cheatsheet",
    slug: "playwright-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "playwright-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-cypress-cheatsheet",
    title: "Cypress Cheatsheet",
    slug: "cypress-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "cypress-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-testing-library-cheatsheet",
    title: "Testing Library Cheatsheet",
    slug: "testing-library-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "testing-library-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-regex-quick-ref",
    title: "Regex Quick Ref",
    slug: "regex-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "regex-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-debugging-workflow-cheatsheet",
    title: "Debugging Workflow Cheatsheet",
    slug: "debugging-workflow-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "debugging-workflow-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-git-troubleshooting-cheatsheet",
    title: "Git Troubleshooting Cheatsheet",
    slug: "git-troubleshooting-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "git-troubleshooting-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-owasp-top-10-quick-ref",
    title: "OWASP Top 10 Quick Ref",
    slug: "owasp-top-10-quick-ref",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "owasp-top-10-quick-ref", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-jwt-cheatsheet",
    title: "JWT Cheatsheet",
    slug: "jwt-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "jwt-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-oauth-2-cheatsheet",
    title: "OAuth 2.0 Cheatsheet",
    slug: "oauth-2-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "oauth-2-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-auth-flow-comparison-sheet",
    title: "Auth Flow Comparison Sheet",
    slug: "auth-flow-comparison-sheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "auth-flow-comparison-sheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-csp-cheatsheet",
    title: "CSP Cheatsheet",
    slug: "csp-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "csp-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-common-security-headers-cheatsheet",
    title: "Common Security Headers Cheatsheet",
    slug: "common-security-headers-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "common-security-headers-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-prompt-engineering-cheatsheet",
    title: "Prompt Engineering Cheatsheet",
    slug: "prompt-engineering-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "prompt-engineering-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-markdown-cheatsheet",
    title: "Markdown Cheatsheet",
    slug: "markdown-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "markdown-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-mermaid-cheatsheet",
    title: "Mermaid Cheatsheet",
    slug: "mermaid-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "mermaid-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-cron-cheatsheet",
    title: "Cron Cheatsheet",
    slug: "cron-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "cron-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-keyboard-shortcuts-sheet",
    title: "Keyboard Shortcuts Sheet",
    slug: "keyboard-shortcuts-sheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "keyboard-shortcuts-sheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
  {
    id: "cheatsheet-cli-productivity-cheatsheet",
    title: "CLI Productivity Cheatsheet",
    slug: "cli-productivity-cheatsheet",
    category: "cheatsheets",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", value: "Coming soon", description: "This cheatsheet has been added to the catalog and is waiting for full reference content." },
          { label: "Planned scope", value: "Core commands, syntax, and shortcuts", description: "This placeholder keeps the route live until the full sheet is authored." },
          { label: "Slug", value: "cli-productivity-cheatsheet", description: "Use this slug when wiring links, search, and category grouping." }
        ]
      }
    ]
  },
];
