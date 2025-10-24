# Assignment 7: Git Exercises

Total: 4 points

Due Date: before 23:59 on 2025-10-20.

## Requirements

Create a Word document that includes:

* All required screenshots with captions. DO NOT capture the whole screen, only capture the command and output of it.
* Your answer to the question at the end of the steps.
* The URL of your GitHub repository.
* Export the document as a PDF and submit it through Canvas.
### Part 1: (2.5 point)

* In your GitHub account
    * Create a new repo named week-7-git
* On your computer
    * Clone that repo to a folder named week-7-git
    * Copy the index.html, style.css and script.js from week-6 assignment into this folder
    * Create a new file named .gitignore (if it doesn't exist). Add the following lines:
        * .DS_Store
        * Thumbs.db
        * *.swp
        * node_modules/
    * Run: git add .
    * Run: git commit -m 'Init commit'
    * Run: git push
* In your GitHub account
    * Double check files are showing up in your week-7-git repo
    * Create a new branch named small-change-A
    * Create a new branch named small-change-B
* On your computer
    * Run: git fetch && git checkout small-change-B
    * Run: git fetch && git checkout small-change-A
    * Make a small change in one line in each of the 3 files (index.html, style.css, script.js)
    * Run: git status (take a screenshot of the output)
    * Run: git diff (take a screenshot of the output)
    * Run: git add .
    * Run: git commit -m 'Small Updates from A' (screenshot)
    * Run: git push (screenshot)
* In your GitHub account
    * Create a Pull Request for small-change-A
* On your computer
    * Run: git checkout small-change-B
    * Make a small change in the same line in index.html
    * Run: git status (screenshot)
    * Run: git diff (screenshot)
    * Run: git add .
    * Run: git commit -m 'Small Updates from B' (screenshot)
    * Run: git push (screenshot)
* In your GitHub account
    * Create a Pull Request for small-change-B
    * Merge the Pull Request for small-change-A
    * Notice that you are not allowed to merge the Pull Request for small-change-B due to conflicts
### Part 2: What will you do to resolve the issue and bring the change in the second Pull Request for small-change-B into the main branch? (1.5 point)

* Write down all the commands you will use to resolve this issue.
* Explain the purpose of each command.
* Run those commands and merge the second Pull Request.