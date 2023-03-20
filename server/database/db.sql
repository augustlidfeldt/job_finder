CREATE TABLE
    jobs (
        j_id SERIAL PRIMARY KEY,
        j_name VARCHAR(50) NOT NULL,
        j_location VARCHAR(50) NOT NULL,
        j_company_id INT NOT NULL,
        j_description VARCHAR(255) NOT NULL,
        j_salary INTEGER NOT NULL,
        created_on TIMESTAMP NOT NULL,
        CONSTRAINT fk_company_id FOREIGN KEY(j_company_id) REFERENCES companies(c_id) ON DELETE NO ACTION
    );

CREATE TABLE
    users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL
    );

INSERT INTO
    users (
        username,
        firstname,
        lastname,
        password,
        email
    )
VALUES (
        'Johnnyboy',
        'Johnny',
        'Boy',
        'jboy',
        'jboy@mail.com'
    );

--INSERTING NEW FAVORITE

INSERT INTO
    favorites (user_id, job_id)
WHERE
VALUES (1, 2) --GET ALL FAVORITES
SELECT *
FROM favorites as f
    LEFT JOIN jobs as j on f.job_id = j.j_id
WHERE
    user_id = 1 --REMOVE FAVORITE
DELETE FROM favorites
WHERE
    user_id = 1
    AND job_id = 2 --ADD CONSTRAINT
ALTER TABLE favorites
ADD
    CONSTRAINT unique_user_job UNIQUE (user_id, job_id)
CREATE TABLE
    favorites (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(user_id),
        job_id INTEGER NOT NULL REFERENCES jobs(j_id)
    );

CREATE TABLE
    companies (
        c_id SERIAL PRIMARY KEY,
        c_name VARCHAR(50) NOT NULL,
        c_country VARCHAR(50) NOT NULL,
        c_industry VARCHAR(50) NOT NULL,
        c_description VARCHAR(255) NOT NULL,
        c_employees INTEGER NOT NULL,
        created_on TIMESTAMP NOT NULL
    );

INSERT INTO
    companies (
        c_name,
        c_country,
        c_industry,
        c_description,
        c_employees
    )
VALUES (
        'Juicy Fruit Inc',
        'Spain',
        'Food Processing',
        'We sell the best fruit in on the northern hemisphere',
        50
    );

INSERT INTO
    companies (
        c_name,
        c_country,
        c_industry,
        c_description,
        c_employees
    )
VALUES (
        'Glada Limpan',
        'Sweden',
        'Food Processing',
        'Bread is gods gift',
        650
    );

INSERT INTO
    jobs (
        j_name,
        j_location,
        j_company_id,
        j_description,
        j_salary
    )
VALUES (
        'Fruit picker',
        'Madrid',
        1,
        'Come pick fruit with us',
        15000
    );