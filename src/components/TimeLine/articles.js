export const articles = [
    {
        title: "Portfolio Frontend",
        date: "14/11/25",
        updates: [
            {
                period: "Afternoon (14:00-17:00)",
                description:
                    "Enhanced FitnessApp landing page and navigation structure. Fixed routing issues by moving Navbar inside Router component to enable proper Link functionality. Converted Bootstrap carousel to React Bootstrap Carousel component for proper JavaScript functionality with Bootstrap 4. Added all 14 fitness images from FitnessApp/img directory to carousel with automatic slide transitions, controls, and indicators disabled for slides-only display mode. Updated navbar background color to #E67E22 (vibrant orange). Restructured FitnessApp layout to achieve full-screen width for both navbar and carousel by removing container restrictions and wrapping only inner content. Converted styled-components (Wrapper, MainWrapper, RightWrapper, LeftWrapper) to standard div elements in FitnessApp.jsx for cleaner code structure. Created comprehensive LandingPage/Carousel.jsx component with proper React Bootstrap integration including 14 Carousel.Item components with descriptive alt text. Modified navbar-component.jsx removing wrapper div and applying inline backgroundColor style. Updated Directory.md to reflect complete project structure including FitnessApp with api/, components/, and img/ directories, Register_Login, Work_Tracker, TimeLine components, and all missing configuration files, fonts, and image directories (excluding node_modules as requested). Made 15+ commits, modified 4 files. Successfully resolved Bootstrap JavaScript dependency issues, implemented fully functional carousel with automatic transitions, and achieved responsive full-width layout for enhanced UX.",
            },
        ],
    },
    {
        title: "Portfolio Server",
        date: "13/11/25",
        updates: [
            {
                period: "Morning",
                description:
                    "FitnessApp Integration: Added new FitnessApp route with MongoDB integration for exercise and user management. Created Mongoose models for users (username field with unique constraint, timestamps) and exercises. Established routes for user and exercise CRUD operations. Added API documentation in api_routes.md. Configured MongoDB connection with proper error handling and automatic index management (drops old indexes on startup to prevent conflicts).",
            },
            {
                period: "Afternoon",
                description:
                    "FitnessApp Refactoring: Consolidated FitnessApp routes into a single index file structure, removing separate server.js. Refactored route handlers to use consolidated approach. Added CORS configuration updates to allow localhost:3000 and Vercel server access. Fixed MongoDB connection URI encoding issues and improved error handling for malformed JSON requests. Added username validation in user creation route to ensure data integrity.",
            },
            {
                period: "Evening",
                description:
                    "CORS Configuration Updates: Iteratively refined CORS configuration in server.js to dynamically allow Vercel preview and production deployments. Updated allowed origins to include multiple frontend domains. Changed from indexOf to includes method for cleaner code. Added logic to allow all .vercel.app subdomains dynamically. Resolved 'Access-Control-Allow-Origin' header issues preventing frontend-backend communication across different Vercel deployment URLs.",
            },
            {
                period: "Night",
                description:
                    "Debugging and Testing: Diagnosed MongoDB connection timeout issues on Vercel (10-second buffering timeout). Verified local endpoints returning 200 responses with proper JSON data. Tested API with Insomnia confirming server-side functionality. Identified CORS as root cause of frontend errors when origin didn't match allowed list. Updated timeline.json with comprehensive session documentation. Confirmed successful local development with FitnessApp returning user data from MongoDB Atlas.",
            },
        ],
    },
    {
        title: "Portfolio Frontend",
        date: "13/11/25",
        updates: [
            {
                period: "Afternoon (14:00-15:00)",
                description:
                    "Resolved deployment and API configuration issues for production environment. Fixed Fitness App API endpoints by removing trailing slashes and updating SERVER_URL to point to correct production server (portfolio-server-104qu2sac-pawdevs........). Refactored BASE_URL in fitnessApi.js to conditionally use SERVER_URL for production and localhost:8080 for local development based on window.location.hostname. Addressed CORS policy issues between frontend (pawelsiwek.co.uk) and backend by documenting need for Access-Control-Allow-Origin headers and preflight request handling. Updated vercel.json build configuration with NODE_OPTIONS=--openssl-legacy-provider flag to resolve OpenSSL compatibility issues with Node.js 17+. Removed unused imports (ubuntu, python) from stack.config.js and createSelector from particlesOptions.selector.js to eliminate build warnings. Converted class-based components to functional components. Removed .env configuration in favor of hardcoded environment-based URL switching. Updated project card links and deploy scripts. Made 18 commits, modified multiple API and configuration files. Successfully debugged and resolved production deployment failures, API endpoint misconfigurations, and build compatibility issues while maintaining local development workflow.",
            },
        ],
    },
    {
        title: "Portfolio Frontend",
        date: "07/11/25",
        updates: [
            {
                period: "Afternoon (13:00)",
                description:
                    "Restructured timeline component for better data organization and display. Refactored articles.js data structure from flat list with date-period strings to nested structure with separate date and updates array, where each update contains period and description fields. Updated TimeLine.jsx to render one section per day with single date header, displaying multiple time-period updates under the same marker when multiple updates exist for the same day (e.g., 06/11/25 shows Morning, Afternoon, and Evening updates together). Removed complex date-parsing and grouping logic from component in favor of simpler data-driven approach. Updated README.md TODO list marking timeline restructuring task as completed and adding new task for multi-repository timeline aggregation system. Made 3 commits, modified 3 files. Successfully simplified timeline architecture and improved visual hierarchy with better date grouping.",
            },
            {
                period: "Morning (11:39)",
                description:
                    "Updated portfolio content and refined CV skills section. Enhanced topIntro.config.js with improved English descriptions making them more professional and detailed (e.g., \"modern, scalable web applications\", \"robust state management\", \"continuous learning\"). Added comprehensive Filament AI employment section describing chat widget customization for major clients (Rentokil, Versus Arthritis, Tesco), Google Cloud Functions extensions, EBM chatbot dialog flow configuration, and Filament UI enhancements. Updated Polish translations to match enhanced English content with proper technical terminology and professional tone. Removed Python from skills in cv.jsx and stack.config.js as not currently fluent enough for professional showcase. Improved project card layout in card.jsx by moving StImg component to top position before HeaderWrapper and adjusting element spacing for better visual hierarchy. Updated README.md TODO list. Made 5 commits, modified 4 files with 62 insertions and 37 deletions (net +25 lines). Successfully refined professional presentation and ensured accuracy in skills representation.",
            },
        ],
    },
    {
        title: "Portfolio Frontend",
        date: "06/11/25",
        updates: [
            {
                period: "Evening (21:39)",
                description:
                    "Enhanced stack icons and adjusted particle effects. Added AI development tools to stack.config.js: ChatGPT, GitHub Copilot, and Vercel logos with corresponding PNG images. Reduced particles repulse distance from 200 to 100 pixels to create smaller hover interaction circle. Updated README.md todo list. Restructured timeline to separate same-day work by time (Morning/Afternoon/Evening) instead of creating duplicate date entries. Split 06/11/25 articles.js entry into two separate timeline items with time-specific dates for better visual separation in timeline display. Made 3 commits, modified 9 files with 37 insertions and 14 deletions (net +23 lines plus 3 binary image files).",
            },
            {
                period: "Afternoon (12:50)",
                description:
                    "Optimized PDF download file size and quality, fixed deployment issues. Investigated excessive 25MB PDF file size caused by PNG format with scale: 2. Converted image format from PNG to JPEG with 0.95 quality compression, reducing file size from 25MB to 1.1MB. Increased scale parameter from 2 to 2.5 to improve visual quality while maintaining optimal file size around 2-3MB for better text sharpness and clarity. Removed useCORS: true configuration after determining it was unnecessary for same-domain images (default is false). Fixed Vercel deployment npm dependency conflict by creating .npmrc file with legacy-peer-deps=true flag to handle peer dependency resolution issues, and removed strict npm version requirement from package.json engines field (changed from npm: \"8.5.0\" to only requiring node >= 20). Made 6 commits, modified 4 files. Successfully balanced PDF quality with file size and resolved production deployment configuration.",
            },
            {
                period: "Morning (11:28)",
                description:
                    "Implemented PDF download functionality for CV page and resolved page break issues. Installed jspdf (v3.0.3) and html2canvas (v1.4.1) dependencies for client-side PDF generation. Created DownloadCV component (63 lines) with async/await pattern and multi-page PDF support. Implemented html2canvas configuration with scale: 2 for quality, useCORS: true for cross-origin images, ignoreElements callback to exclude .no-pdf class elements, and onclone callback to inject download-specific CSS classes into cloned document. Addressed PDF page break problem where \"Junior Full-Stack Developer – Filament AI\" section was cut in half between pages by creating cv-h5-for-Donload CSS class with margin-top: 120px to push \"Portfolio Frontend\" section to new page, specifically targeting it via textContent check in onclone callback. Enhanced cv.css with comma selector pattern for shared properties across cv-h5, cv-h5-nonMargin-top, and cv-h5-for-Donload classes, allowing property inheritance with selective overrides. Restructured CV page header using CSS Grid (grid-template-columns: 1fr 1fr) with ButtonWrapper using flexbox (justify-content: flex-end, align-items: start) for right-aligned download button. Fixed position calculation in multi-page logic with improved heightLeft tracking formula: position = -(imgHeight - heightLeft). Updated README.md marking PDF layout task as completed. Made 8 commits, modified 4 files with 78 insertions and 50 deletions (net +28 lines). Successfully implemented professional CV export feature with proper page breaks and conditional styling that only applies during PDF export without affecting webpage layout.",
            },
        ],
    },
    {
        title: "Portfolio Frontend",
        date: "23/10/25",
        updates: [
            {
                period: null,
                description:
                    "Focused on component modernization, UI improvements, and timeline feature implementation. Converted Footer from class-based to functional component using React hooks (useState) for state management. Replaced custom Burger component with Material-UI IconButton, implementing MenuIcon and CloseIcon with disabled ripple effect and transparent hover background. Added Ubuntu font family (Light and Medium weights) with proper @font-face declarations in index.css, applying them to Footer Nick and Mobile Menu LogoHeader. Removed particles.js from Footer for better performance. Updated README documentation by converting TODO lists to GitHub checkbox format. Fixed multiple build configuration issues in jsconfig.json by keeping baseUrl: \"src\" with ignoreDeprecations: \"6.0\". Corrected import paths in app.jsx and configureStore.js. Fixed CSS comment syntax issues in styled-components. Improved project card layouts by reducing header size, enlarging card width, and adjusting spacing. Updated Polish translations in reactComponent.config.js. Created comprehensive Timeline section with Material-UI components featuring scrollable content with custom scrollbar styling, vertical timeline with markers and descriptions, click-and-drag scrolling functionality with grab cursor, responsive design with WebkitOverflowScrolling for mobile touch support, and proper z-index handling for timeline markers. Implemented articles.js data structure to display project history chronologically. Created reusable Header component for consistent typography across timeline and project cards. Fixed styled-components specificity issues with global CSS by using && selector and !important declarations. Added margin and color styling for P component with styleP prop. Integrated timeline route in routes.js and added TimelineSection to main app component. Created comprehensive implementation report (report.md) detailing automated timeline synchronization system architecture with 6 main components, 5 implementation phases, testing strategy, and 12-16 hour development estimate. Made 46+ commits total, modified 24 files with 700 insertions and 524 deletions (net +176 lines). Successfully migrated from custom components to Material-UI, implemented new timeline feature with smooth scrolling and mobile support, and planned future automation for multi-repository timeline aggregation.",
            },
        ],
    },
    {
        title: "Portfolio Frontend",
        date: "20/10/25",
        updates: [
            {
                period: null,
                description:
                    "Created comprehensive Work Tracker Presentation component (561 lines) displaying work tracking data with multiple views including summary cards for total earned, days worked, total hours, and average daily earnings. Implemented interactive calendar grid view with visual indicators for work days, month picker navigation, year summary view with aggregated statistics, and detailed work log table showing date, hours, and earnings breakdowns by type (night, day, weekend). Added fullYear24_25.json data file (9,415 lines) containing complete work calendar data for financial year 2024-25 and integrated it into Work_Tracker.jsx component with route handling for Presentation view. Updated Menu.jsx component (304 line changes) improving navigation between ClockInOut, Calendar, and Presentation views with enhanced Material-UI drawer implementation. Experimented with Tailwind CSS but reverted back to styled-components for consistency with existing codebase architecture and better integration with Material-UI components. Updated stack.config.js adding Python and Moment.js technology logos. Made 5 commits, modified 11 files with 12,747 insertions and 307 deletions (net +12,440 lines). Successfully implemented data visualization with responsive grid layouts, interactive hover effects, color-coded visual indicators, and gradient backgrounds for improved user experience.",
            },
        ],
    },
];

