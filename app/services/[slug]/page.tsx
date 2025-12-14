import { services, cities } from '@/lib/data'
import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle } from 'lucide-react'

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = services.find(s => s.slug === slug)
    if (!service) return {}

    return {
        title: `${service.name} | Professional Welding | Darsco Welding`,
        description: `${service.description} Professional ${service.name.toLowerCase()} services across the Greater Edmonton Area. Call (780) 405-3244 for a free quote.`,
    }
}

const serviceFeatures: Record<string, string[]> = {
    'mig-tig-welding': [
        'Precision MIG welding for steel and aluminum',
        'TIG welding for stainless steel and exotic metals',
        'Thin and thick material capabilities',
        'Clean, high-quality welds',
        'Mobile service available',
    ],
    'structural-welding': [
        'Heavy-duty structural steel welding',
        'Building and infrastructure projects',
        'Code-compliant workmanship',
        'Certified for structural applications',
        'On-site or shop welding available',
    ],
    'mobile-welding': [
        'Fully-equipped mobile welding units',
        'We come to your location',
        '24/7 emergency response',
        'No project too remote',
        'Farm, construction, and industrial sites',
    ],
    'fabrication': [
        'Custom metal fabrication',
        'Prototype to production runs',
        'Cut, bend, and weld services',
        'Design assistance available',
        'Quality materials and craftsmanship',
    ],
    'repairs-maintenance': [
        'Emergency breakdown repairs',
        'Scheduled maintenance programs',
        'Equipment and machinery repairs',
        'Fast turnaround times',
        'Minimize downtime for your operation',
    ],
    'custom-metalwork': [
        'Decorative gates and fences',
        'Custom railings and handrails',
        'Artistic metal creations',
        'Furniture and fixtures',
        'One-of-a-kind designs',
    ],
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find(s => s.slug === slug)

    if (!service) {
        notFound()
    }

    const features = serviceFeatures[service.id] || []

    return (
        <>
            <Hero
                badge={service.shortName}
                title={service.name}
                subtitle={service.description}
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            {/* Service Features */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            What's Included
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 mb-12">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="prose prose-lg text-gray-600">
                            <h3>Professional {service.name} Across Alberta</h3>
                            <p>
                                Darsco Welding provides expert {service.name.toLowerCase()} for businesses and individuals throughout the Greater Edmonton Area. Our certified welders bring years of experience and the right equipment to every job.
                            </p>
                            <p>
                                Whether you need {service.name.toLowerCase()} for a small repair or a large-scale project, we have the skills and equipment to deliver quality results. Our mobile capabilities mean we can come directly to your location, saving you time and hassle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {service.name} Service Areas
                        </h2>
                        <p className="text-gray-600">
                            We provide {service.name.toLowerCase()} throughout these communities:
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {cities.map(city => (
                            <Link
                                key={city.id}
                                href={`/locations/${city.slug}/`}
                                className="flex items-center gap-2 bg-white hover:bg-amber-50 px-6 py-3 rounded-full transition group shadow-sm border border-gray-200 hover:border-amber-300"
                            >
                                <MapPin className="w-5 h-5 text-amber-600" />
                                <span className="font-medium group-hover:text-amber-700">{city.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title={`Need ${service.name}?`}
                subtitle={`Contact us today for a free quote on your ${service.name.toLowerCase()} project.`}
            />
        </>
    )
}
