// ─── CHAPTERS DATA ────────────────────────────────────────────────────────────
export const CHAPTERS = [
  {
    id: 0, num: "01", emoji: "🏠",
    level: "Total Beginner", levelColor: "#4ade80",
    title: "What IS a Database?",
    desc: "Let's start from zero. What is PostgreSQL and why do we need it?",
    sections: [
      {
        title: "Imagine a Giant Filing Cabinet",
        analogy: { emoji: "🗄️", title: "Real World Analogy", text: "Imagine your school has thousands of students. Each student has a name, age, and grade. How do you keep track of everyone?\n\nYou could write it on paper 📄 — but what if you need to find all kids who are 10 years old? You'd read every single paper!\n\nA DATABASE is like a magical filing cabinet that can find, sort, and organize information INSTANTLY — even if you have millions of records! 🚀" },
        content: "**PostgreSQL** (also called \"Postgres\") is one of the world's most powerful databases. It stores data in an organized way, and you can ask it questions (called **queries**) to get answers back super fast.\n\nBig companies like Apple, Spotify, Instagram, and Reddit use PostgreSQL!",
        code: { label: "-- This is SQL — the language to talk to PostgreSQL\n-- Double dashes make a comment (PostgreSQL ignores it)", content: `-- Think of SQL like talking to a very organized librarian
-- You ask questions, and PostgreSQL answers

-- Example: "Show me all students"
SELECT * FROM students;

-- Example: "Show me students who are 10 years old"
SELECT * FROM students WHERE age = 10;

-- Example: "How many students do we have?"
SELECT COUNT(*) FROM students;` },
        quiz: { q: "What is a database?", options: [
          { t: "A website", c: false, f: "Nope! A database stores data, but it's not a website." },
          { t: "An organized place to store and quickly find information", c: true, f: "🎉 YES! Like a super-smart filing cabinet that finds things instantly!" },
          { t: "A type of computer game", c: false, f: "Not quite! Databases store data, not games." }
        ]}
      },
      {
        title: "Tables — Like a Spreadsheet with Superpowers",
        analogy: { emoji: "📊", title: "Think of Excel or Google Sheets", text: "You know how a spreadsheet has rows and columns? A database TABLE is the same thing!\n\nEach COLUMN is a type of info (Name, Age, Grade)\nEach ROW is one person or thing\n\nBut unlike a spreadsheet, PostgreSQL can handle MILLIONS of rows and still find things in milliseconds! ⚡" },
        code: { label: "-- What a table looks like", content: `-- A table called "students" might look like this:
-- ┌────┬──────────┬─────┬───────┐
-- │ id │ name     │ age │ grade │
-- ├────┼──────────┼─────┼───────┤
-- │  1 │ Alice    │  10 │   5th │
-- │  2 │ Bob      │  11 │   6th │
-- │  3 │ Charlie  │  10 │   5th │
-- │  4 │ Diana    │  12 │   7th │
-- └────┴──────────┴─────┴───────┘

-- Each row = one student
-- Each column = one piece of info
-- id = unique number for each student (important!)` }
      }
    ]
  },
  {
    id: 1, num: "02", emoji: "🏗️",
    level: "Beginner", levelColor: "#86efac",
    title: "Setting Up & First Commands",
    desc: "Install PostgreSQL, connect to it, and run your very first SQL commands.",
    sections: [
      {
        title: "Installing PostgreSQL",
        content: "Before you can use PostgreSQL, you need to install it on your computer. It's free!",
        code: { label: "-- Installation commands (run in your terminal, not SQL)", content: `-- On Mac (using Homebrew):
-- brew install postgresql@16
-- brew services start postgresql@16

-- On Ubuntu/Linux:
-- sudo apt update
-- sudo apt install postgresql postgresql-contrib
-- sudo systemctl start postgresql

-- On Windows:
-- Download from: https://www.postgresql.org/download/windows/
-- Run the installer (it's like installing any program!)

-- Connect to PostgreSQL (in your terminal):
-- psql -U postgres

-- You'll see this prompt — you're IN! 🎉
-- postgres=#` },
        tip: { label: "💡 Easy Alternative", text: "Don't want to install? Use pgAdmin (free GUI tool) or try PostgreSQL online at https://neon.tech or https://supabase.com — both have free plans!" }
      },
      {
        title: "Your First Database Commands",
        analogy: { emoji: "🏠", title: "Databases inside PostgreSQL", text: "PostgreSQL is like an apartment building 🏢\nEach DATABASE inside is like a separate apartment 🏠\nEach TABLE inside a database is like a room in the apartment 🛋️\n\nYou create different databases for different apps!" },
        code: { label: "-- Basic PostgreSQL commands", content: `-- Create a brand new database (like building a new apartment)
CREATE DATABASE myschool;

-- Switch to use that database
\\c myschool

-- See all databases
\\l

-- Create your first table!
CREATE TABLE students (
    id      SERIAL PRIMARY KEY,   -- auto-counting ID number
    name    VARCHAR(100),         -- text up to 100 characters
    age     INTEGER,              -- whole number
    grade   VARCHAR(10)           -- text like "5th", "6th"
);

-- See all tables in current database
\\dt

-- See the structure of a table
\\d students` },
        quiz: { q: "What does SERIAL PRIMARY KEY do for the 'id' column?", options: [
          { t: "Makes the text bold", c: false, f: "That's for formatting, not databases!" },
          { t: "Automatically gives each row a unique number (1, 2, 3...)", c: true, f: "🎉 Correct! SERIAL auto-increments, PRIMARY KEY means it's unique and the main identifier for each row." },
          { t: "Deletes the column", c: false, f: "Definitely not! It creates a very important column." }
        ]}
      }
    ]
  },
  {
    id: 2, num: "03", emoji: "✏️",
    level: "Beginner", levelColor: "#86efac",
    title: "CRUD — The 4 Magic Operations",
    desc: "Create, Read, Update, Delete — everything you do with data!",
    sections: [
      {
        title: "CREATE — Adding Data (INSERT)",
        analogy: { emoji: "➕", title: "Like adding a new contact to your phone", text: "When you get a new friend's number, you tap 'New Contact' and fill in their details. INSERT INTO does exactly that for your database!" },
        code: { label: "-- INSERT: adding rows to your table", content: `-- Add ONE student
INSERT INTO students (name, age, grade)
VALUES ('Alice', 10, '5th');

-- Add MULTIPLE students at once
INSERT INTO students (name, age, grade)
VALUES
    ('Bob',     11, '6th'),
    ('Charlie', 10, '5th'),
    ('Diana',   12, '7th'),
    ('Eve',     11, '6th');

-- The id is filled automatically by SERIAL!
-- Result:
-- id=1 Alice, id=2 Bob, id=3 Charlie...

-- RETURNING lets you see what was just added
INSERT INTO students (name, age, grade)
VALUES ('Frank', 9, '4th')
RETURNING *;  -- shows the new row including its id!` }
      },
      {
        title: "READ — Getting Data (SELECT)",
        analogy: { emoji: "🔍", title: "Like asking a librarian to find books", text: "SELECT is the most used command in SQL. You're basically asking PostgreSQL: 'Show me stuff!' You can ask for everything, or only specific things that match your rules." },
        code: { label: "-- SELECT: reading data (most important command!)", content: `-- Get EVERYTHING from the table
SELECT * FROM students;
-- * means "all columns"

-- Get only specific columns
SELECT name, age FROM students;

-- Filter with WHERE (show only 10-year-olds)
SELECT * FROM students WHERE age = 10;

-- Multiple conditions
SELECT * FROM students
WHERE age = 10 AND grade = '5th';

-- OR condition
SELECT * FROM students
WHERE age = 10 OR age = 11;

-- Sort the results (ORDER BY)
SELECT * FROM students
ORDER BY age ASC;   -- youngest first
-- ORDER BY age DESC;  -- oldest first

-- Limit how many results
SELECT * FROM students
ORDER BY age
LIMIT 3;  -- only show top 3

-- Skip some results (used for "pagination" - like page 2)
SELECT * FROM students
ORDER BY id
LIMIT 3 OFFSET 3;  -- skip first 3, show next 3

-- Search inside text (LIKE)
SELECT * FROM students
WHERE name LIKE 'A%';  -- names starting with A
-- % means "anything"
-- 'A%' = starts with A
-- '%son' = ends with son
-- '%lic%' = contains "lic" anywhere` },
        quiz: { q: "What does the % symbol mean in a LIKE statement?", options: [
          { t: "Percentage calculation", c: false, f: "Not here! In LIKE, it's a wildcard." },
          { t: "A wildcard that means 'any characters here'", c: true, f: "🎉 Exactly! '%lic%' finds 'Alice', 'Monica', 'Felicia' — anything containing 'lic'!" },
          { t: "Division operator", c: false, f: "That's for math. In LIKE, % is a wildcard pattern." }
        ]}
      },
      {
        title: "UPDATE — Changing Data",
        analogy: { emoji: "✏️", title: "Like editing a contact in your phone", text: "Someone moved to a new grade? Their age changed? Use UPDATE to fix it. ALWAYS use WHERE — otherwise you change EVERYONE!" },
        code: { label: "-- UPDATE: changing existing rows", content: `-- Update ONE student (always use WHERE!)
UPDATE students
SET grade = '6th'
WHERE name = 'Alice';

-- Update MULTIPLE columns at once
UPDATE students
SET age = 11, grade = '6th'
WHERE id = 1;

-- ⚠️ DANGER: Without WHERE, ALL rows are changed!
-- UPDATE students SET grade = 'unknown';
-- This changes EVERY student! Be careful!

-- Update and see what changed (RETURNING)
UPDATE students
SET age = age + 1  -- everyone gets one year older!
WHERE grade = '5th'
RETURNING name, age;` }
      },
      {
        title: "DELETE — Removing Data",
        analogy: { emoji: "🗑️", title: "Like deleting a contact forever", text: "DELETE removes rows. Like UPDATE, ALWAYS use WHERE or you'll delete everything! There's no undo button (unless you use transactions — we'll learn that later)!" },
        code: { label: "-- DELETE: removing rows", content: `-- Delete ONE student
DELETE FROM students
WHERE name = 'Frank';

-- Delete all students in a specific grade
DELETE FROM students
WHERE grade = '4th';

-- Delete and see what was removed
DELETE FROM students
WHERE age > 15
RETURNING *;

-- ⚠️ DANGER: Without WHERE — deletes EVERYTHING!
-- DELETE FROM students;  -- ALL ROWS GONE!

-- To completely reset a table (faster than DELETE all):
TRUNCATE TABLE students;
-- This removes all rows AND resets SERIAL back to 1

-- To remove the entire table structure:
DROP TABLE students;  -- Table is completely gone!` },
        quiz: { q: "Why should you ALWAYS use WHERE with UPDATE and DELETE?", options: [
          { t: "To make it run faster", c: false, f: "Performance isn't the main reason here." },
          { t: "Without WHERE, it affects ALL rows in the table — every single one!", c: true, f: "🎉 Exactly! Without WHERE, UPDATE changes every row and DELETE removes every row. Always double-check your WHERE clause!" },
          { t: "Because PostgreSQL requires it", c: false, f: "PostgreSQL doesn't require it — that's the dangerous part! It will happily delete everything." }
        ]}
      }
    ]
  },
  {
    id: 3, num: "04", emoji: "🔢",
    level: "Beginner+", levelColor: "#fde68a",
    title: "Data Types",
    desc: "Numbers, text, dates, true/false — PostgreSQL has a type for everything!",
    sections: [
      {
        title: "All the Data Types You Need",
        analogy: { emoji: "📦", title: "Different boxes for different things", text: "Imagine you have different containers:\n🥛 A bottle for liquids\n📦 A box for solids\n❄️ A freezer for cold things\n\nPostgreSQL has different data types to store different kinds of information correctly and efficiently!" },
        code: { label: "-- PostgreSQL Data Types — the complete overview", content: `-- ═══ TEXT / STRING TYPES ═══
VARCHAR(n)   -- text up to n characters  ('Hello World')
TEXT         -- text of any length (no limit!)
CHAR(n)      -- exactly n characters, padded with spaces

-- ═══ NUMBER TYPES ═══
SMALLINT     -- small whole numbers (-32768 to 32767)
INTEGER      -- whole numbers (-2 billion to 2 billion) ← most common
BIGINT       -- huge whole numbers (up to 9 quintillion!)
DECIMAL(p,s) -- exact decimal (p digits, s after point) ← money!
NUMERIC(p,s) -- same as DECIMAL
REAL         -- approximate decimal (less precise, faster)
DOUBLE PRECISION -- more precise approximate decimal
SERIAL       -- auto-incrementing INTEGER (1, 2, 3...)
BIGSERIAL    -- auto-incrementing BIGINT

-- ═══ TRUE/FALSE ═══
BOOLEAN      -- true or false (also accepts: TRUE/FALSE, 1/0, yes/no)

-- ═══ DATE & TIME ═══
DATE         -- just the date: '2024-01-15'
TIME         -- just the time: '14:30:00'
TIMESTAMP    -- date + time: '2024-01-15 14:30:00'
TIMESTAMPTZ  -- timestamp WITH timezone ← ALWAYS use this!
INTERVAL     -- duration: '2 hours', '3 days', '1 month'

-- ═══ SPECIAL / ADVANCED ═══
UUID         -- unique ID: 'a0ee-bc99-9c0b-4ef8...' 
JSON         -- JSON data (stored as text)
JSONB        -- JSON data (stored binary, faster & indexable) ← prefer this!
ARRAY        -- array of any type: INTEGER[], TEXT[]
INET         -- IP address: '192.168.1.1'
CIDR         -- IP network range
BYTEA        -- binary data (files, images)` },
        code2: { label: "-- Real table using proper types", content: `CREATE TABLE products (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(200)      NOT NULL,
    description TEXT,
    price       DECIMAL(10, 2)    NOT NULL,  -- up to 99999999.99
    stock       INTEGER           DEFAULT 0,
    is_active   BOOLEAN           DEFAULT true,
    created_at  TIMESTAMPTZ       DEFAULT NOW(),
    tags        TEXT[],                       -- array of text!
    metadata    JSONB                         -- flexible extra data
);

-- Insert with various types
INSERT INTO products (name, description, price, stock, tags, metadata)
VALUES (
    'Magic Notebook',
    'A notebook that writes itself!',
    29.99,
    100,
    ARRAY['school', 'magic', 'stationery'],
    '{"color": "blue", "pages": 200}'::JSONB
);` },
        quiz: { q: "For storing money/prices, which data type should you use?", options: [
          { t: "REAL or FLOAT", c: false, f: "Never use floating point for money! They have rounding errors. 0.1 + 0.2 = 0.30000000000000004 😱" },
          { t: "DECIMAL or NUMERIC", c: true, f: "🎉 Correct! DECIMAL(10,2) stores exact values like 29.99 without any rounding errors — perfect for money!" },
          { t: "TEXT", c: false, f: "You could, but then you can't do math on it (add prices, etc.). DECIMAL is the right choice!" }
        ]}
      }
    ]
  },
  {
    id: 4, num: "05", emoji: "🤝",
    level: "Intermediate", levelColor: "#fbbf24",
    title: "Relationships & Joins",
    desc: "Connect tables together! This is where databases get REALLY powerful.",
    sections: [
      {
        title: "Why Multiple Tables?",
        analogy: { emoji: "📚", title: "The school example", text: "Imagine storing student info AND their courses.\n\nBad way: One giant table with repeated data 😞\n  Alice | Math | Mr. Smith\n  Alice | Science | Ms. Jones  (Alice's info repeated!)\n  Bob | Math | Mr. Smith  (Math/Smith repeated!)\n\nGood way: Separate tables, connected by IDs 🎯\n  Students table: Alice(id=1), Bob(id=2)\n  Courses table: Math(id=1), Science(id=2)\n  Enrollments table: student_id=1, course_id=1 (Alice takes Math!)\n\nThis is called NORMALIZATION — removing repetition!" },
        code: { label: "-- Creating related tables", content: `-- Main tables
CREATE TABLE students (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    email   VARCHAR(200) UNIQUE,
    age     INTEGER
);

CREATE TABLE teachers (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    subject VARCHAR(100)
);

CREATE TABLE courses (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(200) NOT NULL,
    teacher_id  INTEGER REFERENCES teachers(id),
    -- ↑ FOREIGN KEY: must match an id in teachers table!
    credits     INTEGER DEFAULT 3
);

-- Junction table (many-to-many relationship)
-- A student can take many courses
-- A course can have many students
CREATE TABLE enrollments (
    student_id  INTEGER REFERENCES students(id) ON DELETE CASCADE,
    course_id   INTEGER REFERENCES courses(id)  ON DELETE CASCADE,
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    grade       VARCHAR(2),
    PRIMARY KEY (student_id, course_id)  -- combination must be unique
);` }
      },
      {
        title: "JOINs — Connecting Tables Together",
        analogy: { emoji: "🧩", title: "Like connecting puzzle pieces", text: "JOIN combines rows from different tables when they match on a shared value (usually an ID).\n\nINNER JOIN: Only matching rows from BOTH tables\nLEFT JOIN: All from left + matching from right (unmatched = NULL)\nRIGHT JOIN: All from right + matching from left\nFULL JOIN: Everything from both tables" },
        code: { label: "-- JOINs explained with examples", content: `-- Insert sample data first
INSERT INTO teachers VALUES (1,'Mr. Smith','Math'), (2,'Ms. Jones','Science');
INSERT INTO students VALUES (1,'Alice','alice@mail.com',10), (2,'Bob','bob@mail.com',11);
INSERT INTO courses VALUES (1,'Algebra',1,3), (2,'Biology',2,4);
INSERT INTO enrollments (student_id, course_id, grade)
VALUES (1,1,'A'), (1,2,'B'), (2,1,'A+');

-- INNER JOIN: students WITH their course names
-- (only students who ARE enrolled)
SELECT
    s.name   AS student_name,
    c.name   AS course_name,
    e.grade
FROM enrollments e
JOIN students  s ON e.student_id = s.id
JOIN courses   c ON e.course_id  = c.id;
-- Result: Alice|Algebra|A, Alice|Biology|B, Bob|Algebra|A+

-- LEFT JOIN: ALL students + their courses if any
-- (students with NO courses still appear, with NULLs)
SELECT
    s.name      AS student_name,
    c.name      AS course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses     c ON e.course_id = c.id;

-- Full info: student + course + teacher
SELECT
    s.name  AS student,
    c.name  AS course,
    t.name  AS teacher,
    e.grade
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses  c ON e.course_id  = c.id
JOIN teachers t ON c.teacher_id = t.id
ORDER BY s.name, c.name;` },
        quiz: { q: "A student hasn't enrolled in any courses yet. Which JOIN shows them in the results?", options: [
          { t: "INNER JOIN", c: false, f: "INNER JOIN only shows rows with matches in BOTH tables. A student with no enrollments wouldn't appear." },
          { t: "LEFT JOIN (with students on the left)", c: true, f: "🎉 Correct! LEFT JOIN keeps ALL rows from the left table (students), even if there's no match. Their course columns would be NULL." },
          { t: "No JOIN can show them", c: false, f: "LEFT JOIN can! It's designed exactly for this — show all from one side, match from the other if possible." }
        ]}
      }
    ]
  },
  {
    id: 5, num: "06", emoji: "📊",
    level: "Intermediate", levelColor: "#fbbf24",
    title: "Aggregation & Grouping",
    desc: "COUNT, SUM, AVG, GROUP BY — turning raw data into useful summaries.",
    sections: [
      {
        title: "Aggregate Functions — Summarizing Data",
        analogy: { emoji: "🧮", title: "Like a report card summary", text: "Instead of seeing every single grade, you want to know:\n- How many students are in each grade?\n- What's the average age?\n- Who's the oldest?\n\nAGGREGATE FUNCTIONS do exactly this — they crunch many rows into one summary number!" },
        code: { label: "-- Aggregate functions", content: `-- COUNT — how many rows
SELECT COUNT(*) FROM students;           -- total students
SELECT COUNT(grade) FROM students;        -- students with a grade set
SELECT COUNT(DISTINCT grade) FROM students; -- how many unique grades

-- SUM — add up numbers
SELECT SUM(credits) FROM courses;

-- AVG — average
SELECT AVG(age) FROM students;
SELECT ROUND(AVG(age), 1) FROM students; -- rounded to 1 decimal

-- MIN and MAX
SELECT MIN(age), MAX(age) FROM students;

-- All together
SELECT
    COUNT(*)          AS total_students,
    ROUND(AVG(age),1) AS average_age,
    MIN(age)          AS youngest,
    MAX(age)          AS oldest
FROM students;` },
        code2: { label: "-- GROUP BY — the real power!", content: `-- "How many students in each grade?"
SELECT
    grade,
    COUNT(*) AS student_count,
    AVG(age) AS avg_age
FROM students
GROUP BY grade
ORDER BY grade;
-- grade | student_count | avg_age
-- 4th   |             2 |    9.5
-- 5th   |             5 |   10.0
-- 6th   |             3 |   11.0

-- HAVING — filter AFTER grouping
-- (WHERE filters before grouping, HAVING filters after)
SELECT
    grade,
    COUNT(*) AS student_count
FROM students
GROUP BY grade
HAVING COUNT(*) > 2  -- only grades with MORE than 2 students
ORDER BY student_count DESC;

-- Real world example: Top 3 most popular courses
SELECT
    c.name         AS course_name,
    COUNT(e.student_id) AS enrollment_count
FROM courses c
LEFT JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.name
ORDER BY enrollment_count DESC
LIMIT 3;` },
        quiz: { q: "What's the difference between WHERE and HAVING?", options: [
          { t: "They're exactly the same thing", c: false, f: "They look similar but work at different stages of the query!" },
          { t: "WHERE filters rows BEFORE grouping, HAVING filters AFTER grouping (on groups)", c: true, f: "🎉 Perfect! WHERE removes individual rows first. Then GROUP BY creates groups. Then HAVING filters those groups." },
          { t: "WHERE is for numbers, HAVING is for text", c: false, f: "Both can filter any data type. The difference is WHEN they filter (before vs after grouping)." }
        ]}
      }
    ]
  },
  {
    id: 6, num: "07", emoji: "🛡️",
    level: "Intermediate", levelColor: "#fbbf24",
    title: "Constraints & Data Integrity",
    desc: "Rules that keep your data clean and correct automatically.",
    sections: [
      {
        title: "Constraints — Rules for Your Data",
        analogy: { emoji: "🚦", title: "Like rules in a game", text: "Imagine a game where you can't move a piece off the board, can't have two queens, and can't skip your turn. Rules enforce fairness!\n\nDatabase CONSTRAINTS are rules that PostgreSQL enforces automatically. No bad data can get in!" },
        code: { label: "-- All constraint types explained", content: `CREATE TABLE users (
    -- PRIMARY KEY: unique + not null (every table should have one!)
    id              SERIAL PRIMARY KEY,

    -- NOT NULL: this column MUST have a value
    username        VARCHAR(50) NOT NULL,

    -- UNIQUE: no two rows can have the same value
    email           VARCHAR(200) UNIQUE NOT NULL,

    -- CHECK: custom rule (value must pass this condition)
    age             INTEGER CHECK (age >= 0 AND age <= 150),

    -- DEFAULT: value used if none provided
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    is_active       BOOLEAN     DEFAULT true,
    login_count     INTEGER     DEFAULT 0,

    -- Another UNIQUE (can also be named)
    phone           VARCHAR(20),
    CONSTRAINT unique_phone UNIQUE (phone)
);

-- FOREIGN KEY with actions
CREATE TABLE posts (
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER NOT NULL
                REFERENCES users(id)
                ON DELETE CASCADE    -- delete posts when user is deleted
                ON UPDATE CASCADE,   -- update if user id changes
    title       VARCHAR(500) NOT NULL,
    body        TEXT,
    -- Multi-column UNIQUE constraint
    CONSTRAINT no_duplicate_titles_per_user
        UNIQUE (user_id, title)
);

-- Adding a constraint to existing table:
ALTER TABLE students ADD CONSTRAINT valid_age CHECK (age > 0);

-- Removing a constraint:
ALTER TABLE students DROP CONSTRAINT valid_age;` },
        quiz: { q: "What happens when you try to INSERT a row with a duplicate value in a UNIQUE column?", options: [
          { t: "PostgreSQL silently ignores it and inserts anyway", c: false, f: "No, PostgreSQL enforces UNIQUE strictly!" },
          { t: "PostgreSQL throws an error and the INSERT fails", c: true, f: "🎉 Correct! You get a 'duplicate key value violates unique constraint' error. No bad data gets in!" },
          { t: "PostgreSQL overwrites the existing row", c: false, f: "That's what INSERT ON CONFLICT does. A normal INSERT just fails on UNIQUE violations." }
        ]}
      }
    ]
  },
  {
    id: 7, num: "08", emoji: "⚡",
    level: "Intermediate+", levelColor: "#f97316",
    title: "Indexes — Making Queries Fast",
    desc: "Why queries slow down and how indexes make them lightning fast.",
    sections: [
      {
        title: "What is an Index?",
        analogy: { emoji: "📖", title: "Like the index at the back of a book", text: "Imagine you have a 1,000-page book and need to find all mentions of 'PostgreSQL'.\n\nWithout index: Read every single page... slowly 🐢\nWith index: Look at back of book, see 'PostgreSQL: pages 5, 47, 203' → go straight there! 🐇\n\nA database INDEX works the same way — it's a separate, sorted structure that lets PostgreSQL find rows without scanning the whole table!" },
        code: { label: "-- Creating and using indexes", content: `-- Basic index (B-tree is default and works for most cases)
CREATE INDEX idx_students_name ON students(name);

-- Index on a column you filter by often
CREATE INDEX idx_students_grade ON students(grade);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Multi-column index (for queries filtering on BOTH columns)
CREATE INDEX idx_name_grade ON students(name, grade);
-- ↑ helps: WHERE name = 'Alice' AND grade = '5th'
-- ↑ helps: WHERE name = 'Alice'  (leftmost column)
-- ✗ doesn't help: WHERE grade = '5th'  (not leftmost)

-- Partial index (only index some rows — smaller and faster!)
CREATE INDEX idx_active_users
ON users(email)
WHERE is_active = true;  -- only index active users!

-- Expression index
CREATE INDEX idx_lower_email
ON users(LOWER(email));  -- so WHERE LOWER(email) = '...' is fast

-- See indexes on a table
\\d students  -- shows indexes at the bottom

-- Check if PostgreSQL is USING your index
EXPLAIN ANALYZE
SELECT * FROM students WHERE grade = '5th';
-- Look for "Index Scan" vs "Seq Scan" in the output` },
        tip: { label: "⚠️ Index Trade-offs", text: "Indexes speed up SELECT queries but slow down INSERT/UPDATE/DELETE (because the index must also be updated). Don't index every column! Index columns you frequently filter, sort, or join on. A table with 10,000 rows probably doesn't need indexes. A table with 1,000,000 rows definitely does!" },
        quiz: { q: "You have a users table with 5 million rows. Queries with WHERE email = '...' are very slow. What's the fix?", options: [
          { t: "Add more RAM to the server", c: false, f: "Hardware helps, but the right fix is a proper index!" },
          { t: "CREATE INDEX idx_users_email ON users(email);", c: true, f: "🎉 Exactly! An index on the email column lets PostgreSQL find that 1 row among 5 million instantly — O(log n) instead of O(n)!" },
          { t: "Use SELECT FAST instead of SELECT", c: false, f: "That's not a real SQL command! An index is the correct solution." }
        ]}
      }
    ]
  },
  {
    id: 8, num: "09", emoji: "🔒",
    level: "Intermediate+", levelColor: "#f97316",
    title: "Transactions — All or Nothing",
    desc: "The most important concept for data safety. Never lose partial data again.",
    sections: [
      {
        title: "Why Transactions Matter",
        analogy: { emoji: "🏦", title: "The Bank Transfer Problem", text: "You transfer $100 from Account A to Account B.\n\nStep 1: Subtract $100 from Account A ✅\nStep 2: Power goes out! ❌\nStep 3: Add $100 to Account B... never happens!\n\n$100 disappeared from A but never arrived at B. The money VANISHED! 😱\n\nTRANSACTIONS fix this: either ALL steps succeed together, or NONE of them happen. It's all or nothing — like magic!" },
        code: { label: "-- Transactions — ACID properties in action", content: `-- Basic transaction structure
BEGIN;
    -- All your SQL goes here
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;    -- ← Makes everything permanent!
-- OR:
ROLLBACK;  -- ← Undoes everything if something went wrong!

-- Real world example with error handling
BEGIN;

    -- Deduct from sender
    UPDATE accounts
    SET balance = balance - 500
    WHERE user_id = 1 AND balance >= 500;  -- only if enough money

    -- Check if deduction happened (affected 1 row?)
    -- If user didn't have enough money, 0 rows affected → rollback

    -- Add to receiver
    UPDATE accounts
    SET balance = balance + 500
    WHERE user_id = 2;

COMMIT;

-- SAVEPOINT — partial rollback!
BEGIN;
    INSERT INTO orders VALUES (...);
    SAVEPOINT after_order;         -- set a checkpoint

    INSERT INTO payments VALUES (...);
    -- Something went wrong with payment:
    ROLLBACK TO after_order;       -- undo ONLY payment, keep order!

    -- Try different payment method:
    INSERT INTO payments VALUES (...);
COMMIT;` },
        code2: { label: "-- ACID Properties (what makes transactions reliable)", content: `-- ACID = The 4 guarantees PostgreSQL gives you:

-- A = ATOMICITY
-- All operations in a transaction succeed, or NONE do.
-- "All or nothing" — no partial results

-- C = CONSISTENCY
-- The database is always in a valid state.
-- Constraints are never violated during a transaction.

-- I = ISOLATION
-- Multiple transactions running at the same time
-- don't interfere with each other (as if they ran one by one)

-- D = DURABILITY
-- Once COMMIT is called, data is saved permanently.
-- Even if the server crashes the next millisecond, data is safe!

-- Isolation levels (how much transactions see each other)
BEGIN ISOLATION LEVEL READ COMMITTED;  -- default, good for most cases
BEGIN ISOLATION LEVEL REPEATABLE READ; -- consistent reads throughout
BEGIN ISOLATION LEVEL SERIALIZABLE;    -- strongest, like one-at-a-time` },
        quiz: { q: "A transaction runs 3 UPDATE statements. The 3rd one fails (an error occurs). What happens to the first 2?", options: [
          { t: "The first 2 are saved, only the 3rd fails", c: false, f: "That's the dangerous behavior that transactions PREVENT! Partial saves would corrupt your data." },
          { t: "All 3 are rolled back — none of the changes are saved", c: true, f: "🎉 Correct! ATOMICITY means all or nothing. If anything fails, the whole transaction is rolled back to the original state." },
          { t: "PostgreSQL retries the 3rd statement automatically", c: false, f: "PostgreSQL doesn't auto-retry. You get an error, and your application code must handle it (usually by rolling back)." }
        ]}
      }
    ]
  },
  {
    id: 9, num: "10", emoji: "🔧",
    level: "Advanced", levelColor: "#fb923c",
    title: "Advanced Queries",
    desc: "Subqueries, CTEs, window functions, CASE statements — pro-level SQL.",
    sections: [
      {
        title: "Subqueries — Queries Inside Queries",
        code: { label: "-- Subqueries", content: `-- Find students OLDER than the average age
SELECT name, age
FROM students
WHERE age > (SELECT AVG(age) FROM students);
--           ↑ this inner query runs first!

-- Subquery in FROM (inline view / derived table)
SELECT grade, avg_age
FROM (
    SELECT grade, ROUND(AVG(age), 1) AS avg_age
    FROM students
    GROUP BY grade
) AS grade_stats
WHERE avg_age > 10;

-- EXISTS — check if rows exist
SELECT name FROM students s
WHERE EXISTS (
    SELECT 1 FROM enrollments e
    WHERE e.student_id = s.id
);  -- students who ARE enrolled in at least one course

-- NOT EXISTS
SELECT name FROM students s
WHERE NOT EXISTS (
    SELECT 1 FROM enrollments e
    WHERE e.student_id = s.id
);  -- students with NO courses` }
      },
      {
        title: "CTEs — Common Table Expressions",
        analogy: { emoji: "📝", title: "Like naming a step in your math problem", text: "In math: 'Let X = (3 + 4) × 2. Let Y = X + 10'\n\nCTEs do the same thing — name a complex query and refer to it like a table. Easier to read and reuse!" },
        code: { label: "-- WITH clause (CTE = Common Table Expression)", content: `-- Basic CTE
WITH top_students AS (
    SELECT student_id, COUNT(*) AS course_count
    FROM enrollments
    GROUP BY student_id
    HAVING COUNT(*) >= 2
)
SELECT s.name, t.course_count
FROM students s
JOIN top_students t ON s.id = t.student_id;

-- Multiple CTEs chained together
WITH
course_stats AS (
    SELECT
        course_id,
        COUNT(*) AS enrolled,
        AVG(CASE WHEN grade='A' THEN 4.0
                 WHEN grade='B' THEN 3.0
                 ELSE 2.0 END) AS gpa
    FROM enrollments
    GROUP BY course_id
),
popular_courses AS (
    SELECT course_id FROM course_stats WHERE enrolled > 10
)
SELECT c.name, cs.enrolled, cs.gpa
FROM courses c
JOIN course_stats cs   ON c.id = cs.course_id
JOIN popular_courses p ON c.id = p.course_id
ORDER BY cs.gpa DESC;

-- RECURSIVE CTE — for tree/hierarchy data!
-- (like employee → manager → CEO chain)
WITH RECURSIVE org_chart AS (
    -- Base case: top-level employees (no manager)
    SELECT id, name, manager_id, 0 AS level
    FROM employees WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case: employees with managers
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT level, name FROM org_chart ORDER BY level, name;` }
      },
      {
        title: "Window Functions — The Real Power Move",
        analogy: { emoji: "🪟", title: "Like looking through a sliding window", text: "Regular GROUP BY collapses all rows into one. Window functions add a calculation to each row while KEEPING all the rows!\n\nImagine ranking every student in the className — you want to see all students AND their rank. GROUP BY would only give you one row per rank!" },
        code: { label: "-- Window functions (OVER clause)", content: `-- ROW_NUMBER — rank each row
SELECT
    name, age, grade,
    ROW_NUMBER() OVER (ORDER BY age DESC) AS age_rank
FROM students;
-- Alice|10|5th|3  (everyone gets a unique rank)
-- Bob|11|6th|2
-- Diana|12|7th|1

-- RANK — same value gets same rank (gaps in numbering)
-- DENSE_RANK — same value gets same rank (no gaps)

-- PARTITION BY — rank WITHIN groups
SELECT
    name, grade, age,
    ROW_NUMBER() OVER (
        PARTITION BY grade  -- restart ranking for each grade!
        ORDER BY age DESC
    ) AS rank_in_grade
FROM students;

-- Running total (cumulative sum)
SELECT
    date, amount,
    SUM(amount) OVER (ORDER BY date) AS running_total
FROM sales;

-- Moving average (last 3 days)
SELECT
    date, amount,
    AVG(amount) OVER (
        ORDER BY date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3day
FROM daily_sales;

-- LAG and LEAD — look at previous/next rows!
SELECT
    date, revenue,
    LAG(revenue, 1)  OVER (ORDER BY date) AS prev_day_revenue,
    LEAD(revenue, 1) OVER (ORDER BY date) AS next_day_revenue,
    revenue - LAG(revenue,1) OVER (ORDER BY date) AS day_over_day_change
FROM daily_revenue;` },
        quiz: { q: "What makes window functions different from GROUP BY?", options: [
          { t: "Window functions are faster", c: false, f: "Speed isn't the key difference — the output structure is!" },
          { t: "GROUP BY collapses rows into one per group. Window functions add a calculation to EACH row while keeping all rows.", c: true, f: "🎉 Exactly! OVER (PARTITION BY ...) is like GROUP BY that doesn't collapse your rows — you get every row PLUS the aggregated calculation!" },
          { t: "Window functions only work with dates", c: false, f: "Window functions work with any data — numbers, text, dates, anything you can aggregate." }
        ]}
      }
    ]
  },
  {
    id: 10, num: "11", emoji: "🗺️",
    level: "Advanced", levelColor: "#fb923c",
    title: "Views, Functions & Stored Procedures",
    desc: "Save complex queries, add custom logic, and automate with triggers.",
    sections: [
      {
        title: "Views — Save Complex Queries",
        analogy: { emoji: "📺", title: "Like a saved TV channel", text: "Instead of typing your complicated JOIN query every single time, save it as a VIEW. A view looks like a table but it's really a stored query that runs fresh each time you access it!" },
        code: { label: "-- Views", content: `-- Create a view
CREATE VIEW student_course_summary AS
SELECT
    s.name   AS student_name,
    s.email,
    c.name   AS course_name,
    t.name   AS teacher_name,
    e.grade,
    e.enrolled_at
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses  c ON e.course_id  = c.id
JOIN teachers t ON c.teacher_id = t.id;

-- Now use it like a table!
SELECT * FROM student_course_summary WHERE grade = 'A';
SELECT student_name, COUNT(*) FROM student_course_summary
GROUP BY student_name;

-- Updatable view (for simple views on one table)
CREATE VIEW active_students AS
SELECT * FROM students WHERE is_active = true
WITH CHECK OPTION;  -- prevents inserting non-active through this view

-- Materialized view (stores the results physically — faster reads!)
CREATE MATERIALIZED VIEW monthly_stats AS
SELECT
    DATE_TRUNC('month', created_at) AS month,
    COUNT(*) AS new_users
FROM users
GROUP BY 1;

-- Refresh when data changes:
REFRESH MATERIALIZED VIEW monthly_stats;
-- Add CONCURRENTLY to refresh without locking:
REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_stats;` }
      },
      {
        title: "Functions & Triggers",
        code: { label: "-- Custom functions and triggers", content: `-- Create a custom function (PL/pgSQL language)
CREATE OR REPLACE FUNCTION get_student_gpa(p_student_id INTEGER)
RETURNS DECIMAL AS $$
DECLARE
    v_gpa DECIMAL;
BEGIN
    SELECT AVG(
        CASE grade
            WHEN 'A+' THEN 4.3
            WHEN 'A'  THEN 4.0
            WHEN 'A-' THEN 3.7
            WHEN 'B+' THEN 3.3
            WHEN 'B'  THEN 3.0
            ELSE 2.0
        END
    )
    INTO v_gpa
    FROM enrollments
    WHERE student_id = p_student_id;

    RETURN COALESCE(v_gpa, 0.0);
END;
$$ LANGUAGE plpgsql;

-- Use your function:
SELECT name, get_student_gpa(id) AS gpa FROM students;

-- TRIGGER — automatically run code when data changes!
-- Step 1: Create the trigger function
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();  -- set updated_at to current time
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 2: Attach trigger to a table
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON users          -- fires before every UPDATE
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Now every time you UPDATE a user row,
-- updated_at is automatically set to NOW()!` }
      }
    ]
  },
  {
    id: 11, num: "12", emoji: "👥",
    level: "Advanced", levelColor: "#fb923c",
    title: "Users, Roles & Security",
    desc: "Control who can do what. Essential for production databases.",
    sections: [
      {
        title: "PostgreSQL Security Model",
        analogy: { emoji: "🏢", title: "Like office building access levels", text: "A CEO can access everything.\nA manager can access their department.\nAn intern can only access their own desk.\n\nPostgreSQL has the same system with ROLES and PRIVILEGES!" },
        code: { label: "-- Users, roles, and permissions", content: `-- Create a new user (role with login)
CREATE USER app_user WITH PASSWORD 'securepassword123!';

-- Create a role (group of permissions)
CREATE ROLE read_only;
CREATE ROLE read_write;

-- Grant permissions to roles
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO read_write;

-- Grant role to user
GRANT read_only TO app_user;

-- Specific table permissions
GRANT SELECT ON students TO app_user;
GRANT INSERT, UPDATE ON orders TO app_user;

-- Revoke permissions
REVOKE DELETE ON orders FROM app_user;

-- Row Level Security (RLS) — users only see THEIR data!
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_own_posts ON posts
    USING (user_id = current_user_id());  -- each user sees only their posts!

-- See all users
\\du

-- See permissions on a table
\\dp students

-- Connect as specific user (psql)
-- psql -U app_user -d myschool` }
      }
    ]
  },
  {
    id: 12, num: "13", emoji: "🚀",
    level: "Pro", levelColor: "#a78bfa",
    title: "Performance & Query Optimization",
    desc: "EXPLAIN ANALYZE, query planning, vacuuming, and making PostgreSQL blazing fast.",
    sections: [
      {
        title: "EXPLAIN ANALYZE — See Inside PostgreSQL's Brain",
        analogy: { emoji: "🩺", title: "Like an X-ray for your query", text: "EXPLAIN ANALYZE is the most powerful debugging tool in PostgreSQL. It shows you EXACTLY what PostgreSQL does to answer your query — step by step — including how long each step takes!" },
        code: { label: "-- EXPLAIN ANALYZE", content: `-- See the query plan (doesn't run the query)
EXPLAIN SELECT * FROM students WHERE grade = '5th';

-- Run it AND show the plan with actual timing
EXPLAIN ANALYZE SELECT * FROM students WHERE grade = '5th';

-- Full output with more detail
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT s.name, COUNT(e.course_id)
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
GROUP BY s.id, s.name;

-- What to look for in the output:
-- "Seq Scan" = reading every row (SLOW for big tables!)
-- "Index Scan" = using an index (FAST!)
-- "Hash Join", "Nested Loop" = join methods
-- "cost=X..Y" = estimated cost (rows=N)
-- "actual time=X..Y" = real timing
-- "rows=N" = actual rows returned

-- If you see Seq Scan on a big table with WHERE:
-- → You need an index!
-- If rows estimate is WAY off from actual:
-- → Run ANALYZE to update statistics:
ANALYZE students;` },
        code2: { label: "-- VACUUM — PostgreSQL's housekeeping", content: `-- PostgreSQL uses MVCC (Multi-Version Concurrency Control)
-- When you UPDATE/DELETE, old row versions are kept temporarily
-- VACUUM cleans up these dead rows

-- Manual vacuum (rarely needed, autovacuum handles this)
VACUUM students;

-- Vacuum AND update query planner statistics
VACUUM ANALYZE students;

-- Full vacuum (reclaims disk space, but locks table!)
VACUUM FULL students;

-- Check autovacuum status
SELECT
    schemaname, tablename,
    n_live_tup, n_dead_tup,
    last_autovacuum, last_autoanalyze
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;

-- Check slow queries (pg_stat_statements extension)
SELECT
    query,
    calls,
    total_exec_time / calls AS avg_ms,
    rows / calls AS avg_rows
FROM pg_stat_statements
ORDER BY avg_ms DESC
LIMIT 10;` },
        quiz: { q: "You run EXPLAIN ANALYZE and see 'Seq Scan on users (rows=5000000)'. Your WHERE clause is 'WHERE email = $1'. What should you do?", options: [
          { t: "Rewrite the query in Python instead", c: false, f: "The language doesn't matter — the problem is the missing index!" },
          { t: "CREATE INDEX idx_users_email ON users(email);", c: true, f: "🎉 Exactly! A sequential scan on 5 million rows for a single email lookup is a disaster. An index will change this from O(n) to O(log n) — milliseconds instead of seconds!" },
          { t: "Add more columns to SELECT", c: false, f: "Adding more columns would make it WORSE. Less data + proper index = faster!" }
        ]}
      }
    ]
  },
  {
    id: 13, num: "14", emoji: "🌐",
    level: "Pro", levelColor: "#a78bfa",
    title: "JSON, Arrays & Full-Text Search",
    desc: "PostgreSQL's superpowers: flexible schema, array operations, and search.",
    sections: [
      {
        title: "JSON & JSONB — Flexible Data",
        code: { label: "-- Working with JSONB data", content: `-- Create table with JSONB
CREATE TABLE products (
    id       SERIAL PRIMARY KEY,
    name     TEXT,
    specs    JSONB
);

INSERT INTO products VALUES
(1, 'Laptop', '{"ram": 16, "cpu": "M3", "ports": ["USB-C", "HDMI"]}'),
(2, 'Phone',  '{"ram": 8,  "cpu": "A17", "5g": true}');

-- Access JSONB fields
SELECT
    name,
    specs->>'cpu'    AS cpu,         -- text output
    specs->'ram'     AS ram,         -- JSON output
    (specs->>'ram')::INTEGER AS ram_num  -- cast to integer
FROM products;

-- Query inside JSONB
SELECT name FROM products
WHERE specs->>'cpu' = 'M3';

SELECT name FROM products
WHERE (specs->>'ram')::INTEGER >= 16;

-- Check if key exists
SELECT name FROM products WHERE specs ? '5g';

-- Array inside JSONB
SELECT name FROM products
WHERE specs->'ports' ? 'HDMI';  -- has HDMI port?

-- Update JSONB
UPDATE products
SET specs = specs || '{"storage": 512}'::JSONB  -- merge!
WHERE id = 1;

-- Index JSONB for speed
CREATE INDEX idx_products_specs ON products USING GIN(specs);
-- GIN index makes all JSONB queries fast!` }
      },
      {
        title: "Arrays & Full-Text Search",
        code: { label: "-- Arrays and full-text search", content: `-- Arrays in PostgreSQL
CREATE TABLE articles (
    id       SERIAL PRIMARY KEY,
    title    TEXT,
    tags     TEXT[],
    body     TEXT,
    tsv      TSVECTOR  -- for full-text search
);

-- Insert with arrays
INSERT INTO articles (title, tags, body)
VALUES (
    'Learning PostgreSQL',
    ARRAY['database', 'sql', 'postgres', 'beginner'],
    'PostgreSQL is a powerful open source database system...'
);

-- Query arrays
SELECT * FROM articles WHERE 'postgres' = ANY(tags);
SELECT * FROM articles WHERE tags @> ARRAY['sql', 'beginner'];
-- @> = contains ALL these elements

-- Array functions
SELECT array_length(tags, 1) AS tag_count FROM articles;
SELECT unnest(tags) AS tag FROM articles;  -- one row per tag!

-- FULL-TEXT SEARCH (way better than LIKE!)
-- Create a search index
UPDATE articles
SET tsv = to_tsvector('english', title || ' ' || body);

CREATE INDEX idx_articles_fts ON articles USING GIN(tsv);

-- Search!
SELECT title
FROM articles
WHERE tsv @@ to_tsquery('english', 'postgres & database');
-- Finds articles containing BOTH 'postgres' AND 'database'

-- With ranking (most relevant first!)
SELECT
    title,
    ts_rank(tsv, to_tsquery('postgresql & beginner')) AS rank
FROM articles
WHERE tsv @@ to_tsquery('postgresql & beginner')
ORDER BY rank DESC;` }
      }
    ]
  },
  {
    id: 14, num: "15", emoji: "🏆",
    level: "Master", levelColor: "#f59e0b",
    title: "Production & Best Practices",
    desc: "Partitioning, replication, backups, connection pooling — running PostgreSQL in the real world.",
    sections: [
      {
        title: "Table Partitioning",
        analogy: { emoji: "📂", title: "Like filing cabinets by year", text: "If you have 10 years of sales data (billions of rows), querying just this year is slow because PostgreSQL must look through all 10 years.\n\nPARTITIONING splits the data into separate physical chunks (one per year). Querying 2024 data now only touches the 2024 partition — 10x faster!" },
        code: { label: "-- Table partitioning by date", content: `-- Create partitioned table
CREATE TABLE sales (
    id          SERIAL,
    created_at  TIMESTAMPTZ NOT NULL,
    amount      DECIMAL(12,2),
    customer_id INTEGER
) PARTITION BY RANGE (created_at);

-- Create yearly partitions
CREATE TABLE sales_2023
    PARTITION OF sales
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE sales_2024
    PARTITION OF sales
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- PostgreSQL automatically routes inserts to right partition!
INSERT INTO sales VALUES (DEFAULT, '2024-06-15', 99.99, 1);
-- Goes into sales_2024 automatically ✨

-- Query is fast — only searches sales_2024 partition:
SELECT SUM(amount) FROM sales
WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';

-- Can also partition by list (e.g., region)
CREATE TABLE users (
    id      SERIAL,
    region  TEXT,
    name    TEXT
) PARTITION BY LIST (region);

CREATE TABLE users_us    PARTITION OF users FOR VALUES IN ('US', 'CA');
CREATE TABLE users_eu    PARTITION OF users FOR VALUES IN ('UK', 'DE', 'FR');
CREATE TABLE users_other PARTITION OF users DEFAULT;` }
      },
      {
        title: "The Master Checklist & What's Next",
        isChecklist: true,
        items: [
          { done: true, cat: "Foundation",    text: "SQL basics: SELECT, INSERT, UPDATE, DELETE" },
          { done: true, cat: "Foundation",    text: "Data types: TEXT, INTEGER, DECIMAL, TIMESTAMPTZ, JSONB" },
          { done: true, cat: "Foundation",    text: "Relationships: FOREIGN KEY, JOINs (INNER, LEFT, RIGHT, FULL)" },
          { done: true, cat: "Intermediate",  text: "Aggregation: COUNT, SUM, AVG, GROUP BY, HAVING" },
          { done: true, cat: "Intermediate",  text: "Constraints: NOT NULL, UNIQUE, CHECK, DEFAULT" },
          { done: true, cat: "Intermediate",  text: "Indexes: B-tree, GIN, partial indexes, EXPLAIN ANALYZE" },
          { done: true, cat: "Intermediate",  text: "Transactions: BEGIN, COMMIT, ROLLBACK, ACID" },
          { done: true, cat: "Advanced",      text: "Subqueries, CTEs (WITH clause), Recursive CTEs" },
          { done: true, cat: "Advanced",      text: "Window functions: ROW_NUMBER, RANK, LAG, LEAD, running totals" },
          { done: true, cat: "Advanced",      text: "Views & Materialized Views" },
          { done: true, cat: "Advanced",      text: "Functions (PL/pgSQL) & Triggers" },
          { done: true, cat: "Advanced",      text: "Security: Users, Roles, GRANT, REVOKE, Row Level Security" },
          { done: true, cat: "Pro",           text: "Performance: EXPLAIN ANALYZE, VACUUM, pg_stat_statements" },
          { done: true, cat: "Pro",           text: "JSONB operations, Array types, Full-text search (tsvector)" },
          { done: true, cat: "Pro",           text: "Table Partitioning (RANGE, LIST, HASH)" },
          { done: false, cat: "Next Steps",   text: "Replication: streaming replication, read replicas" },
          { done: false, cat: "Next Steps",   text: "Connection pooling: PgBouncer or Pgpool-II" },
          { done: false, cat: "Next Steps",   text: "Backup & restore: pg_dump, pg_restore, continuous archiving" },
          { done: false, cat: "Next Steps",   text: "Extensions: PostGIS (GIS), pgcrypto, pg_trgm, TimescaleDB" },
          { done: false, cat: "Next Steps",   text: "Logical replication & Change Data Capture (CDC)" },
        ]
      }
    ]
  }
];