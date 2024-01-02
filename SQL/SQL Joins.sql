SQL Joins

-- Exercise 01
SELECT employees.first_name, employees.last_name, employees.manager_id, employees.department_id, employees.location_id
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id
INNER JOIN locations ON departments.location_id = locations.location_id;

-- Exercise 02
SELECT l.location_id, l.postal_code, c.country_id, c.country_name
FROM locations l
INNER JOIN countries c ON l.country_id = c.country_id;

-- Exercise 03
SELECT e.employee_id, e.first_name AS employee_first_name, e.last_name AS employee_last_name, d.dependent_id, d.first_name AS dependent_first_name, d.last_name AS dependent_last_name, d.relationship
FROM employees e
INNER JOIN dependents d ON e.employee_id = d.employee_id;
