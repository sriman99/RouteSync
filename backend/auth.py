# from jose import JWTError, jwt
# from datetime import datetime, timedelta
# from pydantic import EmailStr
# import os

# SECRET_KEY = os.getenv("SECRET_KEY", "mysecretkey")
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 30

# def create_access_token(data: dict):
#     expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     to_encode = data.copy()
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded_jwt

# def verify_token(token: str):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         return payload
#     except JWTError:
#         return None

# import os
# import logging
# from jose import JWTError, jwt
# from datetime import datetime, timedelta

# SECRET_KEY = os.getenv("SECRET_KEY", "your_default_secret_key")
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 15  # Reduce token expiry time for better security

# async def create_access_token(data: dict):
#     expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     to_encode = data.copy()
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded_jwt

# async def verify_token(token: str):
#     try:
#         payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#         return payload
#     except JWTError as e:
#         logging.error(f"Token verification failed: {e}")
#         return None

import os
import logging
from jose import JWTError, jwt, ExpiredSignatureError
from datetime import datetime, timedelta

# Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your_default_secret_key")  # Default for local testing
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 15

async def create_access_token(data: dict):
    """
    Creates a JWT token with an expiration time.
    :param data: A dictionary of claims to include in the token.
    :return: Encoded JWT as a string.
    """
    try:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        to_encode = data.copy()
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        logging.info(f"Access token created for: {data.get('sub', 'unknown user')}")
        return encoded_jwt
    except Exception as e:
        logging.error(f"Error creating access token: {e}")
        raise


async def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except ExpiredSignatureError:
        logging.warning("Token expired.")
        return None
    except JWTError as e:
        logging.error(f"Token verification failed: {e}")
        return None

