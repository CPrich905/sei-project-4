from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User

class Recipe(db.Model, BaseModel, BaseSchema):

    __tablename__ = 'recipes'

    name = db.Column(db.String(40), nullable=False, unique=True)
    cuisine = db.Column(db.String(40))
    ingredients = db.Column(db.String(), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(160))
    img = db.Column(db.String(160))
    video = db.Column(db.String(160))
    chef_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    chef = db.relationship('User', backref='created_recipes')

class RecipeSchema(ma.ModelSchema):
    class Meta:
        model = Recipe

    chef = fields.Nested('UserSchema', only=('id', 'username'))
