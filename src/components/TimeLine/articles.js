export const articles = [
    {
        title: "FilesConverto - JumboCard Click Detection",
        date: "22/11/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Implemented advanced click-outside-to-close pattern for JumboCard mega menu. Used useRef hook to reference root element. Added document-level pointerdown event listener in useEffect for global click tracking. Implemented el.contains(target) check to determine clicks inside/outside component. Added special exception for navigation buttons using target.closest('nav button') and target.closest('nav a') to prevent menu closure when clicking nav items. Proper cleanup with removeEventListener to prevent memory leaks. Fixed API route display issue - removed hardcoded placeholder to show actual API data. Updated articles.json with comprehensive project history from git logs covering all work from June 24 to November 22."
            }
        ]
    },
    {
        title: "FilesConverto - Case-Sensitivity & Typography",
        date: "21/11/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Refactored PremiumPrices and UploadsList for consistency. Updated README with new tasks including fixing card styling and deployment issues. Formatted tsconfig.json. Updated README task order and added navigation/login path fixes. Lowercased login and premiumPrices folders to fix 404 errors. Renamed premiumPrices to fix Vercel deployment path issue. Removed case-sensitive duplicate folder using git rm --cached. Refactored premium.css formatting. Removed uppercase PremiumPrices folder completely. Removed fixed height from JumboCard item list for better responsiveness. Implemented comprehensive typography system - created typography.css with standardized heading and body text styles using Tailwind @apply directive. Updated typography classes across 10+ components (Hero, UploadsList, cards, HowItWorks, About, Dropzone, tools/page, api/page, not-found). Adjusted JumboCard layout and padding. Added type definitions for JumboCard (JumboItem, Tools, CompressItem types). Moved type definitions to separate file and streamlined click handling. Added API data import to Header and updated JumboCard data handling. Simplified API route handling and removed placeholder documentation. Added API type definition with apiTypes property. Added comprehensive API data structure with 4 categories (Documentation, Conversion APIs, Specific APIs, Compression APIs). Removed Help link and component. Conditionally applied border to JumboCard items - removed right border from last column."
            }
        ]
    },
    {
        title: "FilesConverto - Context API Implementation",
        date: "20/11/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Major refactoring to implement React Context API. Wrapped Header and Footer with JumboCardProvider for state management. Refactored Footer for improved readability and added useJumboCard.close. Refactored Header to use context for JumboCard state management, cleaned up unused state variables. Refactored Button and GreenButton components for code consistency and added closeJumbo functionality. Created JumboCardContext and provider for centralized state management. Refactored PremiumPrices component for improved consistency. Later removed unused useJumboCard hook from Footer. Removed closeJumbo prop from GreenButton in Header. Removed closeJumbo prop from Button and GreenButton. Refactored JumboCard to implement close behavior on outside clicks with improved organization."
            }
        ]
    },
    {
        title: "FilesConverto - Global Styles Fix",
        date: "16/11/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Fixed formatting in globals.css for input and textarea styles to improve consistency."
            }
        ]
    },
    {
        title: "Portfolio - Fitness App",
        date: "14/11/25",
        updates: [
            {
                period: "Morning",
                description:
                    "Enhanced FitnessApp landing page and navigation structure. Fixed routing issues by moving Navbar inside Router component to enable proper Link functionality. Converted Bootstrap carousel to React Bootstrap Carousel component for proper JavaScript functionality with Bootstrap 4. Added all 14 fitness images from FitnessApp/img directory to carousel with automatic slide transitions, controls, and indicators disabled for slides-only display mode. Updated navbar background color to #E67E22 (vibrant orange). Restructured FitnessApp layout to achieve full-screen width for both navbar and carousel by removing container restrictions and wrapping only inner content. Converted styled-components (Wrapper, MainWrapper, RightWrapper, LeftWrapper) to standard div elements in FitnessApp.jsx for cleaner code structure. Created comprehensive LandingPage/Carousel.jsx component with proper React Bootstrap integration including 14 Carousel.Item components with descriptive alt text. Modified navbar-component.jsx removing wrapper div and applying inline backgroundColor style. Updated Directory.md to reflect complete project structure including FitnessApp with api/, components/, and img/ directories, Register_Login, Work_Tracker, TimeLine components, and all missing configuration files, fonts, and image directories (excluding node_modules as requested). Made 15+ commits, modified 4 files. Successfully resolved Bootstrap JavaScript dependency issues, implemented fully functional carousel with automatic transitions, and achieved responsive full-width layout for enhanced UX."
            }
        ]
    },
    {
        title: "Portfolio Server",
        date: "13/11/25",
        updates: [
            {
                period: "Morning",
                description:
                    "FitnessApp Integration: Added new FitnessApp route with MongoDB integration for exercise and user management. Created Mongoose models for users (username field with unique constraint, timestamps) and exercises. Established routes for user and exercise CRUD operations. Added API documentation in api_routes.md. Configured MongoDB connection with proper error handling and automatic index management (drops old indexes on startup to prevent conflicts)."
            },
            {
                period: "Afternoon",
                description:
                    "FitnessApp Refactoring: Consolidated FitnessApp routes into a single index file structure, removing separate server.js. Refactored route handlers to use consolidated approach. Added CORS configuration updates to allow localhost:3000 and Vercel server access. Fixed MongoDB connection URI encoding issues and improved error handling for malformed JSON requests. Added username validation in user creation route to ensure data integrity."
            },
            {
                period: "Evening",
                description:
                    "CORS Configuration Updates: Iteratively refined CORS configuration in server.js to dynamically allow Vercel preview and production deployments. Updated allowed origins to include multiple frontend domains. Changed from indexOf to includes method for cleaner code. Added logic to allow all .vercel.app subdomains dynamically. Resolved 'Access-Control-Allow-Origin' header issues preventing frontend-backend communication across different Vercel deployment URLs."
            },
            {
                period: "Night",
                description:
                    "Debugging and Testing: Diagnosed MongoDB connection timeout issues on Vercel (10-second buffering timeout). Verified local endpoints returning 200 responses with proper JSON data. Tested API with Insomnia confirming server-side functionality. Identified CORS as root cause of frontend errors when origin didn't match allowed list. Updated timeline.json with comprehensive session documentation. Confirmed successful local development with FitnessApp returning user data from MongoDB Atlas."
            }
        ]
    },
    {
        title: "FilesConverto - Cleanup & Testing Fix",
        date: "30/10/25 - 04/11/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "General updates and added tests. Removed duplicate Hero.test 2.tsx file that was causing VS Code to overheat."
            }
        ]
    },
    {
        title: "FilesConverto - Mobile Menu & Routing",
        date: "18/10/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Added sample files. Created new pages for routing (API, Tools, Compress). Added CSS types. Removed getBaseUrl and added closeMenu function. Set 404 page for incomplete features. Wrapped Links in buttons for onClick functionality to close mobile menu. Removed handleRetry function. Reduced text truncation. Added random conversion failure simulation. Added validation for uploaded files and selected formats. Fixed responsive web design. Updated Frontend TODO list. Updated timeline documentation."
            }
        ]
    },
    {
        title: "FilesConverto - UI Polish & Convert All",
        date: "16/10/25 - 17/10/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Reduced width on medium devices. Reduced header sizes. Centered dropdown text. Added auto-close on dropdown selection. Removed hover effect from format change button. Removed blue button with chosen format. Moved file size to right of filename. Updated timeline documentation. Created update-timeline.js script for automated README updates via 'npm run timeline'. Removed 'Processing...' text. Updated component to select one or multiple files. Updated frontend logic. Added mock conversion progress bar logic. Updated types. Disabled 'Convert' button when targetFormat is empty. Removed single items from DOM. Added 'Convert All' button with handleConvertAll function. Added disabled type and prop. Added disabled styling. Created checkIfMultiUploaded validation function."
            }
        ]
    },
    {
        title: "FilesConverto - About Section & RWD",
        date: "13/10/25 - 16/10/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Added About section explaining services. Updated timeline documentation. Fixed responsive design for logo. Removed large font types and added screen width breakpoints. Reduced padding between child elements. Changed sizes and border colors. Made components full-screen for all devices. Added responsive width. Uncommented production code and removed commented-out code. Removed unused types."
            }
        ]
    },
    {
        title: "FilesConverto - Dropdown & Format Selection",
        date: "11/10/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Added onLeave() handler. Created helper functions to open dropdown on hover. Added max-width constraints. Added new prop types. Removed optional props that are essential. Added labelText property. Reduced vertical padding. Added dropdown and 'change format for all' functionality. Updated onLeave behavior and added optional prop. Added TODO items for multi-file upload and conversion. Assigned full width to elements. Added onMouseLeave event. Enhanced dropdown with onLeave and onSelectFormat functions. Commented out code for development. Fixed wording in TODO comments. Updated mockUploads with fileSize data."
            }
        ]
    },
    {
        title: "FilesConverto - Helper Functions & Samples",
        date: "10/10/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Added sample files for testing. Created skills-tools.md documenting technologies used. Added const file for configuration. Changed status to 'uploaded'. Removed --turbopack flag. Added formatting and fileSize property. Updated helper functions. Added return size with KB/MB formatting for file sizes."
            }
        ]
    },
    {
        title: "FilesConverto - Conversion Status & Types",
        date: "05/09/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Added 'converting' status. Changed default status to 'failed' for testing. Renamed component to UploadList and refactored state sync with IndexedDB. Added new upload type. Moved imports to top of files. Fixed Vercel deployment failure. Updated README about the fix. Removed duplicate files."
            }
        ]
    },
    {
        title: "FilesConverto - Upload List Improvements",
        date: "19/08/25 - 21/08/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Added ternary to display UploadList when files are uploaded. Moved files and added DropDown component. Refactored and updated components. Added getFileExt helper function."
            }
        ]
    },
    {
        title: "FilesConverto - IndexedDB Integration",
        date: "18/08/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Added packages for IndexedDB. Changed tsconfig to 'preserve' mode for app functionality. Added helper functions to manipulate IndexedDB. Added files to mock setup. Updated Dropzone and removed unused code. Updated Hero with useEffect and useState. Deleted unused types file. Updated upload.types definitions. Added removeFile functionality."
            }
        ]
    },
    {
        title: "FilesConverto - Testing Setup",
        date: "16/08/25 - 17/08/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Added SKILLS_ASSESSMENT.MD documenting job readiness. Set up Jest testing packages and created basic Hero tests. Updated configuration to run tests without crashes due to version conflicts. Updated setup to avoid Link warnings in terminal. Fixed accessibility issues. Added additional tests and jest-axe for accessibility testing. Split Hero into smaller components with proper types."
            }
        ]
    },
    {
        title: "FilesConverto - Upload System & IndexedDB",
        date: "14/08/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Wrapped components in MainPage. Updated Footer component. Added and updated GreenButton. Created mockUploads data structure. Formatted and updated multiple components. Created new UploadsList component. Reduced left/right padding. Added text and background colors. Created upload.types.ts with proper TypeScript definitions. Removed unused/duplicated types. Moved mockUploads to store directory. Renamed to data.ts (removed .tsx extension as file contains only data). Updated mockUploads import path. Reduced bottom padding across components. Added Victor Mono static fonts. Removed AI-generated markdown file. Added curly braces for future ternary operations."
            }
        ]
    },
    {
        title: "FilesConverto - Secured Payments & Logos",
        date: "11/08/25 - 14/08/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Reduced li elements using map function. Rephrased component text. Moved SVGs into assets directory. Removed formats and settings files. Added SecuredPayments component with payment provider logos. Moved Hero component into Main directory. Created UsedBy component with company logos (Microsoft, Amazon, Meta, Airbnb, etc.). Moved SVGs into new organized directories. Removed dark theme font color. Added H3 headers and adjusted opacity. Updated component text throughout."
            }
        ]
    },
    {
        title: "FilesConverto - Premium Features Enhancement",
        date: "03/08/25 - 09/08/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Added WORD format support. Updated Card component. Added green check icons. Removed unused files. Reduced length of unlimited perk description and added infinity icon. Added width to card wrapper. Moved public folder to root directory. Added line spacing and margin bottom. Made wrapper and cards responsive. Removed unused files and renamed infinity.svg. Changed GitHub icon to Facebook. Reduced card wrapper width. Added new routes. Implemented primary green hover effect. Added padding to main page wrapper. Created FairPricing.tsx and InPaidPlan.tsx components."
            }
        ]
    },
    {
        title: "FilesConverto - Planning & Cleanup",
        date: "26/07/25 - 29/07/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Removed duplicate body styling. Added development plan documentation. Removed pdf-converter from project as conversion will be handled by external server. Fixed double slash route bug. Added UI design suggestions. Removed local pdf-converter in favor of external library."
            }
        ]
    },
    {
        title: "FilesConverto - Dependencies & API Routes",
        date: "24/07/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Added pdf-docx dependencies and keywords. Updated package.json with new packages. Updated API to local Next.js route. Fixed version conflicts causing errors. Moved converter directory into lib directory. Added multiple packages and verified which ones are still needed. Completed bulk changes across project structure."
            }
        ]
    },
    {
        title: "FilesConverto - Premium Pricing Page",
        date: "22/07/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Created main page with wrapper component. Updated package-lock. Capitalized route names. Created PricePlanCard component and imported it. Changed routing naming - removed separate pricing route to consolidate under 'Go Premium'. Formatting improvements across components."
            }
        ]
    },
    {
        title: "FilesConverto - Data Structure & Types",
        date: "04/07/25 - 20/07/25",
        updates: [
            {
                period: "Multiple Sessions",
                description:
                    "Updated tsconfig and changed state name to 'data' for clarity. Reduced Menu Links by implementing loops. Added getBaseUrl helper hook for routes and imported data for hrefs. Converted array types into more readable and clear TypeScript definitions. Created baseURL helper hook. Renamed formats file to data.tsx. Changed file types to .tsx. Added type checks for state and error handling. Added fulfillment handler/success callback to uploadFile hook. Added error types and updated error handler."
            }
        ]
    },
    {
        title: "FilesConverto - File Upload Foundation",
        date: "01/07/25 - 03/07/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Formatted files and added popular document formats array integrated into FileUpload component. Learned how Next.js handles front-end/back-end communication via Axios and routes. Explored npm packages for PDF conversion and decided to use Python packages instead. Created samples directory and custom useFileUpload hook. Imported the hook and installed Axios for API communication. Updated packages and dependencies."
            }
        ]
    },
    {
        title: "FilesConverto - Login & Navigation",
        date: "29/06/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Created Login page with dedicated routing and layout structure. Removed separate login layout to use main layout across pages. Moved page-level elements to main layout for consistency. Added company name to store, header, and footer. Created login section with login.css. Replaced inline SVGs with imported ones from public directory. Restored access link with updated text. Reduced margins and improved formatting."
            }
        ]
    },
    {
        title: "FilesConverto - Component Organization",
        date: "27/06/25 - 29/06/25",
        updates: [
            {
                period: "Multiple Days",
                description:
                    "Updated README.md with project documentation. Separated Hero and Footer components from page.tsx for better modularity. Converted components to function components. Removed 'src' from tsconfig. Moved Button component to ui directory. Added FileFormat component with static data stored in central 'store'. Merged branches and cleaned up extra files."
            }
        ]
    },
    {
        title: "FilesConverto - Foundation & Routing",
        date: "26/06/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Restored original naming for pages.tsx. Added Header component with logo and fixed Tailwind CSS configuration issues. Moved CSS files to styles folder and updated import paths. Restructured Menu component for reusability across desktop and mobile versions. Removed Next.js template fonts."
            }
        ]
    },
    {
        title: "FilesConverto - Initial Setup",
        date: "24/06/25",
        updates: [
            {
                period: "Full Day",
                description:
                    "Project initialization with Next.js 13+ using create-next-app. Set up foundational project structure with App Router. Configured initial git repository and first commit."
            }
        ]
    }
];

