CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name varChar(40),
    last_name varChar(40),
    gender text,
    hair_color text,
    eye_color, text,
    hobby text,
    birthday_day int,
    birthday_month int,
    birthday_year int,
    auth_id text
)