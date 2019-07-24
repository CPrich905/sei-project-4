from flask import Blueprint, jsonify, request
from models.recipe import Recipe, RecipeSchema


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
def create():
    data = request.get_json()
    recipe, errors = recipe_schema.load(data)
    if errors:
        return jsonify(errors), 422
    recipe.save()
    return recipe_schema.jsonify(recipe), 201

# EDIT
@api.route('/recipes/<int:recipe_id>', methods=['PUT'])
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
def delete(recipe_id):
    recipe = Recipe.query.get(recipe_id)
    if not recipe:
        return jsonify({'message': 'Not Found'}), 422
    recipe.remove()
    return '', 204
