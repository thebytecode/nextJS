INSERT INTO users (NAME, email, PASSWORD) VALUES
('Alice Johnson', 'alice@example.com', SHA2('password123', 256)),
('Bob Smith', 'bob@example.com', SHA2('securepass', 256)),
('Charlie Brown', 'charlie@example.com', SHA2('mysecret', 256)),
('David Wilson', 'david@example.com', SHA2('pass1234', 256)),
('Emma Davis', 'emma@example.com', SHA2('qwerty', 256)),
('Frank Miller', 'frank@example.com', SHA2('hello123', 256)),
('Grace Lee', 'grace@example.com', SHA2('letmein', 256)),
('Henry Adams', 'henry@example.com', SHA2('welcome', 256)),
('Isla Scott', 'isla@example.com', SHA2('testpass', 256)),
('Jack White', 'jack@example.com', SHA2('mypassword', 256));