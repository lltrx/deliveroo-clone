export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error("Plase enter a value"),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: { type: 'dish' } }],
    },
  ],
}
