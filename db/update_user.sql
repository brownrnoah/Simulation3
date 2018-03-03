INSERT INTO users (
    first_name varChar(40),
    last_name varChar(40),
    gender text,
    hair_color text,
    eye_color, text,
    hobby text,
    birthday_day int,
    birthday_month int,
    birthday_year int,
)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) 
