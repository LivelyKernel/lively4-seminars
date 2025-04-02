# PX 2025 Seminar (HPI)


## #Debugging Lively in Lively (again)

Inspired by Yoshiki's work on Renkon Pad, where iframes a used to run the code separate from the dev environment, we tried again to run lively inside an iFrame in Lively. This worked with no problems out of the box. So the question is, can we debug it? We know that we can debug a Lively with an external a normal (chrome tools) and custom debugger (also chrome tools, but run as a website). 

We tried running:

- lively on localhost, debugging on localhost (failed, because whole tab was halted)
- lively on localhost, debugging on localhost with start2 (failed, because whole tab was halted)
- lively on localhost, debugging on lively-kernel (success, only iframe was halted)
- lively on localhost, debugging on local ip but actually on same server (success, only iframe was halted)

So this seems to be an interesting avenue of being able to finally debug lively inside of lively (without as separate tab or window). What benefits would this would give us? We can actually edit and safe lively source code. Yes, I know chrome tools support this natively with static code and access to local files. But we cannot do this?

Another possibility would be to actually script the debugger, e.g. control stepping, or letting a program run slowly, or extract information out of the debugger etc. Maybe having an experience like in Visual Studio Code, where the debugger is just embedded in the normal code editor and on can even set breakpoints there.


## Other #PC Topics....

- Lively LSP @Stefan
  - browserside