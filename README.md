# Incover-Technical-Soft-Test

## Table with Paginated Records and Image Display

This project demonstrates a table that loads data from an API endpoint and displays the records in a paginated format. Each record in the table has a "View" button that retrieves additional information from another API endpoint and displays images associated with the record.

## Approach

The project is built using React and utilizes the axios library for making HTTP requests. It fetches data from the following APIs:

- Fetching records: https://apistaging.boiibonline.ng/api/VehiclePremiumPolicyHolder/GetByFirmId?FirmId=a9a4c543-f958-4bd0-8e24-41e1d0a111e0&PageNumber={page}&PageSize={pageSize}
- Fetching additional information for a record: https://apistaging.boiibonline.ng/api/VehiclePremiumPolicyHolder/GetRegVehiclePolicyDetailsById?Id={recordId}
- The project uses React's useState hook to manage the state of the records, current page, and selected record. The useEffect hook is used to fetch data when the page changes.

- When the "View" button is clicked, the corresponding record's ID is passed to the API endpoint to retrieve additional information. The retrieved data includes an array of base64 strings representing images. These base64 strings are converted to data URLs (data:image/jpeg;base64) and stored in the state. The selected record is updated with the converted image URLs.

The project uses Tailwind CSS for styling the components, providing a clean and responsive layout.

## Setup and Usage
To run the project locally, follow these steps:

- Clone the repository: git clone <repository-url>
- Navigate to the project directory: cd <project-directory>
- Install dependencies: npm install
- Start the development server: npm start
- Open your browser and visit http://localhost:3000 to see the application.
  
##Dependencies
  
The project has the following dependencies:

- React: A JavaScript library for building user interfaces.
- axios: A promise-based HTTP client for making API requests.
- Tailwind CSS: A utility-first CSS framework for styling the components.
These dependencies are managed using npm package manager and are already included in the project's package.json file.
