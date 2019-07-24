from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .cuisine import Cuisine
from .user import User

recipes_cuisines = db.Table(
    'recipes_cuisines',
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id')),
    db.Column('cuisine_id', db.Integer, db.ForeignKey('cuisines.id'))
)

class Recipe(db.Model, BaseModel):

    __tablename__ = 'recipes'

    name = db.Column(db.String(40), nullable=False, unique=True)
    cuisine = db.relationship('Cuisine', secondary=recipes_cuisines, backref='recipes')
    ingredients = db.Column(db.String(), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(160))
    img = db.Column(db.String(160))
    video = db.Column(db.String(160))
    chef_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    chef = db.relationship('User', backref='created_recipes')

class RecipeSchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Recipe

    chef = fields.Nested('UserSchema', only=('id', 'username'))
