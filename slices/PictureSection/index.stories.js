import Component from '.'
import model from './model'
import mocks from './mocks.json'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

export default {
    title: 'Storybook Knobs',
    decorators: [withKnobs],
}

const options = {
    red: 'var(--color-red)',
    black: 'var(--color-black)',
    white: 'var(--color-white)',
}

mocks.forEach((variation) => {
    storiesOf(model.name, Component).add(variation.name, () => (
        <Component
            slice={variation}
            knobColor={boolean('override colors with knobs', false)}
            colorText={select('text color', options, options.black)}
            colorBg={select('background color', options, options.red)}
        />
    ))
})
