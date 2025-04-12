-- Artifacts table
CREATE TABLE artifacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  era VARCHAR(100),
  image_url VARCHAR(255), -- Placeholder for file storage
  created_at TIMESTAMP DEFAULT NOW()
);

-- Metadata table (provenance, restoration, etc.)
CREATE TABLE metadata (
  id SERIAL PRIMARY KEY,
  artifact_id INT REFERENCES artifacts(id),
  key VARCHAR(100), -- e.g., "provenance", "restoration"
  value TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Research contributions
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY,
  artifact_id INT REFERENCES artifacts(id),
  user_id INT, -- References a users table
  content TEXT,
  status VARCHAR(50), -- pending, approved, rejected
  created_at TIMESTAMP DEFAULT NOW()
);