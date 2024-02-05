# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Day 1-11/12/23
===============
React:
======

->Open source library for building user interfaces

->Not a framework

->Focuses on UI

->Rich ecosystem

Why React?
===========

->Created and maintained by facebook

->More than 200k starts on github

->Huge community

->In demand skillset

->React is the Component based Architecture
		component is similar to the method,function...in framweork v use the term component 

->Resuable code

->React is declarative ---> Tell React what u want and react will build the actual UI

->is not Imperative---> v have to say each and evrything so react avoids that process 

->we have separate dom structure in react

-> React will handle efficiently updating and rendering of the components



->Dom updates are handled gracefully in react

Prerequisites for react:-

->Html,Css,Js fundamentals

->ES6--> Modern javascript


Javascript --->'this' keyword, filter, map and reduce methods 

ES6--> let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment 

Day 2-12/12/23
==============
NPX- Node Package Runner
NPM-Node Package Manager

npm start --->means it starts react application
node is a backend server which is necessary for react,angular frameworks


Day 3-13/12/23
==============
npm install create-react-app -g (or) npx create-react-app hello-world
create react-app app-name
cd app-name
npm start
PS D:\React Course> cd hello-world
PS D:\React Course\hello-world> npm start

url link-http://localhost:3000/

->In package json file we can update the dom version

->package.json file--> here we will maintain all our extensions and testing scripts of our application

-><div id="root"></div>--> Root DOM node which is entirely controlled by react js

Control flow:
npm start->index.html-><div id="root"></div>->(src folder)index.js->root-><./app>->app.js->export->then import that in index.js(extension is li8 doubt here)

Component in React
===================
	->In React components represent the part of the user interface.
	
	->header component
	->Footer component
	->Side nav component
	->Body component
	->Root component

Day 4-14/12/23
==============

React Components:
==================

Component in code
==================

->Component code is completely based on javascript file ...All are .js files

Component types:
=================
1)Stateless functional component:
==================================
	->Functional component is literally javascript function(We describe the UI)

	->It will return the UI(return the html element)
	
	Eg:
	function welcome(props)//in props v can pass many names
	{
		return <h1>Hello,{props.name}</>
	}


2)Stateful Class component:
==============================
	->Regular  ES6 classes which will extends the component class from the react library

class welcome extends component
{

	render()
	{
		return<h1>Hello,{props.name}</h1>	
	
	}
} 

Functional components:
======================

	->Functional components are just js functions .They can optionally receive the object of properties(props) which is referred to the props and return the html which describe the UI.

	->We need to follow pascal rule for naming the Components (every 1st letter in capital)->eg:JavascriptFunctionsReact

Day-5 -18/12/23
===============
JSX in react
=============
	->JSX -Javascript XML(JSX)--->Extension to the javascript language syntax	
	
	->Write XML - like code for elements and components
	
	->JSX tags have a tag name, attributes and children

	->JSX in not necessary to write a react appliacation

	->JSX makes our react code simpler and elegant

	->JSX ultimately transpiles to put js which is understood by the browser


	Components can be reused.ie It can b called many times

Day 6 - 19/12/23
=================
props:
======
	->It is a properties that the optional input where our components can accept , it allows our component shd act as a dynamic
	
	->In class component in order to use props v need to use keyword called this.

	->for Functional components only props is enough no need of this keyword.

Component State in React:
=========================

2 ways to influence what is render on the screen and that is the state of the component 

Props vs State
==============

Props:
======
->Props get passed to the component

->Functions parameters

->Props r immutable

->Functional component
this.props - class component

State:(is lyk a local variable)
======
->State is managed within the component 

->Variables declared in the function body

->State can b changed...(since it is lyk local variable it can b changed)

->useState Hook- Functional component
this.state-class component


Day 7 - 20/12/23
=================
	->State is a reserved keyword

	->Since it is a class component use this keyword

	->State is a object that is privately maintained inside the component , a state can influence what should be rendered inside the browser.

	->State can b changed within the component 

Day 8 - 21/12/23
=================
	
State and setState:
===================
	
Destructuring
============== 
	 ->It is a ES6 feature that make it possible to unpack values from array or properties from the object into distinct variables .
	
	->In react Destructuring props and state improve the code readability 

Day 9 - 22/12/23
=================

	->There are two ways to destructure props in a functional component 

	->We can destructure the props inside functional parameters itself

	->We can ds the props inside the functional parameters body

Event Handling
===============
	

Binding Event Handling:
=======================

How to bind Event Handlers in React? 

Day 10 - 27/12/23
=================

	->React is a javascript Library

	->React is a single page web application 

	->React supports server side rendering
	
	->It will make use of the virtual Dom rather than real Dom as RealDom manipulation are expensive

	->It follows unidirectional data binding or data flow 

	->It uses reusable components, UI components for developing the view 

Day 11 - 28/12/23
===================

How to binding events Handling?
	The reason we bind events handlers in react is purely because of the way this keyword works in javascript, it is not how react works.

Conditional Rendering
======================

1.If/else

2.elements variables

3.ternary conditional operator

4.short circuit operator

Day 12- 29/12/23
================

List Rendering
==============
	-> 
		

Day 13 - 03/01/24
==================
List and Keys
==============

	->

Styling and Css Basics
======================

1)Css stylesheets
2)Css modules
3)Inline Styling
4)Css in javascript libraries

Day 14 - 04/01/24
==================
Advantage of using module css is that classes are locally scoped by default

We need to follow 2 steps 



Day 15 - 05/01/24
==================

Lifecycle methods in React:
============================

Mounting:
==========
 	->When a insatance of component is being created and inserted into DOM

	->Constructor, static getDerivedStateFromProps, render and componentDidMount

	->constructor(props)--> Itis a spcl function that will get calloed whenever  a new component is created

What is constructor used for?
==============================

->Initializing state
->Binding the event handlers
->2 Things we need to keep in mind when wew create our own constant in react

1)super(props)
directly overwrite this.state

constructor(props)-->static getDerivedStateFromProps(props,state)(set the state)

constructor(props)-->static getDerivedStateFromProps(props,state)-->render()-->children components lifecycle methods are also executed

constructor(props)-->static getDerivedStateFromProps(props,state)-->render()componentDIdMount()

Mounting lifecycle method execution order:
==========================================
parent const
parent getDerivedStateFromProps(props,state)
parent render()
child constructor
child getDerivedStateFromProps(props,state)
child render
child componentDidMount()
parent componentDidMount()



Updating:
=========
	-> When a component is being re-rendered as a result of changes to either its props or state 

 	->static detDerivedStateFromProps, shouldComponentUpdate,render, getSnapshotBeforeUpdate and componentDidUpdate

Unmounting: 
============
	->When a component is being removed from the DOM

	->ComponentWillUnmount

Error handling:
===============
	->When there is a error during rendering ,in a lifecycle method or in the constructor of any child component

	->static getDerivedStateFromError and componentDidCatch

Day 16 - 09/01/24
==================

React Fragments:
================
	->It will let us to group our children elements without adding extra notes to DOM
	->It can accept the key attributes when rendering list of items
	
	(to remember- rce,rfce)-shortcuts

Pure Components:
================
	->shortcut rpce in vscode...
Regular component:
	->A regular component does not implement the shouldComponentUpdate method.it will always return true by default
Pure component:
	->A pure component on the other hand which implement the shouldComponentUpdate method with shallow props and state comparison

shallow Comparison:
==================

x (SC) y returns true if x and y have the same values and are of the same type

ex: String 'Saravanan' (SC) string 'saravanan' returns true 

Complex types:
===============

x (SC) y returns true if x and y reference tye exact same object 

var a=[1,2,3]
var y=[1,2,3]
var z=a;

var var x1_y1 = (x==b)//false
var var x1_y1 = (x==z)//true


Context in react
================


context --> API

context provies a way to pass the data throught the component tree without having to pass props down at every level.

create context




React and http:
===============


How to react works with HTTP:


How to make Ajax Requests or How do we API Calls in React


props 
states only  render in react 

HTTP Library

Axios 
Fetch API



How to make ajax requests or how do we API calls in react

HTTP library

Axios - using axios we can link another page's link.       
Fetch Library 

25/01/24
=========
React Hooks
===========

What are Hooks:
================

Hooks are a new feature addition in react version 16.8 which allow us to use react features without having to write a class 

Ex: State of a component 

->Hooks dont work inside the classes

Why Hooks:
==========
Reason 1: Understand how this keyword works in js...Classes dont minify very well amd i will not make fast reloading

2:Create components for complex scenarios such as data fetching and subscribing to events 

Ex: Data fetching - In componentDidMount and componentDidUpdate 

Ex: Event Listeners - In componentDidMount and componentWillUnmount


use context ----> it is react hook the let us read and subscribe to context from our components


useReducer ----> it is rect hook that lets use to add a reducer to our components



TypeScript ---> TSX

TypeScript is a Free and open source high level progamming language developed by Microsoft.

It will make maintenance and refactoring of large code bases much easier code.


Redux in React : 
--> Redux is the state management library, whereas Redux will basically
store and manage all the application states.

--> also it provides us with soem importantAPIS using which we can make 
changes to existing state as well as fetch the current state of the application.

--> Store , Action and Reduces.

--> Store: Store the State of the Application.
--> Action: The source information for the Store.
--> Reduces: It specify how the application state change in responce to Action

Interview Questions in React Components.

1) What are the Components in React?
2) What is State in React?
3) How do you implement State in React?
4) What are Props in React ?
5) How to pass Props between components?
6) What are Difference between Props and State?
7) Explain the lifeCycle methods of Components.

Interview Questions in React Components Styling.

1) How do you Style React Components?
2) How to use CSS modules in React?
3) 

