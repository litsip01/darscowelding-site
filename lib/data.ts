import siteData from '@/data/site-data.json'

export interface City {
    id: string
    slug: string
    name: string
    province: string
    country: string
    isPrimary?: boolean
}

export interface Service {
    id: string
    slug: string
    name: string
    shortName: string
    description: string
}

export interface Industry {
    id: string
    slug: string
    name: string
    description: string
}

export interface Route {
    path: string
    template: string
    params: Record<string, string>
    seo: {
        title: string
        h1: string
        description: string
        targetKeywords?: string[]
    }
}

// Export data from JSON
export const brandName: string = siteData.brandName
export const domain: string = siteData.domain
export const tagline: string = siteData.tagline
export const contactInfo = siteData.contactInfo
export const cities: City[] = siteData.dataModel.cities
export const services: Service[] = siteData.dataModel.services
export const industries: Industry[] = siteData.dataModel.industries
export const routes: Route[] = siteData.routes as Route[]

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
    return cities.find(c => c.slug === slug)
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug)
}

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industries.find(i => i.slug === slug)
}

export function getRouteByPath(path: string): Route | undefined {
    const normalizedPath = path.endsWith('/') ? path : `${path}/`
    return routes.find(r => r.path === normalizedPath)
}

export function getCityRoutes(citySlug: string): Route[] {
    return routes.filter(r => r.params?.citySlug === citySlug)
}

export function getServiceRoutes(serviceSlug: string): Route[] {
    return routes.filter(r => r.params?.serviceSlug === serviceSlug)
}

export function getPrimaryCity(): City {
    return cities.find(c => c.isPrimary) || cities[0]
}
