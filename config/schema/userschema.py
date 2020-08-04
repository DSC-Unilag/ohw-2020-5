from jsonschema import validate
from jsonschema.exceptions import ValidationError, SchemaError

userRegSchema = {
    "type":"object",
    "properties":{
        "email":{
            "type":"string",
            "format":"email",
            "minLength":8
        },
        "username":{
            "type":"string",
            "maxLength":15,
            "minLength":3
        },
        "password":{
            "type":"string",
            "minLength":8
        },
        "address":{
            "type":"string"
        },
    },
    "required":["username","email","password"],
    "additionalProperties":False
}

userLoginSchema = {
    "type":"object",
    "properties":{
        "email":{
            "type":"string",
            "format":"email"
        },
        "password":{
            "type":"string"
        },
    },
    "required":["email","password"],
    "additionalProperties":False
}

def validate_reg(user):
    try:
        validate(user, userRegSchema)
        return {"msg":"success"}
    except SchemaError as e:
        return {"msg":"error","error":e.message}
    except ValidationError as e:
        p = list(e.schema_path)
        print(p)
        print(len(p))
        if len(p) > 1:
            if p[1] == 'password' and p[2] == 'minLength':
                error_message = "Password too short, minimum length of 8"
                return {"msg":"error","error":error_message}
            if p[1] == 'username':
                if p[2] == 'minLength':
                    error_message = "Username too short, minimum of 3 characters"
                    return {"msg":"error","error":error_message}
                if p[2] == 'maxLength':
                    error_message = "Username too long, max of 15 characters"
                    return {"msg":"error","error":error_message}
        return {"msg":"error","error":e.message}

def validate_login(user):
    try:
        validate(user, userLoginSchema)
        return {"msg":"success"}
    except SchemaError as e:
        return {"msg":"error","error":e.message}
    except ValidationError as e:
        return {"msg":"error","error":e.message}

if __name__ == "__main__":
    data = validate_reg({
	"email":"roylayindeay0@gmail.com",
	"username":"royayo",
	"password":"12dkmdd;dl;ddl",
    "hello":"world"
    })
    print(data)