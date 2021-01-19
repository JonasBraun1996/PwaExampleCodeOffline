# Progressive Web App Prototype

# 1) Required Downloads

## 1.1) Node.js Download
https://nodejs.org/en/download/

## 1.2) IDE Download (Visual Studio Code)
https://code.visualstudio.com/download

## 1.3) Console Emulator (Cmder)
https://cmder.net/

# 2) Installation

## 2.1) Install VueCLI global
```
npm install -g @vue/cli
```
## 2.2) Install Project
## Open Console and change into the repository directory and do
```
npm install
```



# 3) Deploy the Code locally
## Open Cmder Console
## Switch into the repository folder

## 3.1) Build dist directory (Cmder optional)
```
npm run build
```

## 3.2) Deploy dist directory (Cmder required)
```
npm install -g serve
serve -s dist -l 8080
```

## 3.3) Open the following URL
http://localhost:8080/

## PWA locally deployed

# 4) Development
## Change Code
## Stop Deployment (Strg + C in the console)

## 4.1) Build dist
```
npm run build
```

## 4.2) Deploy again after build (Cmder required)
```
serve -s dist -l 8080
```
## 4.3) Open the following URL
http://localhost:8080/
