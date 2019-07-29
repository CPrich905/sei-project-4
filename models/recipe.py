from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
# pylint: disable=W0611
from .cuisine import Cuisine
from .tags import Tag
from .user import User

likes = db.Table(
    'likes',
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

recipes_cuisines = db.Table(
    'recipes_cuisines',
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id')),
    db.Column('cuisine_id', db.Integer, db.ForeignKey('cuisines.id'))
)

recipes_tags = db.Table(
    'recipes_tags',
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id')),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'))
)

class Recipe(db.Model, BaseModel):

    __tablename__ = 'recipes'

    name = db.Column(db.String(40), nullable=False, unique=True)
    cuisine = db.relationship('Cuisine', secondary=recipes_cuisines, backref='recipes')
    tags = db.relationship('Tag', secondary=recipes_tags, backref='recipes')
    serves = db.Column(db.Integer)
    scalable = db.Column(db.String(10))
    prep_time_hr = db.Column(db.Integer)
    prep_time_min = db.Column(db.Integer)
    cook_time_hr = db.Column(db.Integer)
    cook_time_min = db.Column(db.Integer)
    ingredients = db.Column(db.String(), nullable=False)
    instructions = db.Column(db.String(), nullable=False)
    link = db.Column(db.String(160))
    img = db.Column(db.String(160))
    video = db.Column(db.String(160))
    chef_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    chef = db.relationship('User', backref='created_recipes')
    liked_by = db.relationship('User', secondary=likes, backref='likes')
    is_active = db.Column(db.Boolean, default=False)
    description = db.Column(db.String(200))

class RecipeSchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Recipe

    chef = fields.Nested('UserSchema', only=('id', 'username'))
    cuisine = fields.Nested('CuisineSchema', many=True, only=('id', 'name'))
    tags = fields.Nested('TagSchema', many=True, only=('id', 'name'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))
