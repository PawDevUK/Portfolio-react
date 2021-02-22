Website to present my projects and skills to whom it may concern.<br>  It's react based created with create-react-app and styled with styled-components. <br>
Source code is hosted on Gcloud. <br>
Live:
http://portfolio-client-293919.appspot.com/content


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
* Created "Contact" section with basic info and parallax background
* merged with Covid-app
* added backend in node.js
* component Contact with form to send me email directly.
* annimated button and header "Brain bot" for chat in top section 

### To Do

#### Portfolio
* sort out problem with axios instance for intro. Path function sending empty obj.
* Add personal image to "About" component
* Refactor Code
* run lighthouse test
  * consider implement sections with lighthouse reports for each of projects
* add github theme to button.
* add stack icons to project cards.
* add heart/like to project card (implement db to store global counter for all hearts/likes).
* Set up automatic app deploy when project is commited and pushed on GitHub 
* create cookie to get info of visitors (date,time)
* add db to store cookie
* create stats component to display visitors
* <s> add automatic response on submition of Contact form </s>
* <s>fix showing up square bug on reload next to bot chat window.</s>
* <s> create backend </s>
* <s> design and implement footer.</s>
* <s> Add intro in readme.md to explain some details about this project </s>
* <s>design and implement "contact me" with details to reach me</s> and form to message me directly(back-end required).
* <s>implement responsive "main layout" for components.</s>
* <s>reduce chat window width</s>
* <s>fix not visible chat icon on entry (need to be reloaded to show up)</s>
* <s>find better way to display directory tree in readme.md</s>
* <s>move text and pros out  of React.jsx component to store and export it back, then map it out.</s> 
* <s>reduce text line height in "Why React" component</s>
* <s>reduce "Tick" svg in "Why React"</s>
* <s>change login project img on content centered.</s>
* <s>reduce "why react" component height on mobile devices</s>
##### <s> Swap-Bot Chat to texting directly to my mobile from the chat window. </s>
##### <s> Implement Bot-Chat To Main Page. </s>
 <s>create backend for chat and maybe even chat history</s>
* <s>add "Talk to Brian Bot" banner to message window of Bot Chat</s>
* <s>add send message "hi" on chat open and "writing"</s>
* <s>get access token for unlimited requests. At the moment 150 per day</s>
* <s>design modern looking interface, not too big and not too fancy\
  Simple with basic functionally and matching color schemes.</s>


#### Covid-App
* <s>create footer </s>
* implement live api with fall back to store in case of 404
* create rwd for app
* fix country picker scroll bug
* <s> fix maxValue bug by implementing CheckMax </s>

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
    │   ├── covid-app
    │   │   ├── api
    │   │   │   ├── Global.js
    │   │   │   ├── Test.js
    │   │   │   └── UK.js
    │   │   ├── components
    │   │   │   ├── common
    │   │   │   │   ├── Covid.jsx
    │   │   │   │   └── SectionHeader.jsx
    │   │   │   ├── factory.js
    │   │   │   ├── Footer
    │   │   │   │   └── Footer.jsx
    │   │   │   ├── Header
    │   │   │   │   └── Header.jsx
    │   │   │   ├── index.js
    │   │   │   ├── Main
    │   │   │   │   ├── Chart.jsx
    │   │   │   │   ├── CountryPicker.jsx
    │   │   │   │   ├── Global.jsx
    │   │   │   │   ├── index.js
    │   │   │   │   ├── Main.jsx
    │   │   │   │   └── Summary.jsx
    │   │   │   └── styled.js
    │   │   ├── Covid.jsx
    │   │   ├── img
    │   │   │   ├── covidIcon.svg
    │   │   │   ├── covidMain.png
    │   │   │   ├── demo.png
    │   │   │   ├── graph.png
    │   │   │   └── index.js
    │   │   └── store
    │   │       ├── countries.json
    │   │       ├── PageFeed
    │   │       │   └── Footer.js
    │   │       └── total.json
    │   ├── D-Stack
    │   │   ├── card.jsx
    │   │   └── stack.jsx
    │   ├── E-React
    │   │   ├── pros.jsx
    │   │   └── React.jsx
    │   ├── F-Projects
    │   │   ├── card.jsx
    │   │   └── projects.jsx
    │   ├── G-Contact
    │   │   └── Contact.jsx
    │   ├── H-Footer
    │   │   ├── footer.jsx
    │   │   └── FooterYear.jsx
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
    ├── index.js
    ├── store.js
    └── styled.js
```
