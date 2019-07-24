from flask import Blueprint, jsonify, request
from models.user import User, UserSchema
from lib.helpers import is_unique

api = Blueprint('auth', __name__)
user_schema = UserSchema()

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user, errors = user_schema.load(data)
    if not is_unique(model=User, key='username', value=data.get('username')):
        errors['username'] = errors.get('username', []) +['Username already exists, please choose another']
    if errors:
        return jsonify(errors), 422
    user.save()
    return jsonify({'message': 'Registration Successful'}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'Unauthorised'}), 401
    user = User.query.filter_by(email=data['email']).first()
    if not user or not user.validate_password(data['password']):
        return jsonify({'message': 'Unauthorised'}), 401

    return jsonify({
        'token': user.generate_token(),
        'message': f'Welcome back {user.username}, let\'s get cooking!'
    }), 200
