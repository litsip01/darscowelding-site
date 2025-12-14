import { industries, services, cities } from '@/lib/data'
import Hero from '@/components/sections/Hero'
import ServiceCard from '@/components/sections/ServiceCard'
import CTA from '@/components/sections/CTA'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Flame, Wrench, Truck, Shield, MapPin } from 'lucide-react'

const serviceIcons: Record<string, React.ReactNode> = {
    'mig-tig-welding': <Flame className="w-7 h-7" />,
    'structural-welding': <Wrench className="w-7 h-7" />,
    'mobile-welding': <Truck className="w-7 h-7" />,
    'fabrication': <Wrench className="w-7 h-7" />,
    'repairs-maintenance': <Shield className="w-7 h-7" />,
    'custom-metalwork': <Flame className="w-7 h-7" />,
}

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const industry = industries.find(i => i.slug === slug)
    if (!industry) return {}

    return {
        title: `Welding Services for ${industry.name} | Darsco Welding`,
        description: `${industry.description} Professional welding solutions for ${industry.name.toLowerCase()} across Alberta. Call (780) 405-3244.`,
    }
}

const industryContent: Record<string, { intro: string; benefits: string[] }> = {
    'construction': {
        intro: 'Construction projects demand reliable, code-compliant welding from experienced professionals. Darsco Welding provides structural steel welding, on-site repairs, and custom fabrication for construction companies across Alberta.',
        benefits: [
            'Certified structural welding to code requirements',
            'Mobile service to any construction site',
            'Fast turnaround to keep projects on schedule',
            'Steel beam, column, and connection welding',
        ],
    },
    'oil-gas': {
        intro: 'The oil and gas industry requires welders who understand the demands of the energy sector. Our certified welders provide pipeline welding, rig repairs, and equipment fabrication for oil and gas operations.',
        benefits: [
            '24/7 emergency response for rig breakdowns',
            'Pipeline welding and repairs',
            'Equipment fabrication and modifications',
            'Safety-focused procedures',
        ],
    },
    'manufacturing': {
        intro: 'Manufacturing facilities need reliable welding partners for production equipment, custom parts, and maintenance. Darsco Welding delivers precision fabrication and welding services to keep your operation running.',
        benefits: [
            'Custom part fabrication to your specifications',
            'Production equipment repairs and modifications',
            'Prototype development',
            'Scheduled maintenance programs',
        ],
    },
    'agricultural': {
        intro: 'Farming operations face unique challenges that require a welder who understands agricultural equipment. Our mobile welding services come directly to your farm for equipment repairs and custom builds.',
        benefits: [
            'Mobile service to your farm location',
            'Quick turnaround during busy seasons',
            'Equipment repair and reinforcement',
            'Custom implements and attachments',
        ],
    },
    'commercial': {
        intro: 'Commercial buildings require professional welding for railings, HVAC supports, structural repairs, and more. Darsco Welding provides quality workmanship for property managers and building owners.',
        benefits: [
            'Code-compliant railing installations',
            'HVAC and mechanical supports',
            'Structural repairs and reinforcements',
            'Minimal disruption to building operations',
        ],
    },
    'residential': {
        intro: 'Homeowners deserve beautiful, functional metalwork crafted by skilled artisans. From custom gates to decorative railings, we create stunning pieces that enhance your property.',
        benefits: [
            'Custom gates and fencing',
            'Decorative railings and handrails',
            'Artistic metalwork and sculptures',
            'Repairs and restoration',
        ],
    },
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const industry = industries.find(i => i.slug === slug)

    if (!industry) {
        notFound()
    }

    const content = industryContent[industry.id] || { intro: industry.description, benefits: [] }

    return (
        <>
            <Hero
                badge={industry.name}
                title={`Professional Welding for ${industry.name}`}
                subtitle={industry.description}
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            {/* Industry Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg text-gray-600 mb-12">
                            <p className="text-xl">{content.intro}</p>
                        </div>

                        {content.benefits.length > 0 && (
                            <div className="bg-amber-50 rounded-xl p-8 border border-amber-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Darsco for {industry.name}</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {content.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-amber-500 font-bold">✓</span>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Services for this industry */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Services for {industry.name}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our full range of welding services tailored for {industry.name.toLowerCase()}.
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

            {/* Service Areas */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Serving {industry.name} Across Alberta
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {cities.map(city => (
                            <Link
                                key={city.id}
                                href={`/locations/${city.slug}/`}
                                className="flex items-center gap-2 bg-gray-100 hover:bg-amber-100 px-5 py-2 rounded-full transition group"
                            >
                                <MapPin className="w-4 h-4 text-amber-600" />
                                <span className="font-medium group-hover:text-amber-700">{city.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTA
                title={`Welding for ${industry.name}?`}
                subtitle={`Contact us today for a free quote. We specialize in welding solutions for ${industry.name.toLowerCase()}.`}
            />
        </>
    )
}
