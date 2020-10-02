# BUILDING MULTI-USER BLOG USING MERN (NEXT.JS)

## 1. Initial setup

  # Create project folders
  > mkdir NEXT_BLOG_MULTIUSER
  > cd NEXT_BLOG_MULTIUSER
  > mkdir backend frontend
  > cd backend
  # Create package.json file for backend
  > E:\202009projects\MERN\rd\next_blog_multiuser\backend>npm init -y
  # Create README.MD and .gitignore files
  > E:\202009projects\MERN\rd\next_blog_multiuser> touch README.MD
  > E:\202009projects\MERN\rd\next_blog_multiuser> touch .gitignore

## 2. Install packages for the backend

  > E:\202009projects\MERN\rd\next_blog_multiuser\backend>npm install express mongoose body-parser cookie-parser morgan nodemon dotenv cors
  modified:   backend/README.MD
        new file:   backend/package-lock.json
        modified:   backend/package.json

## 3. Create server and .env files

