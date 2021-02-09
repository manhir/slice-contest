import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Layout } from '@/components/Layout'

import resolver from '../sm-resolver.js'

const Page = (props) => (
    <Layout>
        <SliceZone {...props} resolver={resolver} />
    </Layout>
)

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
    client: Client(),
    uid: () => 'home',
})

export default Page
