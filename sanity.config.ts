import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {nlNLLocale} from '@sanity/locale-nl-nl'

import {schemaTypes} from './schemaTypes'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: '920ynppu',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    nlNLLocale(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'nl', title: 'Dutch'},
      ],
      defaultLanguages: ['nl'],
      fieldTypes: ['string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
