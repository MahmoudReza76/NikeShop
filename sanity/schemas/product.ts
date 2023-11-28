// schemas/pet.js
export default {
  name: 'product',
  type: 'document',
  title: 'product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'product images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'description of product ',
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'product slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID ',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',

      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
