import { cities } from '@/lib/data'
import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Service Areas | Edmonton, Sherwood Park, Nisku, Leduc | Darsco Welding',
    description: 'Professional mobile welding across Alberta: Edmonton, Sherwood Park, Nisku, Leduc, and Pigeon Lake. We come to you!',
}

export default function LocationsPage() {
    return (
        <>
            <Hero
                badge="Service Areas"
                title="Mobile Welding Across Alberta"
                subtitle="We bring professional welding services directly to your location throughout the Greater Edmonton Area."
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Communities We Serve
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our mobile welding units are fully equipped to handle any job, anywhere in these service areas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {cities.map(city => (
                            <Link
                                key={city.id}
                                href={`/locations/${city.slug}/`}
                                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-amber-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition">
                                        <MapPin className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition">
                                            {city.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-3">{city.province}, {city.country}</p>
                                        <span className="inline-flex items-center text-amber-600 font-medium text-sm">
                                            View Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Area?</h2>
                    <p className="text-gray-600 mb-6">
                        We may still be able to help! Contact us to discuss your location and project.
                        We regularly travel beyond our primary service areas for larger projects.
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
