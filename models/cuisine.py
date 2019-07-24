from marshmallow import fields
from app import db, ma
from .base import BaseModel, BaseSchema

class Cuisine(db.Model, BaseModel):
    __tablename__ = 'cuisines'

    name = db.Column(db.String(40), unique=True)

class CuisineSchema(ma.ModelSchema, BaseSchema):

    recipes = fields.Nested('RecipeSchema', many=True, only=('name', 'id'))

    class Meta:
        model = Cuisine()
