CREATE TABLE user
(
    id uuid PRIMARY KEY,
    email VARCHAR(300) UNIQUE NOT NULL,
    nickname VARCHAR(64) UNIQUE NOT NULL,
    register_date TIMESTAMP NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE session
(
    id uuid PRIMARY KEY,
    fk_participant_id uuid REFERENCES user(id)
)
