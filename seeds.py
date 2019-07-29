from app import app, db
from models.recipe import Recipe
from models.user import UserSchema
from models.cuisine import Cuisine
from models.tags import Tag


user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    charlie, errors = user_schema.load({
        'username': 'Charlie',
        'email': 'charlie@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })
    izzi, errors = user_schema.load({
        'username': 'Izzi',
        'email': 'izzi@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })
    george, errors = user_schema.load({
        'username': 'George',
        'email': 'george@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })
    cath, errors = user_schema.load({
        'username': 'Cath',
        'email': 'cath@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })
    david, errors = user_schema.load({
        'username': 'David',
        'email': 'david@email',
        'password': 'pass',
        'password_confirmation': 'pass'
    })

    french = Cuisine(name='French')
    thai = Cuisine(name='Thai')
    indonesian = Cuisine(name='Indonesian')
    chinese = Cuisine(name='Chinese')
    turkish = Cuisine(name='Turkish')
    italian = Cuisine(name='Italian')
    fusion = Cuisine(name='Fusion')
    moroccan = Cuisine(name='Moroccan')


    quick = Tag(name='Quick')
    student = Tag(name='Student')
    budget = Tag(name='Budget')
    family = Tag(name='Family')
    seasonal = Tag(name='Seasonal')
    summer = Tag(name='Summer')
    winter = Tag(name='Winter')
    spring = Tag(name='Spring')
    autumn = Tag(name='Autumn')
    picnic = Tag(name='Picnic')
    easy = Tag(name='Easy')
    slowcooker = Tag(name='Slow cooker')
    onepot = Tag(name='One-pot')

    omelette = Recipe(
        name='Cheese and Spinach Omelette',
        cuisine=[french],
        ingredients='["3 large eggs", "1 handful grated cheese of your choice", "small knob of butter", "salt & pepper to taste"]',
        chef=izzi,
        instructions='["1. Whisk three large eggs in a bowl, salt and pepper to taste", "2. Grate the cheese and wash the spinach (if required)", "3. Heat the butter in a large frying pan over a medium heat. When the butter is fully melted and just starting to bubble, pour in the eggs. Ensure the mixture spreads evenly across the pan. Use a spatula to lift the edges slightly to let any liquid run under the omlette.", "4. When the base of the omlette is set but the top is still runny, add the cheese and allow to melt.", "5. Carefully lift one edge of the omlette - the underneath should be lightly browned. Add the spinach, fold the omlette in half and serve immediately."]',
        img='https://www.cookforyourlife.org/wp-content/uploads/2018/08/Spinach-Omlette-696x465.jpg',
        video='video.link',
        liked_by=[charlie],
        tags=[quick, easy, budget],
        serves=1,
        prep_time_min=15,
        cook_time_min=15,
        description="A quick, easy lunch or dinner for any night of the week!"
    )
    tuna_salad = Recipe(
        name='Tuna pasta salad',
        cuisine=[italian],
        chef=charlie,
        ingredients='[ "200g dried pasta (approx 400g cooked)", "2 handfuls fresh rocket", "10 Peppadew or other sweet peppers", "150g cherry tomatoes", "Olive oil and balsamic for dressing"]',
        instructions='["1. Cook the pasta according to packet instructions, then rinse in cold water.", "2. Cut the tomatoes in half, slice the peppers and add all the ingredients to a large mixing bowl.", "3. Dress with oil and vinegar, then serve."]',
        img='http://cdn.recipes100.com/v/afe016c95b80f4910a368f8f5eb38754.jpg',
        video='video.link',
        liked_by=[izzi],
        tags=[quick, easy, budget, summer],
        serves=4,
        prep_time_min=15,
        cook_time_min=15,
        description="A delicious summer salad combining sweet peppers and peppery rocket for a light, fresh meal any day of the week - perfect to load into packed lunches too!"
    )
    jacket_feta = Recipe(
        name='Jacket Potato with feta and sumac',
        cuisine=[fusion],
        chef=george,
        ingredients='[ "1 baking potato", "2 tsp olive oil", "1/2 tsp garlic salt", "50g feta", "50g Greek yoghurt", "1 roasted red pepper (about 25g), finely chopped", "1/2 tsp sumac"]',
        instructions='["1. Heat oven to 220C/200C fan/ gas 6. Prick the potato all over with a fork and bake for 1 hr until it is golden outside and soft inside. Mix 1 tsp olive oil with the garlic salt. Cut a deep cross into the top of the jacket, drizzle the garlic oil into the cross and rub it all over the outside. Return to the oven and bake for 15 mins more until the edges are golden and crispy.", "2. Meanwhile, crumble the feta into a bowl, add the yogurt and whisk together until creamy. Stir in the red pepper with a good grind of black pepper and spoon the whipped feta into the jacket. Sprinkle with the sumac, drizzle over the remaining 1 tsp olive oil and scatter a few torn basil leaves on top, if you like."]',
        img='https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/01/jacket-potato.jpg?itok=jFmhmfQn',
        video='video.link',
        tags=[easy, budget, autumn],
        serves=1,
        prep_time_min=15,
        cook_time_min=45,
        description="A mediterranean twist on a British classic, the zesty sumac is a fantastic contrast to the creamy feta."
    )
    couscous_salad = Recipe(
        name='Summer couscous salad',
        cuisine=[fusion],
        chef=cath,
        ingredients='[ "250g couscous", "250ml vegetable stock, boiling", "400g can chickpeas, drained and rinsed", "1-2 tbsp vegetable or olive oil", "300g courgette, sliced on the slant", "300g small vine-ripened tomatoes, halved", "250g pack halloumi cheese, thickly sliced and then halved lengthways", "125ml olive oil", "3 tbsp lime juice", "2 large garlic cloves, finely chopped", "2 tbsp chopped fresh mint", "1/2 tsp sugar"]',
        instructions='["1. Tip the couscous into a bowl, pour the boiling stock over and mix well with a fork. Cover with a plate and leave for 4 minutes. Meanwhile, tip all the dressing ingredients into a bowl and mix well. Fluff up the couscous with a fork, stir in the chickpeas and follow with half the dressing. Mix well and pile on to a large serving dish.", "2. Heat 1 tbsp oil in a large frying pan and fry the courgette slices over a high heat for 2-3 minutes until dark golden brown. Lift out on to kitchen paper. Now put the tomatoes cut-side down into the pan, and cook for another couple of minutes until tinged brown on the underside. Top the couscous with the courgettes and then the tomatoes.", "3. If the pan is dry, pour in a little more oil and heat it up, then add the halloumi strips and fry for 2-3 minutes, turning them over from time to time, until crisp and sizzled brown. Pile on top of the tomatoes, and drizzle with the remaining dressing. Serve as soon as possible."]',
        img='https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--315542_12.jpg?itok=mvxVQelb',
        video='video.link',
        tags=[summer, family],
        serves=4,
        prep_time_min=45,
        description="A hearty couscous salad capturing the flavours of summer, this is perfect for a picnic lunch!"
    )
    veg_tagine = Recipe(
        name='Vegetable tagine with apricot quinoa',
        cuisine=[moroccan],
        chef=david,
        ingredients='[ "1 tsp coconut oil or olive oil", "1 red onion, chopped", "2 garlic cloves, crushed", "1/2 butternut squash (500g), chopped into large chunks", "2 red peppers, chopped", "400g can chickpeas, drained", "400g can chopped tomatoes", "500ml vegan vegetable stock (such as Marigold Vegan Bouillon Powder)", "1 tsp ground cinnamon", "1 tsp ground cumin", "2 tsp turmeric", "2 tsp paprika", "small bunch coriander, chopped", "small bunch mint, chopped, plus extra to serve", "pomegranate seeds, to serve (optional)", "280g quinoa", "80g dried apricots, chopped", "20g flaked almonds, toasted", "For the dressing", "4 tbsp tahini", "2 tsp preserved lemon, finely chopped, plus 2 tsp liquid from the jar", "6 tbsp almond milk"]',
        instructions='[ "1. Heat the oil in a large frying pan and fry the onion over a medium heat for 3 mins. Add the garlic and butternut squash, and cook for a further 7 mins.", "2. Add the remaining vegetables and continue to fry for 3 mins before adding the chickpeas, tomatoes and stock, along with the spices and seasoning. Simmer for 30 mins, uncovered. Meanwhile, put 750ml water in a small saucepan, bring to a simmer, then add the quinoa and cook for 20 mins. When cooked, stir in the apricots and almonds, plus a pinch of salt.","3. To make the tahini dressing, whisk together all the ingredients in a small bowl. Season with a pinch of salt.", "4. Serve the quinoa with the tagine, and drizzle the tahini dressing over the top. Scatter over some chopped coriander and mint and the pomegranate seeds, if using, to finish." ]',
        img='https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/03/vege-tagine-with-apricot-quinoa.jpg?itok=bKeby8k5',
        video='video.link',
        tags=[summer, family],
        serves=4,
        prep_time_min=30,
        cook_time_min=45,
        description="This fantasticly colourful summer dish is not only a great source of iron and contains all of your recommended 5 a day, but it's also vegan... not that you'd know from tasting it!"
    )


    db.session.add(charlie)
    db.session.add(izzi)
    db.session.add(george)
    db.session.add(cath)
    db.session.add(david)

    db.session.add(quick)
    db.session.add(student)
    db.session.add(budget)
    db.session.add(family)
    db.session.add(seasonal)
    db.session.add(summer)
    db.session.add(winter)
    db.session.add(spring)
    db.session.add(autumn)
    db.session.add(picnic)
    db.session.add(easy)
    db.session.add(slowcooker)
    db.session.add(onepot)

    db.session.add(french)
    db.session.add(thai)
    db.session.add(indonesian)
    db.session.add(chinese)
    db.session.add(turkish)
    db.session.add(italian)
    db.session.add(moroccan)

    db.session.add(omelette)
    db.session.add(tuna_salad)
    db.session.add(jacket_feta)
    db.session.add(couscous_salad)
    db.session.add(veg_tagine)

    db.session.commit()
