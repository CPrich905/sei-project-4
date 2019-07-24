from app import app, db
from models.recipe import Recipe
from models.user import UserSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    user, errors = user_schema.load({
        'username': 'Charlie',
        'email': 'charlie@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    omelette = Recipe(
        name='Cheese and Spinach Omlette',
        cuisine='French',
        ingredients='[ "3 large eggs", "1 handful grated cheese of your choice", "small knob of butter", "salt & pepper to taste"]',
        instructions='''1. Whisk three large eggs in a bowl, salt and pepper to taste
        2. Grate the cheese and wash the spinach (if required)
        3. Heat the butter in a large frying pan over a medium heat. When the butter is fully melted and just starting to bubble, pour in the eggs. Ensure the mixture spreads evenly across the pan. Use a spatula to lift the edges slightly to let any liquid run under the omlette.
        4. When the base of the omlette is set but the top is still runny, add the cheese and allow to melt.
        5. Carefully lift one edge of the omlette - the underneath should be lightly browned. Add the spinach, fold the omlette in half and serve immediately.''',
        img='img.url',
        video='video.link',
    )
    tuna_salad = Recipe(
        name='Tuna pasta salad',
        cuisine='French',
        ingredients='[ "200g dried pasta (approx 400g cooked)", "2 handfuls fresh rocket", "10 Peppadew or other sweet peppers", "150g cherry tomatoes", "Olive oil and balsamic for dressing"]',
        instructions='''1. Cook the pasta according to packet instructions, then rinse in cold water.
        2. Cut the tomatoes in half, slice the peppers and add all the ingredients to a large mixing bowl.
        3. Dress with oil and vinegar, then serve.''',
        img='img.url',
        video='video.link',
    )


    db.session.add(user)

    db.session.add(omelette)
    db.session.add(tuna_salad)

    db.session.commit()
