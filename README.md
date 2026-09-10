\# QTrip Dynamic



QTrip Dynamic is a responsive travel booking web application that allows users to explore cities, browse available adventures, view adventure details, and make reservations.



The application uses a JavaScript-based frontend with a Node.js/Express backend and REST API integration to dynamically load and manage travel data.



\## Features



\* Browse available travel destinations and adventures

\* Search adventures by city

\* View detailed information about individual adventures

\* Filter and explore adventure listings

\* Make and view reservations

\* Dynamically load data using REST APIs

\* Responsive design for different screen sizes

\* Reusable JavaScript modules for different application pages



\## Tech Stack



\### Frontend



\* HTML5

\* CSS3

\* JavaScript (ES6+)

\* Bootstrap 5

\* DOM Manipulation

\* JavaScript ES Modules

\* Fetch API



\### Backend



\* Node.js

\* Express.js

\* LowDB

\* REST APIs

\* CORS



\## Project Structure



```text

qtrip-dynamic/

│

├── backend/

│   ├── db.json

│   ├── package.json

│   ├── server.js

│   └── random\_data.js

│

├── frontend/

│   ├── css/

│   │   └── styles.css

│   │

│   ├── modules/

│   │   ├── landing\_page.js

│   │   ├── adventures\_page.js

│   │   ├── adventure\_details\_page.js

│   │   └── reservation\_page.js

│   │

│   ├── pages/

│   │   └── adventures/

│   │

│   ├── \_\_tests\_\_/

│   └── index.html

│

└── README.md

```



\## API Integration



The frontend communicates with the backend through REST API endpoints using the JavaScript Fetch API.



Examples of API operations include:



\* Fetching available cities

\* Fetching adventures for a selected city

\* Fetching adventure details

\* Creating new reservations

\* Retrieving existing reservations



This allows the UI to display and update application data dynamically instead of relying only on static HTML content.



\## How to Run Locally



\### 1. Clone the repository



```bash

git clone https://github.com/priya1165/qtrip-dynamic.git

cd qtrip-dynamic

```



\### 2. Start the backend



Open a terminal in the project folder and run:



```bash

cd backend

npm install

npm start

```



The backend server will start using the configuration defined in `backend/server.js`.



\### 3. Run the frontend



Open the `frontend` folder in VS Code and use a local development server such as the VS Code Live Server extension.



Open:



```text

frontend/index.html

```



The frontend communicates with the running backend through the configured API endpoint.



\## What I Worked On



\* Built responsive pages using HTML, CSS, Bootstrap, and JavaScript

\* Implemented dynamic rendering of travel and adventure data

\* Integrated REST APIs using the Fetch API

\* Implemented search and filtering functionality

\* Developed adventure detail and reservation flows

\* Used modular JavaScript files to organize page-specific functionality

\* Worked with backend APIs built using Node.js and Express.js



\## Future Improvements



\* Add user authentication

\* Add improved form validation

\* Add sorting and advanced filtering

\* Improve reservation management

\* Add automated deployment for frontend and backend



\## Author



\*\*Priya Mishra\*\*



Software Developer | Full Stack | React · Node.js · MongoDB



GitHub: https://github.com/priya1165



