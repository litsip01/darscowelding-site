import { cities, services } from '@/lib/data'
import Hero from '@/components/sections/Hero'
import ServiceCard from '@/components/sections/ServiceCard'
import CTA from '@/components/sections/CTA'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Flame, Wrench, Truck, Shield } from 'lucide-react'

const serviceIcons: Record<string, React.ReactNode> = {
    'mig-tig-welding': <Flame className="w-7 h-7" />,
    'structural-welding': <Wrench className="w-7 h-7" />,
    'mobile-welding': <Truck className="w-7 h-7" />,
    'fabrication': <Wrench className="w-7 h-7" />,
    'repairs-maintenance': <Shield className="w-7 h-7" />,
    'custom-metalwork': <Flame className="w-7 h-7" />,
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const city = cities.find(c => c.slug === slug)
    if (!city) return {}

    return {
        title: `Mobile Welding Services in ${city.name}, Alberta | Darsco Welding`,
        description: `Professional mobile welding and fabrication for ${city.name} businesses. On-site service, 24/7 emergency response, and certified welders. Call (780) 405-3244.`,
    }
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const city = cities.find(c => c.slug === slug)

    if (!city) {
        notFound()
    }

    return (
        <>
            <Hero
                badge={`Serving ${city.name}`}
                title={`Mobile Welding & Fabrication in ${city.name}`}
                subtitle={`Professional mobile welding services for businesses and residents in ${city.name}, ${city.province}. We bring our shop to your location.`}
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            {/* Services in this city */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Welding Services in {city.name}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Full range of professional welding and fabrication services available throughout {city.name} and surrounding areas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(service => (
                            <ServiceCard
                                key={service.id}
                                title={service.name}
                                description={service.description}
                                href={`/services/${service.slug}/`}
                                icon={serviceIcons[service.id]}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why choose us for this city */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Why {city.name} Businesses Choose Darsco Welding
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                When you need professional welding services in {city.name}, Darsco Welding delivers. Our mobile welding units are fully equipped to handle any job, from emergency repairs to custom fabrication projects.
                            </p>
                            <p>
                                We understand the unique needs of {city.name} businesses across various industries - from construction and oil & gas to agriculture and residential. Our certified welders bring years of experience and the right equipment directly to your location.
                            </p>
                            <ul>
                                <li><strong>Fast Response:</strong> We prioritize {city.name} area jobs for quick turnaround</li>
                                <li><strong>Local Knowledge:</strong> Familiar with {city.name} regulations and requirements</li>
                                <li><strong>24/7 Availability:</strong> Emergency welding services when you need them</li>
                                <li><strong>Free Quotes:</strong> No-obligation estimates for your project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title={`Need Welding in ${city.name}?`}
                subtitle={`Get a free quote for your welding project. We provide mobile services throughout ${city.name} and the Greater Edmonton Area.`}
            />
        </>
    )
}
