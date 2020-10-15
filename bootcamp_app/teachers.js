const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool query is a function that accepts an SQL query as a Javascript string
// the function then returns a promise that contains our result when the query is successful
// when we make the query from a JS application, the results come back as a JS object. 
//Once the .then(res => {} ) gets executed, we're not dealing with SQL or the database anymore, we're just dealing with JS objects
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id 
JOIN students ON assistance_requests.student_id = students.id 
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2]}'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));