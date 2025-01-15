# Pin and Customer Management Application

This project is a full-stack application for managing pins and customers. It includes features such as adding customers and pins, viewing pin details, and managing collaborators. The front-end is built using Angular, while the back-end is powered by Node.js.

## Features

- **Add Customers**: Add new customers using a modal interface.
- **Add Pins**: Create new pins with a form, including validation.
- **Collaborator Management**: Select and save collaborators for each pin.
- **Routing**: Configured routing with the pin list as the default home page.
- **Responsive UI**: Built with ng-bootstrap for modal and UI interactions.

## Technology Stack

- **Front-end**: Angular with ng-bootstrap, ng2-file-upload, and ngx-select-ex
- **Back-end**: Node.js with Express.js
- **Database**: JSON files for simplicity (can be upgraded to a database)

## Installation

1. Clone the repository:
   ```bash
   git clone [GitHub Repository URL]
   ```

````

2. Navigate to the project directory:
   ```bash
   cd [project-directory]
   ```
3. Install dependencies for the front-end:
   ```bash
   cd frontend
   npm install
   ```
4. Install dependencies for the back-end:
   ```bash
   cd server
   npm install
   ```
5. Start the development server:
   - For the front-end:
     ```bash
     ng serve
     ```
   - For the back-end:
     ```bash
     node index.js
     ```

## Usage

- Access the application at `http://localhost:4200`.
- Add customers and pins using the provided forms and modals.
- Manage collaborators directly from the pin creation form.

## Commit Log Highlights

The project includes several meaningful commits:

- **Set up architecture**: Added modules and routing for customers and pins.
- **Add Customer feature**: Functional modal for adding customers using ng-bootstrap.
- **Pin creation**: Added service and modal for creating pins with validations.
- **Backend schema updates**: Adjusted pin schema to save collaborator details.

## Demonstration

Watch the demonstration video here: [(https://www.feedspace.io/vf/7YpGWL)]

### Author

Aniket Modkar
aniketmodker24@gmail.com

```

```
````
