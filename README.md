## Directory
- public
- src
  - components
    - common
      - burger.jsx
      - button.jsx
      - JumboSectionHeader.jsx
      - logo.jsx
      - typography.js
    - Intro
      - intro.jsx
      - welcome.jsx
    - Header
      - Header.jsx
      - JumboText.jsx
      - LargeMenu.jsx
      - MobileMenu.jsx
    - About
      - top-intro.jsx
    - Stack
      - card.jsx
      - stack.jsx
    - React
      - pros.jsx
      - React.jsx
    - Projects
      - card.jsx
      - projects.jsx
    - Footer
      - footer.jsx
    - Cv
      - cv.css
      - cv.jsx
    - app.jsx
  - img
  - factory.js
  - index.js
  - store.js
- package-lock.json
- package.json
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
* add github theme to button.
* add stack icons to project cards.
* add heart/like to project card (implement db to store global counter for all hearts/likes).
* <s>fix not visible chat icon on entry (need to be reloaded to show up)</s>
* fix showing up square bug on reload next to bot chat window.
* reduce chat window width
* add "Talk to Brian Bot" banner on Bot Chat
* add send message "hi" on chat open
* <s>move text and pros out  of React.jsx component to store and export it back, then map it out.</s> 
* <s>reduce text line height in "Why React" component</s>
* <s>reduce "Tick" svg in "Why React"</s>
* <s>change login project img on content centered.</s>
* <s>reduce "why react" component height on mobile devices</s>
#### Implement Bot Chat To Main Page.
* <s>design modern looking interface, not too big and not too fancy\
  Simple with basic functionally and matching color schemes.</s>
* get access token for unlimited requests. At the moment 150 per day
