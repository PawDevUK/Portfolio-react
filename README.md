## Directory
```bash
.
├── app.yaml
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
└── src
    ├── components
    │   ├── A-Intro
    │   │   ├── intro.jsx
    │   │   └── welcome.jsx
    │   ├── app.jsx
    │   ├── B-Header
    │   │   ├── Header.jsx
    │   │   ├── JumboText.jsx
    │   │   ├── LargeMenu.jsx
    │   │   └── MobileMenu.jsx
    │   ├── C-About
    │   │   └── top-intro.jsx
    │   ├── common
    │   │   ├── burger.jsx
    │   │   ├── button.jsx
    │   │   ├── JumboSectionHeader.jsx
    │   │   ├── logo.jsx
    │   │   └── typography.js
    │   ├── D-Stack
    │   │   ├── card.jsx
    │   │   └── stack.jsx
    │   ├── E-React
    │   │   ├── pros.jsx
    │   │   └── React.jsx
    │   ├── F-Projects
    │   │   ├── card.jsx
    │   │   └── projects.jsx
    │   ├── G-Footer
    │   │   ├── footer.jsx
    │   │   └── FooterYear.jsx
    │   ├── H-CV
    │   │   ├── cv.css
    │   │   └── cv.jsx
    │   └── Z-Chat
    │       ├── BlueMSG.jsx
    │       ├── Chat.jsx
    │       ├── Input.jsx
    │       └── WhiteMSG.jsx
    ├── factory.js
    ├── img
    │   ├── asparagogit.png
    │   ├── asparago.png
    │   ├── barber.jpg
    │   ├── bootstrap.png
    │   ├── bot.png
    │   ├── ChatButtonLarge1px.svg
    │   ├── computer-2982270_1920.jpg
    │   ├── css.jpeg
    │   ├── figma.png
    │   ├── FitnessApp.png
    │   ├── gcloud.png
    │   ├── github.png
    │   ├── html-logo.png
    │   ├── icon
    │   │   ├── done_24px.svg
    │   │   └── dropdown.svg
    │   ├── index.js
    │   ├── JavaScript-logo.png
    │   ├── login1.png
    │   ├── login.png
    │   ├── materialUI.png
    │   ├── mongoDb.png
    │   ├── nasa.png
    │   ├── node.jpg
    │   ├── pavdev.png
    │   ├── pavdev.svg
    │   ├── React.png
    │   ├── react.svg
    │   ├── royal.png
    │   └── solicitors.png
    ├── index.js
    └── store.js
```
<hr>

#### Updates
* Added Node.js to skills
* Card component
  * Added text reducer to card text 
  * Removed bootstrap
  * Added styled Button with "light" theme
* Removed width passed as props and used for rwd.
* Added css media and styled rwd based on media queries
* Added Bot Chat which slides out from the right on click. 


### To Do
* run lighthouse test
  * consider implement sections with lighthouse reports for each of projects
* implement responsive "main layout" for components.
* Refactor Code
* find better way to display directory tree in readme.md 
* design and implement "contact me" with details to reach me and form to message me directly(back-end required).
* design and implement footer.
* add github theme to button.
* add stack icons to project cards.
* add heart/like to project card (implement db to store global counter for all hearts/likes).
* <s>fix not visible chat icon on entry (need to be reloaded to show up)</s>
* fix showing up square bug on reload next to bot chat window.
* reduce chat window width
* implement moving button for a chat
* add "Talk to Brian Bot" banner to message window of Bot Chat
* add send message "hi" on chat open and "writing"
* <s>move text and pros out  of React.jsx component to store and export it back, then map it out.</s> 
* <s>reduce text line height in "Why React" component</s>
* <s>reduce "Tick" svg in "Why React"</s>
* <s>change login project img on content centered.</s>
* <s>reduce "why react" component height on mobile devices</s>
#### Implement Bot Chat To Main Page.
* <s>design modern looking interface, not too big and not too fancy\
  Simple with basic functionally and matching color schemes.</s>
* get access token for unlimited requests. At the moment 150 per day
