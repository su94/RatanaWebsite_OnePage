##  Deploy instructions to azure static web app:
1-  cd to the directory
2- run swa init
3- change package.json script part to :
"scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "start": "swa start dist",
    "check": "tsc"
  }
4- run swa build
5- change the ouput folder to dist/public
6- run swa deply --deployment-token={the deployment token for the static web app ctraeted on azure"
