Simple NODEJS API with Postgres on AWS RDS. Not used with any additional project but for my reference.

See all users in database

    http://localhost:3000/users

See user by ID

    http://localhost:3000/users/1

Add a new user with the name Elaine and email elaine@example.com.
    
    curl --data "name=Elaine&email=elaine@example.com" http://localhost:3000/users

Update the user with ID 1 to have the name Kramer and email kramer@example.com.

    curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" http://localhost:3000/users/1

Delete the user with id 1.

    curl -X "DELETE" http://localhost:3000/users/1

Resource: https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/