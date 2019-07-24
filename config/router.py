from app import app
from controllers import recipes

app.register_blueprint(recipes.api, url_prefix='/api')
