 export default {
    name: 'ingredients',
    title: 'Ingredients',
    type: 'object',
    fields: [
        {
            name: 'ingredientTitle',
            title: 'Ingredient Title',
            type: 'string',
        },
        {
            name: 'ingredientPic',
            title: 'Ingredient Pic',
            type: 'pic',
        },
        {
            name: 'ingredientText',
            title: 'Ingredient Text',
            type: 'blockContent',
        },
    ],
}