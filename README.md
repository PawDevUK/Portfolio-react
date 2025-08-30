# Portfolio

This website showcases my projects and skills. It's a React app created with create-react-app and styled using styled-components. The source code is hosted on Google Cloud Platform (GCP).

Live: [Portfolio](http://pawelsiwek.co.uk/)

<hr>

## Specification of the Page
- h1 
- h2
- h3
- h4
- h5: 18px
- paragraph: 16px
- font size: 16px
- font family: 'Nunito Sans', sans-serif,
- line-height: 24px

---

## Updates

- Removed particles.js as it is deprecated.
- Installed react-tsparticles as it is fully supported.
- Removed react-hover-animation as it was not compatible with React 17.
- Added a custom domain 'pawelsiwek.co.uk' to the application.
- Deployed the app to GCP.
- Added Redux state management with default page content.
- Added Node.js to skills.
- Card component:
  - Added text reducer to card text.
  - Removed Bootstrap.
  - Added a styled Button with "light" theme.
- Removed width passed as props and used for responsive web design (RWD).
- Added CSS media queries and styled RWD based on media queries.
- Added Bot Chat that slides out from the right on click.
- Created a "Contact" section with basic info and parallax background.
- Merged with Covid-app.
- Added backend in Node.js.
- Added a Contact component with a form to send me an email directly.
- Animated chat button and chat header "Brain bot".
- Added a visitor counter on every intro button click.
- Added email notification on every visitor.
- Added RWD for Contact and Footer.
- Changed contact background parallax and widened it to the full width of the page.
- Added stack icons to each project card.
- Added Tic Tac Toe to projects.

---

## To Do

#### Portfolio

- Add all not working projects to Portfolio to make them accessible.
- Add initial data to LocalStorage in the TicTacToe so the stats window has some dummy data to display.
- Add downloaded fonts to the project.
- Improve text on the entire website.
- Improve card design.
- Simplify and reduce repeated styles throughout the page.
- Finish Register/Login functionality.
- Finish language support for Polish.
- Improve application performance.
- Update 'About Me' section.
- Update all application text content.
- Update CV.
- Add a personal image to the "About" component.
- Refactor code.
- Add a heart/like feature to project cards (implement a database to store a global counter for all hearts/likes).
- Create a stats component to display visitors.
- <s>Add a 'kill-switch' to the server project.</s>
- <s>Run Lighthouse test.</s>
- <s>Fix image issues for mobile projects in cards (Nasa/Gentlemen Barber/Goodwood Solicitors/Asparagus).</s>
- <s>Implement lazy loading to improve performance.</s>
- <s>Add a custom domain 'pawelsiwek.co.uk' to the application.</s>
- <s>Remove particles from project backgrounds, as it affects performance, and add a static image with particles.</s>
- <s>Deploy the app to GCP.</s>
- <s>Deploy the app to Heroku server.</s>
- <s>Connect the client to the server.</s>
- <s>Add Register/Login content.</s>
- <s>Add functionality to remove tools on mobile devices.</s>
- <s>Add stack icons to project cards.</s>
- <s>Create a cookie to get information about visitors (date, time).</s>
- <s>Sort out the problem with the axios instance for intro. Path function sends an empty object.</s>
- <s>Add an automatic response on submission of the Contact form.</s>
- <s>Fix the issue of a square not showing up on reload next to the bot chat window.</s>
- <s>Create a backend.</s>
- <s>Design and implement a footer.</s>
- <s>Add an intro in readme.md to explain some details about this project.</s>
- <s>Design and implement "Contact Me" with details to reach me and a form to message me directly (back-end required).</s>
- <s>Implement responsive "main layout" for components.</s>
- <s>Reduce chat window width.</s>
- <s>Fix the not visible chat icon on entry (needs to be reloaded to show up).</s>
- <s>Find a better way to display the directory tree in readme.md.</s>
- <s>Move text and pros out of React.jsx component to store and export it back, then map it out.</s>
- <s>Reduce text line height in the "Why React" component.</s>
- <s>Reduce "Tick" SVG in "Why React".</s>
- <s>Change the login project image on content-centered.</s>
- <s>Reduce "Why React" component height on mobile devices.</s>
- <s>Implement Bot-Chat on the main page.</s>
- <s>Create a backend for chat and maybe even chat history.</s>
- <s>Add a "Talk to Brian Bot" banner to the message window of Bot Chat.</s>
- <s>Add sending a message "hi" on chat open and "writing".</s>
- <s>Get an access token for unlimited requests. At the moment, it's limited to 150 per day.</s>
- <s>Design a modern-looking interface, not too big and not too fancy, simple with basic functionality and matching color schemes.</s>

### Covid-App

- Create a component to display the latest news related to COVID.
- Create an Axios instance to get data from the backend.
- Consider using a different chart library than nivo.
- Create RWD for the app.
- Fix the country picker scroll bug.
- <s>Implement live API with fallback to store in case of a 404.</s>
- <s>Fix maxValue bug by implementing CheckMax.</s>
- <s>Create a footer.</s>

---

## Issues 

- Too many styles types, which is a bit confusing. It's good to show familiarity\ 
with the technology, but it doesn't look good. I need to decide to use one of the\ 
style types and stick to it. It will be hard to convert everything from style 
components to SCSS, but there should not be a problem converting SCSS into styled\
components.\


## Directory

```bash
.
├── app.yaml
├── gist.md
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
└── src
    ├── components
    │   ├── A-Intro
    │   │   ├── axiosData.js
    │   │   ├── intro.jsx
    │   │   └── welcome.jsx
    │   ├── app.jsx
    │   ├── B-Header
    │   │   ├── Header.jsx
    │   │   ├── JumboText.jsx
    │   │   ├── LargeMenu.jsx
    │   │   └── MobileMenu.jsx
    │   ├── C-About
    │   │   └── top-intro.jsx
    │   ├── common
    │   │   ├── Burger.jsx
    │   │   ├── Button.jsx
    │   │   ├── ComponentLayout.jsx
    │   │   ├── JumboSectionHeader.jsx
    │   │   ├── Logo.jsx
    │   │   └── typography.js
    │   ├── D-Stack
    │   │   ├── card.jsx
    │   │   └── stack.jsx
    │   ├── E-React
    │   │   ├── pros.jsx
    │   │   └── React.jsx
    │   ├── F-Projects
    │   │   ├── card.jsx
    │   │   ├── covid-app
    │   │   │   ├── api
    │   │   │   │   ├── Global.js
    │   │   │   │   ├── Test.js
    │   │   │   │   └── UK.js
    │   │   │   ├── components
    │   │   │   │   ├── common
    │   │   │   │   │   ├── Covid.jsx
    │   │   │   │   │   └── SectionHeader.jsx
    │   │   │   │   ├── factory.js
    │   │   │   │   ├── Footer
    │   │   │   │   │   └── Footer.jsx
    │   │   │   │   ├── Header
    │   │   │   │   │   └── Header.jsx
    │   │   │   │   ├── index.js
    │   │   │   │   ├── Main
    │   │   │   │   │   ├── Chart.jsx
    │   │   │   │   │   ├── CountryPicker.jsx
    │   │   │   │   │   ├── Global.jsx
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── Main.jsx
    │   │   │   │   │   └── Summary.jsx
    │   │   │   │   └── styled.js
    │   │   │   ├── Covid.jsx
    │   │   │   ├── img
    │   │   │   │   ├── covidIcon.svg
    │   │   │   │   ├── covidMain.png
    │   │   │   │   ├── demo.png
    │   │   │   │   ├── graph.png
    │   │   │   │   └── index.js
    │   │   │   └── store
    │   │   │       ├── countries.json
    │   │   │       ├── PageFeed
    │   │   │       │   └── Footer.js
    │   │   │       └── total.json
    │   │   ├── projects.jsx
    │   │   ├── Stack.jsx
    │   │   └── TicTacToe
    │   │       ├── API
    │   │       │   └── routes.js
    │   │       ├── components
    │   │       │   ├── Board
    │   │       │   │   ├── Board.jsx
    │   │       │   │   ├── BottomButtons.jsx
    │   │       │   │   ├── Row.jsx
    │   │       │   │   └── TopButtons.jsx
    │   │       │   ├── common
    │   │       │   │   └── Button.js
    │   │       │   ├── Header.jsx
    │   │       │   └── PlayerList.jsx
    │   │       ├── factory.js
    │   │       ├── img
    │   │       │   ├── Group1.png
    │   │       │   ├── Group2.png
    │   │       │   ├── Group3.png
    │   │       │   ├── Group4.png
    │   │       │   ├── Group5.png
    │   │       │   ├── Group7.png
    │   │       │   ├── Group8.png
    │   │       │   ├── Group9.png
    │   │       │   └── index.js
    │   │       ├── readme.md
    │   │       ├── store.js
    │   │       ├── styled.js
    │   │       └── TicTacToe.jsx
    │   ├── G-Contact
    │   │   ├── axiosCreate.js
    │   │   └── Contact.jsx
    │   ├── H-Footer
    │   │   └── Footer.jsx
    │   ├── I-CV
    │   │   ├── cv.css
    │   │   └── cv.jsx
    │   └── Z-Chat
    │       ├── BlueMSG.jsx
    │       ├── Chat.jsx
    │       ├── Input.jsx
    │       └── WhiteMSG.jsx
    ├── factory.js
    ├── img
    │   ├── asparagogit.png
    │   ├── asparago.png
    │   ├── barber.jpg
    │   ├── bootstrap.png
    │   ├── bot.png
    │   ├── BrainBot.png
    │   ├── ChatButtonLarge1px.svg
    │   ├── computer-2982270_1920.jpg
    │   ├── CovidApp.png
    │   ├── css.jpeg
    │   ├── express.png
    │   ├── figma.png
    │   ├── FitnessApp.png
    │   ├── gcloud.png
    │   ├── github.png
    │   ├── html.png
    │   ├── icon
    │   │   ├── done_24px.svg
    │   │   └── dropdown.svg
    │   ├── index.js
    │   ├── JavaScript.png
    │   ├── login1.png
    │   ├── login.png
    │   ├── materialUI.png
    │   ├── mongoDb.png
    │   ├── MyPhoto.png
    │   ├── nasa.png
    │   ├── node.jpg
    │   ├── npm.png
    │   ├── pavdev.png
    │   ├── pawdev.svg
    │   ├── React.png
    │   ├── ReactRouter.png
    │   ├── react.svg
    │   ├── royal.png
    │   ├── skyScrapers.png
    │   ├── solicitors.png
    │   ├── styled.jpeg
    │   ├── tictactoe.png
    │   ├── ubuntu.png
    │   └── vscode.png
    ├── index.js
    ├── store
    │   ├── footer.js
    │   ├── headerMenu.js
    │   ├── projects.js
    │   ├── reactComponent.js
    │   └── stack.js
    └── styled.js
```
