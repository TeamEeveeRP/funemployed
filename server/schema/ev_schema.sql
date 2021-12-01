DROP TABLE Users;
DROP TABLE JobCard;

CREATE TABLE Users (
  "_id" bigserial NOT NULL,
  "name" varchar NOT NULL,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  PRIMARY KEY ("_id")
);

CREATE TABLE JobCard (
  "_id" bigserial NOT NULL,
  "user_id" bigserial NOT NULL,
  "job_title" varchar NOT NULL,
  "company" varchar NOT NULL,
  "link" varchar NOT NULL,
  "status" varchar NOT NULL,
  "date_applied" varchar,
  PRIMARY KEY ("_id"),
  FOREIGN KEY ("user_id") REFERENCES Users("_id")
);

CREATE TABLE Sessions (
  "_id" bigserial NOT NULL,
  "user_id" bigserial NOT NULL,
  PRIMARY KEY ("_id"),
  FOREIGN KEY ("user_id") REFERENCES Users("_id")
);


INSERT INTO Users VALUES (1, 'Sean', 'sean', 'pass');
INSERT INTO Users VALUES (2, 'Alex', 'alex', 'pass');

INSERT INTO JobCard VALUES (1, 1, 'CEO', 'Codesmith', 'url', 'Applied'  );
INSERT INTO JobCard VALUES (2, 2, 'CEO', 'Codesmith', 'url', 'Applied'  );
INSERT INTO JobCard (user_id, job_title, company, link, status) VALUES ( 2, 'CEO', 'Facebook', 'facebook.com/ceo', 'Offered');

