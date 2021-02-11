import { createBreakpoint } from 'react-use'

export const useMobile = () => {
    const useMobile = createBreakpoint({
        mobile: 0,
        tablet: 1280,
        desktop: 1440,
    })
    return useMobile()
}