from marshmallow import fields
from app import db, ma
from .base import BaseModel, BaseSchema

class Tag(db.Model, BaseModel):
    __tablename__ = 'tags'

    name = db.Column(db.String(40), unique=True)

class TagSchema(ma.ModelSchema, BaseSchema):

    recipes = fields.Nested('RecipeSchema', many=True, only=('name', 'id'))

    class Meta:
        model = Tag()
