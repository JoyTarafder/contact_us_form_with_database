# Contact Management Web Application

A simple web application that allows users to submit contact details through a form and displays the data in a list format on a separate page. The list page includes options to edit entries and process their statuses. This project uses HTML, Tailwind CSS, JavaScript, Node.js, Express, and MongoDB for backend storage.

---

## Features

1. **Contact Us Form:**
   - Collects user information including name, email, phone, subject, and message.
   - Validates input before submission.
   - Submits data to the backend for storage.

2. **Data List Page:**
   - Displays submitted data in a table format.
   - Includes an "Edit" button and a "Process" dropdown menu for each entry.

3. **Backend:**
   - Powered by Node.js and Express.
   - Stores contact data in MongoDB using Mongoose.

4. **Responsive Design:**
   - Styled with Tailwind CSS for a clean and professional look.

---

## Technologies Used

- **Frontend:** HTML, Tailwind CSS, JavaScript
- **Backend:** Node.js
- **Database:** MongoDB
- **Additional Tools:** Mongoose (MongoDB Object Modeling)

---

## Project Structure

```plaintext
project/
├── index.html        # Contact Us form page
├── list.html         # Data list page
├── app.js            # JavaScript logic for form submission and data rendering
├── server.js         # Backend server code
├── styles.css        # Optional custom Tailwind CSS overrides
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```
---

## Setup Instructions

### Prerequisites
- **Node.js** installed on your system.
- **MongoDB server** running locally or on a remote host.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JoyTarafder/contact_us_form_with_database.git
   cd project
   ```

2. **Install dependencies:**:
   ```bash
   npm install
   ```
3. **Start the MongoDB server:**:
   ```bash
   mongod
   ```
3. **Start the MongoDB server:**:
   ```bash
   mongod
   ```
3. **Run the backend server:**:
   ```bash
   node server.js
   ```
## Future Improvements
1. Add form validation for improved user experience.
2. Implement edit functionality to update existing entries.
3. Enable process tracking with dynamic updates in the database.
4. Deploy the application online using services like Heroku, Vercel, or AWS.
