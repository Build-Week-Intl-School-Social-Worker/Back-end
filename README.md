# School Social Worker API Documentation

base URL: https://school-social-worker.herokuapp.com/

## Authentication
### Registration:
POST "/auth/register"

Request Body:
```
    {
        name: String, 
        role_id: Integer, 
        email: String, 
        phone: String, 
        password: String, 
        org_name: String
    }
```

### Login
POST "/auth/login"

Request Body:
```
    {
        "email": String
        "password": String,
    }
```

## Student
 
 ### Create Student:
 POST ``` https://school-social-worker.herokuapp.com/api/students```

 Request Body:
 ```
    {
        name: String,
        age: Integer,
        grade: String,
        image: null,
        bio: String,
        status: String,
        insurance_card: Boolean,
        expire_date: String,
        birth_cert: Boolean,
        special_needs: String,
        child_rep: String,
        child_rep_phone: String,
        child_rep_email: String
    }
 ```

### Update Student
PUT to ```https://school-social-worker.herokuapp.com/api/students/:id```

Request Body:
```
    {
        name: String,
        age: Integer,
        grade: String,
        image: null,
        bio: String,
        status: String,
        insurance_card: Boolean,
        expire_date: String,
        birth_cert: Boolean,
        special_needs: String,
        child_rep: String,
        child_rep_phone: String,
        child_rep_email: String
    }
```