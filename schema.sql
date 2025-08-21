-- Exonium Project Management Schema (MySQL)

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Team (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE TeamMembers (
    user_id INT,
    team_id INT,
    role VARCHAR(50),
    PRIMARY KEY (user_id, team_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE
);

CREATE TABLE Project (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    project_key VARCHAR(20) NOT NULL UNIQUE,
    team_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE SET NULL
);

CREATE TABLE Label (
    label_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(20)
);

CREATE TABLE Issue (
    issue_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50),
    priority VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    reporter_id INT,
    assignee_id INT,
    project_id INT,
    FOREIGN KEY (reporter_id) REFERENCES User(user_id) ON DELETE SET NULL,
    FOREIGN KEY (assignee_id) REFERENCES User(user_id) ON DELETE SET NULL,
    FOREIGN KEY (project_id) REFERENCES Project(project_id) ON DELETE CASCADE
);

CREATE TABLE IssueLabels (
    issue_id INT,
    label_id INT,
    PRIMARY KEY (issue_id, label_id),
    FOREIGN KEY (issue_id) REFERENCES Issue(issue_id) ON DELETE CASCADE,
    FOREIGN KEY (label_id) REFERENCES Label(label_id) ON DELETE CASCADE
);

CREATE TABLE Comment (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    issue_id INT,
    user_id INT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (issue_id) REFERENCES Issue(issue_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE SET NULL
);
