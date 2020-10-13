SELECT students.name AS student, AVG(assignment_submissions.duration)
FROM students
JOIN assignment_submissions ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY AVG(assignment_submissions.duration) DESC;

-- count all the submission durations and then average it
-- average can be done with AVG ()
-- instead of line 6 you can use alia and then call the alias instead ofo the AVG(...)