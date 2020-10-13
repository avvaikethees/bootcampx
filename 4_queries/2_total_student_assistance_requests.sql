SELECT count(assistance_requests.*) AS total_assistances, students.name
FROM assistance_requests
JOIN students on student_id = students.id 
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name; 