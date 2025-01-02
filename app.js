const express = require('express');

const ejs = require('ejs');
const bodyParser = require('body-parser');
const connection = require('./connectdb');


const app = express();

const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render('login');
})

app.get("/hod", (req, res) => {
  const sqlQuery = `
  SELECT
    COUNT(CASE WHEN question1_rating_label = 'Below Average' THEN 1 END) AS q1_below_average,
    COUNT(CASE WHEN question1_rating_label = 'Average' THEN 1 END) AS q1_average,
    COUNT(CASE WHEN question1_rating_label = 'Good' THEN 1 END) AS q1_good,
    COUNT(CASE WHEN question1_rating_label = 'Very Good' THEN 1 END) AS q1_very_good,
    COUNT(CASE WHEN question1_rating_label = 'Excellent' THEN 1 END) AS q1_excellent,
    
    COUNT(CASE WHEN question2_rating_label = 'Below Average' THEN 1 END) AS q2_below_average,
    COUNT(CASE WHEN question2_rating_label = 'Average' THEN 1 END) AS q2_average,
    COUNT(CASE WHEN question2_rating_label = 'Good' THEN 1 END) AS q2_good,
    COUNT(CASE WHEN question2_rating_label = 'Very Good' THEN 1 END) AS q2_very_good,
    COUNT(CASE WHEN question2_rating_label = 'Excellent' THEN 1 END) AS q2_excellent,
    
    COUNT(CASE WHEN question3_rating_label = 'Below Average' THEN 1 END) AS q3_below_average,
    COUNT(CASE WHEN question3_rating_label = 'Average' THEN 1 END) AS q3_average,
    COUNT(CASE WHEN question3_rating_label = 'Good' THEN 1 END) AS q3_good,
    COUNT(CASE WHEN question3_rating_label = 'Very Good' THEN 1 END) AS q3_very_good,
    COUNT(CASE WHEN question3_rating_label = 'Excellent' THEN 1 END) AS q3_excellent,
    
    COUNT(CASE WHEN question4_rating_label = 'Below Average' THEN 1 END) AS q4_below_average,
    COUNT(CASE WHEN question4_rating_label = 'Average' THEN 1 END) AS q4_average,
    COUNT(CASE WHEN question4_rating_label = 'Good' THEN 1 END) AS q4_good,
    COUNT(CASE WHEN question4_rating_label = 'Very Good' THEN 1 END) AS q4_very_good,
    COUNT(CASE WHEN question4_rating_label = 'Excellent' THEN 1 END) AS q4_excellent,
    
    COUNT(CASE WHEN question5_rating_label = 'Below Average' THEN 1 END) AS q5_below_average,
    COUNT(CASE WHEN question5_rating_label = 'Average' THEN 1 END) AS q5_average,
    COUNT(CASE WHEN question5_rating_label = 'Good' THEN 1 END) AS q5_good,
    COUNT(CASE WHEN question5_rating_label = 'Very Good' THEN 1 END) AS q5_very_good,
    COUNT(CASE WHEN question5_rating_label = 'Excellent' THEN 1 END) AS q5_excellent,
    
    COUNT(CASE WHEN question6_rating_label = 'Below Average' THEN 1 END) AS q6_below_average,
    COUNT(CASE WHEN question6_rating_label = 'Average' THEN 1 END) AS q6_average,
    COUNT(CASE WHEN question6_rating_label = 'Good' THEN 1 END) AS q6_good,
    COUNT(CASE WHEN question6_rating_label = 'Very Good' THEN 1 END) AS q6_very_good,
    COUNT(CASE WHEN question6_rating_label = 'Excellent' THEN 1 END) AS q6_excellent,
    
    COUNT(CASE WHEN question7_rating_label = 'Below Average' THEN 1 END) AS q7_below_average,
    COUNT(CASE WHEN question7_rating_label = 'Average' THEN 1 END) AS q7_average,
    COUNT(CASE WHEN question7_rating_label = 'Good' THEN 1 END) AS q7_good,
    COUNT(CASE WHEN question7_rating_label = 'Very Good' THEN 1 END) AS q7_very_good,
    COUNT(CASE WHEN question7_rating_label = 'Excellent' THEN 1 END) AS q7_excellent,
    
    COUNT(CASE WHEN question8_rating_label = 'Below Average' THEN 1 END) AS q8_below_average,
    COUNT(CASE WHEN question8_rating_label = 'Average' THEN 1 END) AS q8_average,
    COUNT(CASE WHEN question8_rating_label = 'Good' THEN 1 END) AS q8_good,
    COUNT(CASE WHEN question8_rating_label = 'Very Good' THEN 1 END) AS q8_very_good,
    COUNT(CASE WHEN question8_rating_label = 'Excellent' THEN 1 END) AS q8_excellent,
    
    COUNT(CASE WHEN question9_rating_label = 'Below Average' THEN 1 END) AS q9_below_average,
    COUNT(CASE WHEN question9_rating_label = 'Average' THEN 1 END) AS q9_average,
    COUNT(CASE WHEN question9_rating_label = 'Good' THEN 1 END) AS q9_good,
    COUNT(CASE WHEN question9_rating_label = 'Very Good' THEN 1 END) AS q9_very_good,
    COUNT(CASE WHEN question9_rating_label = 'Excellent' THEN 1 END) AS q9_excellent,
    
    COUNT(CASE WHEN question10_rating_label = 'Below Average' THEN 1 END) AS q10_below_average,
    COUNT(CASE WHEN question10_rating_label = 'Average' THEN 1 END) AS q10_average,
    COUNT(CASE WHEN question10_rating_label = 'Good' THEN 1 END) AS q10_good,
    COUNT(CASE WHEN question10_rating_label = 'Very Good' THEN 1 END) AS q10_very_good,
    COUNT(CASE WHEN question10_rating_label = 'Excellent' THEN 1 END) AS q10_excellent
  FROM
    Feedback
  WHERE
    course = '${req.body.course}' AND faculty ='${req.body.faculty}'
`;

  // Execute the SQL query
  connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }

    res.render('hod', { applications: results });


  })
})

app.get("/faculty", (req, res) => {


  const sqlQuery = `
    SELECT
    COUNT(CASE WHEN question1_rating_label = 'Below Average' THEN 1 END) AS q1_below_average,
    COUNT(CASE WHEN question1_rating_label = 'Average' THEN 1 END) AS q1_average,
    COUNT(CASE WHEN question1_rating_label = 'Good' THEN 1 END) AS q1_good,
    COUNT(CASE WHEN question1_rating_label = 'Very Good' THEN 1 END) AS q1_very_good,
    COUNT(CASE WHEN question1_rating_label = 'Excellent' THEN 1 END) AS q1_excellent,
    
    COUNT(CASE WHEN question2_rating_label = 'Below Average' THEN 1 END) AS q2_below_average,
    COUNT(CASE WHEN question2_rating_label = 'Average' THEN 1 END) AS q2_average,
    COUNT(CASE WHEN question2_rating_label = 'Good' THEN 1 END) AS q2_good,
    COUNT(CASE WHEN question2_rating_label = 'Very Good' THEN 1 END) AS q2_very_good,
    COUNT(CASE WHEN question2_rating_label = 'Excellent' THEN 1 END) AS q2_excellent,
    
    COUNT(CASE WHEN question3_rating_label = 'Below Average' THEN 1 END) AS q3_below_average,
    COUNT(CASE WHEN question3_rating_label = 'Average' THEN 1 END) AS q3_average,
    COUNT(CASE WHEN question3_rating_label = 'Good' THEN 1 END) AS q3_good,
    COUNT(CASE WHEN question3_rating_label = 'Very Good' THEN 1 END) AS q3_very_good,
    COUNT(CASE WHEN question3_rating_label = 'Excellent' THEN 1 END) AS q3_excellent,
    
    COUNT(CASE WHEN question4_rating_label = 'Below Average' THEN 1 END) AS q4_below_average,
    COUNT(CASE WHEN question4_rating_label = 'Average' THEN 1 END) AS q4_average,
    COUNT(CASE WHEN question4_rating_label = 'Good' THEN 1 END) AS q4_good,
    COUNT(CASE WHEN question4_rating_label = 'Very Good' THEN 1 END) AS q4_very_good,
    COUNT(CASE WHEN question4_rating_label = 'Excellent' THEN 1 END) AS q4_excellent,
    
    COUNT(CASE WHEN question5_rating_label = 'Below Average' THEN 1 END) AS q5_below_average,
    COUNT(CASE WHEN question5_rating_label = 'Average' THEN 1 END) AS q5_average,
    COUNT(CASE WHEN question5_rating_label = 'Good' THEN 1 END) AS q5_good,
    COUNT(CASE WHEN question5_rating_label = 'Very Good' THEN 1 END) AS q5_very_good,
    COUNT(CASE WHEN question5_rating_label = 'Excellent' THEN 1 END) AS q5_excellent,
    
    COUNT(CASE WHEN question6_rating_label = 'Below Average' THEN 1 END) AS q6_below_average,
    COUNT(CASE WHEN question6_rating_label = 'Average' THEN 1 END) AS q6_average,
    COUNT(CASE WHEN question6_rating_label = 'Good' THEN 1 END) AS q6_good,
    COUNT(CASE WHEN question6_rating_label = 'Very Good' THEN 1 END) AS q6_very_good,
    COUNT(CASE WHEN question6_rating_label = 'Excellent' THEN 1 END) AS q6_excellent,
    
    COUNT(CASE WHEN question7_rating_label = 'Below Average' THEN 1 END) AS q7_below_average,
    COUNT(CASE WHEN question7_rating_label = 'Average' THEN 1 END) AS q7_average,
    COUNT(CASE WHEN question7_rating_label = 'Good' THEN 1 END) AS q7_good,
    COUNT(CASE WHEN question7_rating_label = 'Very Good' THEN 1 END) AS q7_very_good,
    COUNT(CASE WHEN question7_rating_label = 'Excellent' THEN 1 END) AS q7_excellent,
    
    COUNT(CASE WHEN question8_rating_label = 'Below Average' THEN 1 END) AS q8_below_average,
    COUNT(CASE WHEN question8_rating_label = 'Average' THEN 1 END) AS q8_average,
    COUNT(CASE WHEN question8_rating_label = 'Good' THEN 1 END) AS q8_good,
    COUNT(CASE WHEN question8_rating_label = 'Very Good' THEN 1 END) AS q8_very_good,
    COUNT(CASE WHEN question8_rating_label = 'Excellent' THEN 1 END) AS q8_excellent,
    
    COUNT(CASE WHEN question9_rating_label = 'Below Average' THEN 1 END) AS q9_below_average,
    COUNT(CASE WHEN question9_rating_label = 'Average' THEN 1 END) AS q9_average,
    COUNT(CASE WHEN question9_rating_label = 'Good' THEN 1 END) AS q9_good,
    COUNT(CASE WHEN question9_rating_label = 'Very Good' THEN 1 END) AS q9_very_good,
    COUNT(CASE WHEN question9_rating_label = 'Excellent' THEN 1 END) AS q9_excellent,
    
    COUNT(CASE WHEN question10_rating_label = 'Below Average' THEN 1 END) AS q10_below_average,
    COUNT(CASE WHEN question10_rating_label = 'Average' THEN 1 END) AS q10_average,
    COUNT(CASE WHEN question10_rating_label = 'Good' THEN 1 END) AS q10_good,
    COUNT(CASE WHEN question10_rating_label = 'Very Good' THEN 1 END) AS q10_very_good,
    COUNT(CASE WHEN question10_rating_label = 'Excellent' THEN 1 END) AS q10_excellent
FROM
    Feedback
WHERE
    course = 'ITPC-3003 Machine Learning'
`;

  // Execute the SQL query
  connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }

    res.render('faculty', { applications: results });

  })
});


app.get("/student_login", (req, res) => {
  res.render('student_login');
})

app.post("/student_login", (req, res) => {
  const { email, password } = req.body;

  // Query to check if the email and password match
  const sqlQuery = `
      SELECT *
      FROM Students
      WHERE email = ? AND password = ?
    `;

  connection.query(sqlQuery, [email, password], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Check if any rows are returned
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.render("student");
    }
  });
})

app.get("/hod_login", (req, res) => {
  res.render('hod_login');
})


app.post("/hod_login", (req, res) => {
  const { email, password } = req.body;

  // Query to check if the email and password match
  const sqlQuery = `
      SELECT *
      FROM Faculty
      WHERE email = ? AND password = ?
    `;

  connection.query(sqlQuery, [email, password], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Check if any rows are returned
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.redirect("/hod");
    }
  });
})


app.get("/faculty_login", (req, res) => {
  res.render('faculty_login');
})

app.post("/faculty_login", (req, res) => {
  const { email, password } = req.body;

  // Query to check if the email and password match
  const sqlQuery = `
      SELECT *
      FROM Faculty
      WHERE email = ? AND password = ?
    `;

  connection.query(sqlQuery, [email, password], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Check if any rows are returned
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.redirect("/faculty");
    }
  });
})





app.get("/option", (req, res) => {
  res.render('option');
})
app.get("/student", (req, res) => {
  res.render('student');
})



app.listen(port, () => {
  console.log(`server started ${port} http://localhost:3000/`);
})


// post

app.post("/feedback_submit", (req, res) => {


  const feedbackData = req.body;


  const sql = `
        INSERT INTO Feedback (
            student_id,
            faculty,
            course,
          question1_rating_label,
          question2_rating_label,
          question3_rating_label,
          question4_rating_label,
          question5_rating_label,
          question6_rating_label,
          question7_rating_label,
          question8_rating_label,
          question9_rating_label,
          question10_rating_label
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
      `;

  connection.query(sql, [2,
    feedbackData.faculty,
    feedbackData.course,
    feedbackData.q1,
    feedbackData.q2,
    feedbackData.q3,
    feedbackData.q4,
    feedbackData.q5,
    feedbackData.q6,
    feedbackData.q7,
    feedbackData.q8,
    feedbackData.q9,
    feedbackData.q10
  ], (err, result) => {
    if (err) {
      console.log('Error inserting feedback:', err);
    } else {
      res.send('Feedback inserted successfully.');
    }
  });

})

app.post("/hod_feedback_search", (req, res) => {


  const sqlQuery = `
        SELECT
        COUNT(CASE WHEN question1_rating_label = 'Below Average' THEN 1 END) AS q1_below_average,
        COUNT(CASE WHEN question1_rating_label = 'Average' THEN 1 END) AS q1_average,
        COUNT(CASE WHEN question1_rating_label = 'Good' THEN 1 END) AS q1_good,
        COUNT(CASE WHEN question1_rating_label = 'Very Good' THEN 1 END) AS q1_very_good,
        COUNT(CASE WHEN question1_rating_label = 'Excellent' THEN 1 END) AS q1_excellent,
        
        COUNT(CASE WHEN question2_rating_label = 'Below Average' THEN 1 END) AS q2_below_average,
        COUNT(CASE WHEN question2_rating_label = 'Average' THEN 1 END) AS q2_average,
        COUNT(CASE WHEN question2_rating_label = 'Good' THEN 1 END) AS q2_good,
        COUNT(CASE WHEN question2_rating_label = 'Very Good' THEN 1 END) AS q2_very_good,
        COUNT(CASE WHEN question2_rating_label = 'Excellent' THEN 1 END) AS q2_excellent,
        
        COUNT(CASE WHEN question3_rating_label = 'Below Average' THEN 1 END) AS q3_below_average,
        COUNT(CASE WHEN question3_rating_label = 'Average' THEN 1 END) AS q3_average,
        COUNT(CASE WHEN question3_rating_label = 'Good' THEN 1 END) AS q3_good,
        COUNT(CASE WHEN question3_rating_label = 'Very Good' THEN 1 END) AS q3_very_good,
        COUNT(CASE WHEN question3_rating_label = 'Excellent' THEN 1 END) AS q3_excellent,
        
        COUNT(CASE WHEN question4_rating_label = 'Below Average' THEN 1 END) AS q4_below_average,
        COUNT(CASE WHEN question4_rating_label = 'Average' THEN 1 END) AS q4_average,
        COUNT(CASE WHEN question4_rating_label = 'Good' THEN 1 END) AS q4_good,
        COUNT(CASE WHEN question4_rating_label = 'Very Good' THEN 1 END) AS q4_very_good,
        COUNT(CASE WHEN question4_rating_label = 'Excellent' THEN 1 END) AS q4_excellent,
        
        COUNT(CASE WHEN question5_rating_label = 'Below Average' THEN 1 END) AS q5_below_average,
        COUNT(CASE WHEN question5_rating_label = 'Average' THEN 1 END) AS q5_average,
        COUNT(CASE WHEN question5_rating_label = 'Good' THEN 1 END) AS q5_good,
        COUNT(CASE WHEN question5_rating_label = 'Very Good' THEN 1 END) AS q5_very_good,
        COUNT(CASE WHEN question5_rating_label = 'Excellent' THEN 1 END) AS q5_excellent,
        
        COUNT(CASE WHEN question6_rating_label = 'Below Average' THEN 1 END) AS q6_below_average,
        COUNT(CASE WHEN question6_rating_label = 'Average' THEN 1 END) AS q6_average,
        COUNT(CASE WHEN question6_rating_label = 'Good' THEN 1 END) AS q6_good,
        COUNT(CASE WHEN question6_rating_label = 'Very Good' THEN 1 END) AS q6_very_good,
        COUNT(CASE WHEN question6_rating_label = 'Excellent' THEN 1 END) AS q6_excellent,
        
        COUNT(CASE WHEN question7_rating_label = 'Below Average' THEN 1 END) AS q7_below_average,
        COUNT(CASE WHEN question7_rating_label = 'Average' THEN 1 END) AS q7_average,
        COUNT(CASE WHEN question7_rating_label = 'Good' THEN 1 END) AS q7_good,
        COUNT(CASE WHEN question7_rating_label = 'Very Good' THEN 1 END) AS q7_very_good,
        COUNT(CASE WHEN question7_rating_label = 'Excellent' THEN 1 END) AS q7_excellent,
        
        COUNT(CASE WHEN question8_rating_label = 'Below Average' THEN 1 END) AS q8_below_average,
        COUNT(CASE WHEN question8_rating_label = 'Average' THEN 1 END) AS q8_average,
        COUNT(CASE WHEN question8_rating_label = 'Good' THEN 1 END) AS q8_good,
        COUNT(CASE WHEN question8_rating_label = 'Very Good' THEN 1 END) AS q8_very_good,
        COUNT(CASE WHEN question8_rating_label = 'Excellent' THEN 1 END) AS q8_excellent,
        
        COUNT(CASE WHEN question9_rating_label = 'Below Average' THEN 1 END) AS q9_below_average,
        COUNT(CASE WHEN question9_rating_label = 'Average' THEN 1 END) AS q9_average,
        COUNT(CASE WHEN question9_rating_label = 'Good' THEN 1 END) AS q9_good,
        COUNT(CASE WHEN question9_rating_label = 'Very Good' THEN 1 END) AS q9_very_good,
        COUNT(CASE WHEN question9_rating_label = 'Excellent' THEN 1 END) AS q9_excellent,
        
        COUNT(CASE WHEN question10_rating_label = 'Below Average' THEN 1 END) AS q10_below_average,
        COUNT(CASE WHEN question10_rating_label = 'Average' THEN 1 END) AS q10_average,
        COUNT(CASE WHEN question10_rating_label = 'Good' THEN 1 END) AS q10_good,
        COUNT(CASE WHEN question10_rating_label = 'Very Good' THEN 1 END) AS q10_very_good,
        COUNT(CASE WHEN question10_rating_label = 'Excellent' THEN 1 END) AS q10_excellent
    FROM
        Feedback
    WHERE
        course = '${req.body.course}' AND faculty ='${req.body.faculty}'
    `;

  // Execute the SQL query
  connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }

    res.render('hod', { applications: results });


  })

})


app.post("/feedback_search", (req, res) => {


  const sqlQuery = `
    SELECT
    COUNT(CASE WHEN question1_rating_label = 'Below Average' THEN 1 END) AS q1_below_average,
    COUNT(CASE WHEN question1_rating_label = 'Average' THEN 1 END) AS q1_average,
    COUNT(CASE WHEN question1_rating_label = 'Good' THEN 1 END) AS q1_good,
    COUNT(CASE WHEN question1_rating_label = 'Very Good' THEN 1 END) AS q1_very_good,
    COUNT(CASE WHEN question1_rating_label = 'Excellent' THEN 1 END) AS q1_excellent,
    
    COUNT(CASE WHEN question2_rating_label = 'Below Average' THEN 1 END) AS q2_below_average,
    COUNT(CASE WHEN question2_rating_label = 'Average' THEN 1 END) AS q2_average,
    COUNT(CASE WHEN question2_rating_label = 'Good' THEN 1 END) AS q2_good,
    COUNT(CASE WHEN question2_rating_label = 'Very Good' THEN 1 END) AS q2_very_good,
    COUNT(CASE WHEN question2_rating_label = 'Excellent' THEN 1 END) AS q2_excellent,
    
    COUNT(CASE WHEN question3_rating_label = 'Below Average' THEN 1 END) AS q3_below_average,
    COUNT(CASE WHEN question3_rating_label = 'Average' THEN 1 END) AS q3_average,
    COUNT(CASE WHEN question3_rating_label = 'Good' THEN 1 END) AS q3_good,
    COUNT(CASE WHEN question3_rating_label = 'Very Good' THEN 1 END) AS q3_very_good,
    COUNT(CASE WHEN question3_rating_label = 'Excellent' THEN 1 END) AS q3_excellent,
    
    COUNT(CASE WHEN question4_rating_label = 'Below Average' THEN 1 END) AS q4_below_average,
    COUNT(CASE WHEN question4_rating_label = 'Average' THEN 1 END) AS q4_average,
    COUNT(CASE WHEN question4_rating_label = 'Good' THEN 1 END) AS q4_good,
    COUNT(CASE WHEN question4_rating_label = 'Very Good' THEN 1 END) AS q4_very_good,
    COUNT(CASE WHEN question4_rating_label = 'Excellent' THEN 1 END) AS q4_excellent,
    
    COUNT(CASE WHEN question5_rating_label = 'Below Average' THEN 1 END) AS q5_below_average,
    COUNT(CASE WHEN question5_rating_label = 'Average' THEN 1 END) AS q5_average,
    COUNT(CASE WHEN question5_rating_label = 'Good' THEN 1 END) AS q5_good,
    COUNT(CASE WHEN question5_rating_label = 'Very Good' THEN 1 END) AS q5_very_good,
    COUNT(CASE WHEN question5_rating_label = 'Excellent' THEN 1 END) AS q5_excellent,
    
    COUNT(CASE WHEN question6_rating_label = 'Below Average' THEN 1 END) AS q6_below_average,
    COUNT(CASE WHEN question6_rating_label = 'Average' THEN 1 END) AS q6_average,
    COUNT(CASE WHEN question6_rating_label = 'Good' THEN 1 END) AS q6_good,
    COUNT(CASE WHEN question6_rating_label = 'Very Good' THEN 1 END) AS q6_very_good,
    COUNT(CASE WHEN question6_rating_label = 'Excellent' THEN 1 END) AS q6_excellent,
    
    COUNT(CASE WHEN question7_rating_label = 'Below Average' THEN 1 END) AS q7_below_average,
    COUNT(CASE WHEN question7_rating_label = 'Average' THEN 1 END) AS q7_average,
    COUNT(CASE WHEN question7_rating_label = 'Good' THEN 1 END) AS q7_good,
    COUNT(CASE WHEN question7_rating_label = 'Very Good' THEN 1 END) AS q7_very_good,
    COUNT(CASE WHEN question7_rating_label = 'Excellent' THEN 1 END) AS q7_excellent,
    
    COUNT(CASE WHEN question8_rating_label = 'Below Average' THEN 1 END) AS q8_below_average,
    COUNT(CASE WHEN question8_rating_label = 'Average' THEN 1 END) AS q8_average,
    COUNT(CASE WHEN question8_rating_label = 'Good' THEN 1 END) AS q8_good,
    COUNT(CASE WHEN question8_rating_label = 'Very Good' THEN 1 END) AS q8_very_good,
    COUNT(CASE WHEN question8_rating_label = 'Excellent' THEN 1 END) AS q8_excellent,
    
    COUNT(CASE WHEN question9_rating_label = 'Below Average' THEN 1 END) AS q9_below_average,
    COUNT(CASE WHEN question9_rating_label = 'Average' THEN 1 END) AS q9_average,
    COUNT(CASE WHEN question9_rating_label = 'Good' THEN 1 END) AS q9_good,
    COUNT(CASE WHEN question9_rating_label = 'Very Good' THEN 1 END) AS q9_very_good,
    COUNT(CASE WHEN question9_rating_label = 'Excellent' THEN 1 END) AS q9_excellent,
    
    COUNT(CASE WHEN question10_rating_label = 'Below Average' THEN 1 END) AS q10_below_average,
    COUNT(CASE WHEN question10_rating_label = 'Average' THEN 1 END) AS q10_average,
    COUNT(CASE WHEN question10_rating_label = 'Good' THEN 1 END) AS q10_good,
    COUNT(CASE WHEN question10_rating_label = 'Very Good' THEN 1 END) AS q10_very_good,
    COUNT(CASE WHEN question10_rating_label = 'Excellent' THEN 1 END) AS q10_excellent
FROM
    Feedback
WHERE
    course = '${req.body.course}'
`;

  // Execute the SQL query
  connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }

    res.render('faculty', { applications: results });


  })

})