# from models import UserCreate
# from bcrypt import hashpw, gensalt, checkpw
# from database import users_collection

# def create_user(user: UserCreate):
#     hashed_password = hashpw(user.password.encode('utf-8'), gensalt())
#     user_data = {
#         "username": user.username,
#         "email": user.email,
#         "password": hashed_password,  # Store as bytes
#     }
#     result = users_collection.insert_one(user_data)
#     return str(result.inserted_id)  # Convert ObjectId to string

# def get_user_by_email(email: str):
#     user = users_collection.find_one({"email": email})
#     if user:
#         user["_id"] = str(user["_id"])  # Convert ObjectId to string for serialization
#     return user

# def verify_password(plain_password: str, hashed_password: bytes):
#     return checkpw(plain_password.encode('utf-8'), hashed_password)



from models import UserCreate
from bcrypt import hashpw, gensalt, checkpw
from database import users_collection  # Make sure `users_collection` is set up for async use
from motor.motor_asyncio import AsyncIOMotorCollection

# Assuming `users_collection` is an instance of `AsyncIOMotorCollection`
# Update your `database.py` to use Motor's async client if needed.

async def create_user(user: UserCreate):
    hashed_password = hashpw(user.password.encode('utf-8'), gensalt())
    user_data = {
        "username": user.username,
        "email": user.email,
        "password": hashed_password,  # Store as bytes
    }
    result = await users_collection.insert_one(user_data)
    return str(result.inserted_id)  # Convert ObjectId to string

async def get_user_by_email(email: str):
    user = await users_collection.find_one({"email": email})
    # if user:
    #     user["_id"] = str(user["_id"])  # Convert ObjectId to string for serialization
    # return user
    if user:
        # Convert MongoDB document to dictionary
        return {**user}
    return None

async def verify_password(plain_password: str, hashed_password: bytes):
    return checkpw(plain_password.encode('utf-8'), hashed_password)
