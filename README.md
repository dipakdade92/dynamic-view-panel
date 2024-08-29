# Dynamic View Panel React App
Dynamic view panel app using react micro front-end


This project is composed of three micro frontend applications:
**1. Main App**

    Purpose: Acts as the dynamic view panel that loads and displays other micro frontend applications dynamically.

**2. mf-1 App**

    Purpose: Provides input forms for registration and login.

**3. mf-2 App**

    Purpose: Displays registered user data.

**Installation**

For all three applications, follow these steps:

    Navigate to each app's directory (main-app, mf-1, mf-2).
    Run the following commands:

**bash**

  $ npm install

  $ npm start

This will install the necessary dependencies and start each application.
Running the Applications

    Start each application in its respective directory.
    The main app will dynamically load and display the mf-1 and mf-2 applications.

**Technology Stack**

    React: Used for building the UI components.
    Redux: State management for communication between micro frontends.
    Webpack Module Federation: Used for micro frontend architecture.
