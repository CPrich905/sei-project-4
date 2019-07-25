from app import app
from controllers import recipes, auth, cuisines

app.register_blueprint(recipes.api, url_prefix='/api')
app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(cuisines.api, url_prefix='/api')
