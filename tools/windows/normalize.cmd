@echo off
if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )

cd /D "%~dp0\..\.."

pnpm run normalize %*
