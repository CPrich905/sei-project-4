from flask import Blueprint
from models.cuisine import Cuisine, CuisineSchema

api = Blueprint('cuisines', __name__)

cuisine_schema = CuisineSchema()

@api.route('/cuisines', methods=['GET'])
def index():
    cuisines = Cuisine.query.all()
    index_schema = CuisineSchema(exclude=('recipes', 'updated_at', 'created_at'))
    return index_schema.jsonify(cuisines, many=True), 200
