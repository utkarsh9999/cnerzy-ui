@echo off
set /p msg="Enter commit message (leave blank for default): "

if "%msg%"=="" (
    set msg=Auto commit
)

echo Adding all changes...
git add .

echo Committing changes with message: "%msg%"
git commit -m "%msg%"

echo Pushing to remote...
git push

echo Done!
