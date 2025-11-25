# Project 4 - MERN stack app
###### Kat R. | CS 311.2 - Web Development

A final project for CS 311, 
this fullstack application is written by hand. 
The frontend uses Vite + React + TypeScript. 
The backend uses Express, Cors, and Mongoose to interact with a local MongoDB database.

***Note:** 
`node_modules` are not included in the source code due to large file size and quantity. 
In all three directories `(root)`, `frontend`, and `backend`, 
you may have to run **`npm install`** for the dependencies to appear.*

## Useful links:
- [MERN TypeScript Setup Guide](https://brailyguzman.medium.com/mern-typescript-setup-guide-af1500100d4b)
- [Building an Express App with TypeScript and Nodemon](https://medium.com/@aren.talb00/building-an-express-app-with-typescript-and-nodemon-9bd8a809cc68)
- [Using TypeScript with Mongoose](https://mongoosejs.com/docs/typescript.html)
- [TypeScript TSConfig Reference > `module`](https://www.typescriptlang.org/tsconfig/#module)
- [TypeScript TSConfig Reference > `target`](https://www.typescriptlang.org/tsconfig/#module)

## Potential extra credit opportunities:
- ***`Concurrently`*** runs both the frontend and backend at the same time with a single command.
  Simply run `npm run dev` from the root directory.
  To exit, use `^C` to interrupt the program.
  - The frontend and backend can still be launched individually.

- Project written in **<ins>TypeScript/TSX</ins>**, as opposed to JavaScript/JSX.

- Web application is broken down into different components. Code includes ECMAScript modules.

- Update targets are not passed into components via props. Instead, components react to a global target with **`useContext()`** by invoking code placed in **`useEffect()`**.

- Form data is directly ***bound***. This means that related variables update in real time.

- Documentation
