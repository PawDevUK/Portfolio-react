# Project Directory

```bash
Portfolio-react/
├── .babelrc
├── .env
├── .eslintcache
├── .gcloudignore
├── .gitignore
├── .npmrc
├── .prettierrc
├── app.yaml
├── Directory.md
├── jsconfig.json
├── MAIN_ASSESSMENT.MD
├── package.json
├── package-lock.json
├── README.md
├── start.js
├── tailwind.config.js
├── TimeLine.md
├── vercel.json
├── build/
│   ├── asset-manifest.json
│   ├── index.html
│   └── static/
│       ├── css/
│       ├── js/
│       └── media/
├── public/
│   ├── apple-touch-icon.png
│   ├── index.html
│   └── PS.ico
├── SKILLS_ASSESSMENTS/
│   ├── MAIN_ASSESSMENT.MD
│   ├── SKILLS_ASSESSMENT-BACKEND.MD
│   ├── SKILLS_ASSESSMENT-FRONTEND.md
│   └── SKILLS_ASSESSMENT-NEXT_JS.MD
└── src/
    ├── configureStore.js
    ├── index.css
    ├── index.js
    ├── styled.js
    ├── actions/
    │   ├── addCounter.actions.js
    │   ├── addParticlesOptions.actions.js
    │   ├── addWT_Route.action.js
    │   ├── isChatOpen.actions.js
    │   ├── pageContent.actions.js
    │   └── toggleLang.actions.js
    ├── api/
    │   ├── index.js
    │   ├── registerLogin.js
    │   ├── VisitorsAPI.config.js
    │   └── workTracker.api.js
    ├── components/
    │   ├── app.jsx
    │   ├── A-Intro/
    │   │   ├── intro.jsx
    │   │   └── welcome.jsx
    │   ├── B-Header/
    │   │   ├── Header.jsx
    │   │   ├── JumboText.jsx
    │   │   ├── LangSwitch.jsx
    │   │   ├── LargeMenu.jsx
    │   │   └── MobileMenu.jsx
    │   ├── C-About/
    │   │   └── top-intro.jsx
    │   ├── common/
    │   │   ├── Button.jsx
    │   │   ├── ComponentLayout.jsx
    │   │   ├── Header.jsx
    │   │   ├── JumboSectionHeader.jsx
    │   │   ├── Logo.jsx
    │   │   ├── Toggler.jsx
    │   │   └── typography.js
    │   ├── D-Stack/
    │   │   ├── card.jsx
    │   │   └── stack.jsx
    │   ├── E-React/
    │   │   ├── pros.jsx
    │   │   └── React.jsx
    │   ├── F-Projects/
    │   │   ├── card.jsx
    │   │   ├── LargeCard.jsx
    │   │   ├── projects.jsx
    │   │   ├── Stack.jsx
    │   │   ├── covid-app/
    │   │   │   ├── Covid.jsx
    │   │   │   ├── components/
    │   │   │   │   ├── API.js
    │   │   │   │   ├── factory.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── styled.js
    │   │   │   │   ├── common/
    │   │   │   │   │   ├── Covid.jsx
    │   │   │   │   │   └── SectionHeader.jsx
    │   │   │   │   ├── Footer/
    │   │   │   │   │   └── Footer.jsx
    │   │   │   │   ├── Header/
    │   │   │   │   │   └── Header.jsx
    │   │   │   │   ├── Main/
    │   │   │   │   │   ├── Chart.jsx
    │   │   │   │   │   ├── CountryPicker.jsx
    │   │   │   │   │   ├── Global.jsx
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── Main.jsx
    │   │   │   │   │   └── Summary.jsx
    │   │   │   │   └── News/
    │   │   │   │       ├── Card.jsx
    │   │   │   │       └── News.jsx
    │   │   │   ├── img/
    │   │   │   │   ├── covidIcon.svg
    │   │   │   │   ├── covidMain.png
    │   │   │   │   ├── demo.png
    │   │   │   │   ├── graph.png
    │   │   │   │   └── index.js
    │   │   │   └── store/
    │   │   │       ├── countries.json
    │   │   │       └── total.json
    │   │   ├── FitnessApp/
    │   │   │   ├── FitnessApp.jsx
    │   │   │   ├── api/
    │   │   │   │   └── fitnessApi.js
    │   │   │   └── components/
    │   │   │       ├── create-exercises-component.jsx
    │   │   │       ├── create-user-component.jsx
    │   │   │       ├── edit-exercises-component.jsx
    │   │   │       ├── exercises-list-component.jsx
    │   │   │       ├── exercises-list-table-row.jsx
    │   │   │       ├── navbar-component.jsx
    │   │   │       └── user-table-component.jsx
    │   │   ├── Register_Login/
    │   │   │   ├── Base.jsx
    │   │   │   ├── Login.jsx
    │   │   │   ├── NavButtons.jsx
    │   │   │   ├── ReadMe.md
    │   │   │   ├── Register.jsx
    │   │   │   ├── RegisterSignIn.jsx
    │   │   │   └── styles/
    │   │   ├── TicTacToe/
    │   │   │   ├── factory.js
    │   │   │   ├── readme.md
    │   │   │   ├── store.js
    │   │   │   ├── styled.js
    │   │   │   ├── TicTacToe.jsx
    │   │   │   ├── API/
    │   │   │   │   └── routes.js
    │   │   │   ├── components/
    │   │   │   │   ├── Header.jsx
    │   │   │   │   ├── PlayerList.jsx
    │   │   │   │   ├── Board/
    │   │   │   │   │   ├── Board.jsx
    │   │   │   │   │   ├── BottomButtons.jsx
    │   │   │   │   │   ├── Row.jsx
    │   │   │   │   │   └── TopButtons.jsx
    │   │   │   │   └── common/
    │   │   │   │       └── Button.js
    │   │   │   └── img/
    │   │   │       ├── Group1.png
    │   │   │       ├── Group2.png
    │   │   │       ├── Group3.png
    │   │   │       ├── Group4.png
    │   │   │       ├── Group5.png
    │   │   │       ├── Group7.png
    │   │   │       ├── Group8.png
    │   │   │       ├── Group9.png
    │   │   │       └── index.js
    │   │   └── Work_Tracker/
    │   │       ├── fullYear24_25.json
    │   │       ├── Presentation.jsx
    │   │       ├── Readme.md
    │   │       ├── Work_Tracker.jsx
    │   │       ├── Calendar/
    │   │       ├── Clock-in_out/
    │   │       ├── dayTime/
    │   │       ├── login-register/
    │   │       │   └── right/
    │   │       ├── Menu/
    │   │       ├── RotaEdit/
    │   │       ├── RotaTable/
    │   │       └── style/
    │   ├── G-Contact/
    │   │   ├── axiosCreate.js
    │   │   └── Contact.jsx
    │   ├── H-Footer/
    │   │   ├── Footer.jsx
    │   │   └── VisitorCounter.jsx
    │   ├── I-CV/
    │   │   ├── cv.css
    │   │   ├── cv.jsx
    │   │   ├── CV_REPORT.MD
    │   │   └── DownloadCV.jsx
    │   ├── TimeLine/
    │   │   ├── articles.js
    │   │   ├── report.md
    │   │   └── TimeLine.jsx
    │   └── Z-Chat/
    │       ├── BlueMSG.jsx
    │       ├── Chat.jsx
    │       ├── Input.jsx
    │       └── WhiteMSG.jsx
    ├── config/
    │   ├── common.config.js
    │   ├── fonts.config.js
    │   ├── footer.config.js
    │   ├── headerJumboText.config.js
    │   ├── headerMenu.config.js
    │   ├── initialState.js
    │   ├── particles.config.js
    │   ├── projects.config.js
    │   ├── reactComponent.config.js
    │   ├── stack.config.js
    │   └── topIntro.config.js
    ├── factory/
    │   └── factory.js
    ├── fonts/
    │   ├── Lato/
    │   ├── Nunito_Sans/
    │   ├── Roboto/
    │   └── Ubuntu/
    ├── img/
    │   ├── asparago.webp
    │   ├── barber 2.webp
    │   ├── barber.webp
    │   ├── bootstrap.png
    │   ├── bot.png
    │   ├── bot.webp
    │   ├── BrainBot.png
    │   ├── chat24.png
    │   ├── ChatButtonLarge1px.svg
    │   ├── computer-2982270_1920.jpg
    │   ├── CovidApp.png
    │   ├── CovidApp.webp
    │   ├── css.jpeg
    │   ├── expand-23.png
    │   ├── express.png
    │   ├── figma.png
    │   ├── FitnessApp.png
    │   ├── FitnessApp.webp
    │   ├── gcloud.png
    │   ├── github.png
    │   ├── html.png
    │   ├── index.js
    │   ├── JavaScript.png
    │   ├── login.png
    │   ├── login1.png
    │   ├── materialUI.png
    │   ├── mongoDb.png
    │   ├── MyPhoto.png
    │   ├── nasa 2.webp
    │   ├── nasa.webp
    │   ├── node.jpg
    │   ├── npm.png
    │   ├── pavdev.png
    │   ├── pavdev.svg
    │   ├── poland.png
    │   ├── React.png
    │   ├── react.svg
    │   ├── ReactRouter.png
    │   ├── Register.webp
    │   ├── royal.png
    │   ├── royal.webp
    │   ├── scss.png
    │   ├── skyScrapers.png
    │   ├── solicitors 2.webp
    │   ├── solicitors.webp
    │   ├── styled.jpeg
    │   ├── tictactoe.webp
    │   ├── ubuntu.png
    │   ├── united-kingdom.png
    │   ├── vscode.webp
    │   ├── y-so-serious-white.png
    │   └── icon/
    │       ├── done_24px.svg
    │       └── dropdown.svg
    ├── reducers/
    │   ├── chat.reducer.js
    │   ├── counterReducer.js
    │   ├── index.js
    │   ├── PageContent.reducer.js
    │   ├── particlesOption.reducer.js
    │   ├── toggleLang.reducer.js
    │   ├── users.js
    │   ├── users.reducer.js
    │   └── WT_router.reducer.js
    ├── routes/
    │   └── routes.js
    ├── selectors/
    │   ├── isChatOpen.selector.js
    │   ├── pageContent.selector.js
    │   ├── particlesOptions.selector.js
    │   └── visitors.selector.js
    └── styles/
```
