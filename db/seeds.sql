INSERT INTO department (dept_name)
VALUES ('Programming'),
        ('Design'),
        ('Sales'),
        ('Accounting');

INSERT INTO position (title, salary, dept_id)
VALUES ('Programmer', 89000, 1),
        ('Designer', 93000, 2),
        ('Salesperson', 75000, 3),
        ('Accountant', 90000, 4),
        ('Team Manager', 150000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Gizmo', 'LeChat', 1, 5),
        ('Christopher', 'McLaughlin', 2, 5),
        ('Marty', 'McFly', 3, NULL),
        ('Patrica', 'Labelle', 4, NULL),
        ('Elizabeth', 'Flamm', 5, NULL),
        ('Jay', 'Dilla', 1, 5);

