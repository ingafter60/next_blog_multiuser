# BUILDING MULTI-USER BLOG USING MERN (NEXT.JS)

# 1. NODE API SETUP

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

  ## 3. Setup the server

    > E:\202009projects\MERN\rd\next_blog_multiuser\backend>touch server.js
    modified:   README.MD
          new file:   backend/.env
          modified:   backend/README.MD
          modified:   backend/package.json
          new file:   backend/server.js

  ## 4. POSTMAN and using Cors to communicate between Client and Server

    modified:   README.MD
          modified:   backend/README.MD
          modified:   backend/server.js

  ## 5. Setting up MongoDb as the database
    modified:   README.MD
          modified:   backend/.env
          modified:   backend/README.MD
          modified:   backend/server.js     

  ## 6. Separating routes and use it as middleware

    modified:   README.MD
          modified:   backend/README.MD
          new file:   backend/routes/route_blog.js
          modified:   backend/server.js

  ## 7. Controllers

    modified:   README.MD
          modified:   backend/README.MD
          new file:   backend/controllers/controller_blog.js
          modified:   backend/routes/route_blog.js
          modified:   backend/server.js


# 2. USER SIGN UP AND SIGN IN 

## 1. User model and schema

  modified:   .gitignore
        modified:   README.MD
        new file:   _lessonImages/2020-10-02_102321.png
        modified:   backend/README.MD
        new file:   backend/models/model_user.js

## 2. Signup route and controller setup

  modified:   .gitignore
        modified:   README.MD
        new file:   _sourcecodes/react-node-next-multi-user-blogging-platform
        new file:   backend/controllers/controller_auth.js
        new file:   backend/routes/route_auth.js
        modified:   backend/server.js

## 3. Installing packages for auth and blog

  > npm install express-validator jsonwebtoken express-jwt formidable lodash slugify string-strip-html
  modified:   README.MD
        modified:   backend/README.MD
        modified:   backend/package-lock.json
        modified:   backend/package.json