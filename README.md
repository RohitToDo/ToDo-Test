#ToDo Test

## Installation

### 1. Clone the Repository
git clone https://github.com/RohitToDo/ToDo-Test.git
cd ToDo-Test

### 2. Install Dependencies
npm install

### 3. Run the Server
npx nodemon server.js


## API Endpoints

### Authentication

SignUp : POST http://localhost:5000/auth/signup
Login : POST http://localhost:5000/auth/login

### ToDO

Create ToDo :  POST http://localhost:5000/todos
List ToDo : GET http://localhost:5000/todos
Update ToDo : PUT http://localhost:5000/todos/6731f1b4476b77b5e63094a1 (MongoId)
Delete ToDo : DELETE http://localhost:5000/todos/6731fb6387eb4436ba358771 (MongoId)
