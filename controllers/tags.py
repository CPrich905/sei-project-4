from flask import Blueprint
from models.tags import Tag, TagSchema

api = Blueprint('tags', __name__)

tag_sschema = TagSchema()

@api.route('/tags', methods=['GET'])
def index():
    tags = Tag.query.all()
    index_schema = TagSchema(exclude=('updated_at', 'created_at'))
    return index_schema.jsonify(tags, many=True), 200
