import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Section } from '../../components/Section'

const h2 = {
    color: '#8592e0',
}

const MySlice = ({ slice }) => (
    <Section
        
    >
        {slice.primary.title ? (
            <RichText render={slice.primary.title} />
        ) : (
            <h2 style={h2}>ZDAROVA</h2>
        )}
        {slice.primary.description ? (
            <RichText render={slice.primary.description} />
        ) : (
            <p>desc lorem10</p>
        )}
    </Section>
)

export default MySlice
