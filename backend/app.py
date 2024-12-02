# from fastapi import FastAPI, HTTPException, Depends
# from pydantic import EmailStr
# from models import UserCreate, UserLogin
# from crud import create_user, get_user_by_email, verify_password
# from auth import create_access_token, verify_token
# from pymongo import MongoClient
# import logging

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)
# logger = logging.getLogger(__name__)

# # MongoDB connection URI
# MONGO_URI = 'mongodb://localhost:27017/'
# client = MongoClient(MONGO_URI)

# app = FastAPI()
# # Set the logging level to INFO to suppress debug logs
# logging.basicConfig(level=logging.INFO)
# logging.getLogger('pymongo').setLevel(logging.WARNING)

# # Connect to MongoDB
# client = MongoClient('mongodb://localhost:27017')

# # Check connection status
# try:
#     client.admin.command('ping')
#     logging.info("MongoDB connection successful.")
# except Exception as e:
#     logging.error("MongoDB connection failed: %s", e)


# @app.get("/")
# def read_root():
#     return {"message": "Welcome to RouteSync!"}
# @app.post("/signup")
# def signup(user: UserCreate):
#     if get_user_by_email(user.email):
#         raise HTTPException(status_code=400, detail="Email already registered")
    
#     user_id = create_user(user)
#     return {"message": "User created successfully", "user_id": user_id}

# @app.post("/signin")
# def signin(user: UserLogin):
#     db_user = get_user_by_email(user.email)
#     if not db_user or not verify_password(user.password, db_user["password"]):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
    
#     access_token = create_access_token(data={"sub": user.email})
#     return {"access_token": access_token, "token_type": "bearer"}

# from fastapi import FastAPI, HTTPException
# from models import UserCreate, UserLogin
# from crud import create_user, get_user_by_email, verify_password
# from auth import create_access_token
# import logging
# from pymongo import MongoClient
# from fastapi.middleware.cors import CORSMiddleware

# # Configure logging
# logging.basicConfig(level=logging.DEBUG)
# logger = logging.getLogger(__name__)

# # MongoDB connection URI
# MONGO_URI = 'mongodb://localhost:27017/'
# client = MongoClient(MONGO_URI)

# app = FastAPI()
# # Set the logging level to INFO to suppress debug logs
# logging.basicConfig(level=logging.INFO)
# logging.getLogger('pymongo').setLevel(logging.WARNING)

# # Connect to MongoDB
# client = MongoClient('mongodb://localhost:27017')

# # Check connection status
# try:
#     client.admin.command('ping')
#     logging.info("MongoDB connection successful.")
# except Exception as e:
#     logging.error("MongoDB connection failed: %s", e)

# app = FastAPI()

# # Add CORS middleware to allow your frontend to communicate with the backend
# origins = ["*"] # Add your deployed frontend domain


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# @app.get("/")
# def read_root():
#     return {"message": "Welcome to RouteSync!"}

# @app.post("/signup")
# def signup(user: UserCreate):
#     if get_user_by_email(user.email):
#         raise HTTPException(status_code=400, detail="Email already registered")
#     user_id = create_user(user)
#     return {"message": "User created successfully", "user_id": user_id}

# @app.post("/signin")
# def signin(user: UserLogin):
#     db_user = get_user_by_email(user.email)
#     if not db_user or not verify_password(user.password, db_user["password"]):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
#     access_token = create_access_token(data={"sub": user.email})
#     return {"access_token": access_token, "token_type": "bearer", "user_id": str(db_user["_id"]),"message": {"User signed in successfully"}}


from fastapi import FastAPI, HTTPException
from models import UserCreate, UserLogin
from crud import create_user, get_user_by_email, verify_password
from auth import create_access_token
import logging
from fastapi.encoders import jsonable_encoder
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# MongoDB connection URI
MONGO_URI = 'mongodb://localhost:27017/'
client = MongoClient(MONGO_URI)

app = FastAPI()
# Set the logging level to INFO to suppress debug logs
logging.basicConfig(level=logging.INFO)
logging.getLogger('pymongo').setLevel(logging.WARNING)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017')

# Check connection status
try:
    client.admin.command('ping')
    logging.info("MongoDB connection successful.")
except Exception as e:
    logging.error("MongoDB connection failed: %s", e)

# Add CORS middleware to allow your frontend to communicate with the backend
origins = ["*"]  # Adjust this to match your frontend's domain in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to RouteSync!"}

@app.post("/signup")
async def signup(user: UserCreate):
    # Ensure this function is async if it's making any database calls
    db_user = await get_user_by_email(user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user_id = await create_user(user)
    return {"message": "User created successfully", "user_id": user_id}

@app.post("/signin")
async def signin(user: UserLogin):
    try:
        db_user = await get_user_by_email(user.email)
        if not db_user or not await verify_password(user.password, db_user["password"]):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        db_user_serialized = jsonable_encoder(db_user)
        access_token = await create_access_token(data={"sub": user.email})
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user_id": str(db_user["_id"]),  # Convert ObjectId to string
            "message": "User signed in successfully"
        }
    except Exception as e:
        logging.error(f"Error during signin: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")