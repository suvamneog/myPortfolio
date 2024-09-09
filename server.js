const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs"); });

// // Handle form submissions
// app.post('/submit-form', (req, res) => {
//   const { name, email, message } = req.body;
//   console.log('Form submission:', { name, email, message });
//   res.json({ success: true, message: 'Form submitted successfully!' });
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});