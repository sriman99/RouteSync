# from pymongo import MongoClient
# from motor.motor_asyncio import AsyncIOMotorClient
# # MongoDB connection URI (adjust as needed)
# MONGO_URI = "mongodb://localhost:27017/"
# client = MongoClient(MONGO_URI)
# db = client['route_sync_db']  # Use your database name
# users_collection = db['users']  # Collection for storing user data


from motor.motor_asyncio import AsyncIOMotorClient

# Initialize database connection
client = AsyncIOMotorClient('mongodb://localhost:27017')  # Adjust URI as needed
db = client['route_sync_db']
users_collection = db['users']
