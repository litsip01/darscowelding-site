import { industries } from '@/lib/data'
import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Industries We Serve | Professional Welding | Darsco Welding',
    description: 'Specialized welding services for construction, oil & gas, manufacturing, agricultural, commercial, and residential sectors across Alberta.',
}

export default function IndustriesPage() {
    return (
        <>
            <Hero
                badge="Industries Served"
                title="Welding Solutions for Every Industry"
                subtitle="From construction sites to residential properties, we provide specialized welding services tailored to your industry's unique needs."
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {industries.map(industry => (
                            <Link
                                key={industry.id}
                                href={`/industries/${industry.slug}/`}
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-amber-200"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">
                                    {industry.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {industry.description}
                                </p>
                                <span className="inline-flex items-center text-amber-600 font-semibold">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Industry?</h2>
                    <p className="text-gray-600 mb-6">
                        We work with businesses across many sectors. Contact us to discuss your specific welding needs – we're confident we can help.
                    </p>
                    <Link
                        href="/contact/"
                        className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
                    >
                        Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <CTA />
        </>
    )
}
