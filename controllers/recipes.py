from flask import Blueprint, jsonify, request, g
from models.recipe import Recipe, RecipeSchema, Cuisine
from lib.secure_route import secure_route
from lib.helpers import is_unique

api = Blueprint('recipes', __name__)

recipe_schema = RecipeSchema()

# INDEX
@api.route('/recipes', methods=['GET'])
def index():
    recipes = Recipe.query.all()
    return recipe_schema.jsonify(recipes, many=True), 200

# SHOW
@api.route('/recipes/<int:recipe_id>', methods=['GET'])
def show(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    if not recipe:
        return jsonify({'message': 'Not Found'}), 404
    return recipe_schema.jsonify(recipe), 200

# CREATE
@api.route('/recipes', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    recipe, errors = recipe_schema.load(data)
    if not is_unique(model=Recipe, key='name', value=data.get('name')):
        errors['name'] = errors.get('name', []) +['Recipe may already exist - please check against current database or re-name your recipe']
    if errors:
        return jsonify(errors), 422
    # Adding cuisine
    cuisines = data['cuisines_id']
    for cuisine in cuisines:
        recipe.cuisine.append(Cuisine.query.get(cuisine))
    # Set current user as chef
    recipe.chef = g.current_user

    recipe.save()
    return recipe_schema.jsonify(recipe), 201

# EDIT
@api.route('/recipes/<int:recipe_id>', methods=['PUT'])
@secure_route
def update(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    if not recipe:
        return jsonify({'message': 'Not Found'}), 404
    data = request.get_json()
    recipe, errors = recipe_schema.load(data, instance=recipe, partial=True)
    if errors:
        return jsonify({'message': 'Not Found'}), 422
    recipe.save()
    return recipe_schema.jsonify(recipe), 202

# DELETE
@api.route('/recipes/<int:recipe_id>', methods=['DELETE'])
@secure_route
def delete(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    if not recipe:
        return jsonify({'message': 'Not Found'}), 422
    recipe.remove()
    return '', 204
