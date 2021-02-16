import Component from '.'
import model from './model'
import mocks from './mocks.json'
import { storiesOf } from '@storybook/react'
import { withKnobs,  boolean } from '@storybook/addon-knobs'

export default {
    title: 'Storybook Knobs',
    decorators: [withKnobs],
}

mocks.forEach((variation) => {
    storiesOf(model.name, Component).add(variation.name, () => (
        <Component slice={variation} oneSide={boolean('one side', false)} textLeft={boolean('text left', false)} />
    ))
})
