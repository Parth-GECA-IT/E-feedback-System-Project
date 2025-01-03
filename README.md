# E-Feedback System

The **E-Feedback System** is a web application built using Node.js, HTML, CSS, and MySQL. It provides a platform for students to give feedback on their courses and instructors, which can be viewed by faculty members and administrators (HOD).

## ❄️ Features

- **Student Login:** Students can log in to provide feedback for their courses and instructors.
- **Faculty Login:** Faculties can view feedback related to the courses they teach.
- **HOD Login:** HODs can view all feedback from students across all courses.
- **Feedback Management:** Simplifies the process of collecting, organizing, and analyzing feedback.

## ⚙️ Technologies Used

- **Backend:** Node.js
- **Frontend:** HTML, CSS
- **Database:** MySQL

## 📂 Project Structure

```plaintext
E-Feedback/
├── public/         # Static assets (CSS, JS, images)
├── views/          # HTML templates
├── routes/         # Route definitions
├── models/         # Database models
├── controllers/    # Application logic
├── config/         # Configuration files (e.g., database connections)
└── app.js          # Main application file
```

## 📝 Setup Instructions
### Prerequisites
1. Node.js: Ensure Node.js is installed. Download here.
2. MySQL: Install MySQL for database management.
### Steps
1. Clone the repository:
    ```
    git clone https://github.com/Parth-GECA-IT/E-feedback-System-Project.git
    cd E-Feedback
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Set up the database:

    - Create a MySQL database named e_feedback.
    Import the e_feedback.sql file (included in the project) to set up tables.

4. Configure the database connection:
    - Update the database credentials in config/db.js.

5. Start the application:
   ```
   npm start
   ```

6. Access the application: 

    - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 📸 Screenshots

### Login Page
![Login Page](.//public//Screenshots//Screenshot%202025-01-02%20232917.png)

### HOD Dashboard
![HOD Dashboard](.//public//Screenshots//Screenshot%202025-01-02%20233502.png)

### Faculty Dashboard
![Login Page](.//public//Screenshots//Screenshot%202025-01-02%20233820.png)

### Student's Feedback Page
![Student's Feedback Page](.//public//Screenshots//Screenshot%202025-01-02%20234000.png)


## 🔮 Future Enhancements
- Add real-time analytics for feedback trends.
- Implement an email notification system.
- Enhance UI with modern frameworks like React or Bootstrap.

## 🪪 License
- MIT License: This project is licensed under the MIT License. See LICENSE.txt for details.

## 👥 Contributors

- **Parth Armarkar** - [LinkedIn](http://www.linkedin.com/in/parth-armarkar-052551289) | [GitHub](https://github.com/Parth-GECA-IT)

- **Dhruv Punekar** - [LinkedIn](https://www.linkedin.com/in/dhruv-punekar-a57299277/) | [GitHub](https://github.com)
- **Prakhar Singh** - [LinkedIn](https://www.linkedin.com/in/prakhar-singh-1b9614185/) | [GitHub](https://github.com/prakharsingh1923/)
