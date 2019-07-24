import os

db_uri = os.getenv('DATABASE_URI', 'postgres://localhost:5432/recipes')
secret = os.getenv('SECRET', 'don\'t tell')
