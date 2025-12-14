import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import { brandName, contactInfo } from '@/lib/data'
import { Shield, Users, Clock, Award } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Darsco Welding | Edmonton Mobile Welding',
    description: 'Learn about Darsco Welding, Edmonton\'s trusted mobile welding and fabrication service provider delivering professional craftsmanship across Alberta.',
}

export default function AboutPage() {
    return (
        <>
            <Hero
                badge="About Us"
                title="Edmonton's Trusted Mobile Welding Experts"
                subtitle="Professional welding and fabrication services built on experience, quality, and a commitment to our customers."
                primaryCTA={{ text: "Get Free Quote", href: "/contact/" }}
                secondaryCTA={{ text: "Call Now", href: "#" }}
            />

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                {brandName} was founded with a simple mission: bring professional welding services directly to where they're needed. We saw that businesses and individuals were spending valuable time and money transporting equipment to welding shops, when a better solution existed.
                            </p>
                            <p>
                                Our mobile welding service eliminates the hassle. With fully-equipped mobile units and certified welders, we come to your location – whether that's a construction site, a farm, an industrial facility, or your home.
                            </p>
                            <p>
                                Today, we serve clients across the Greater Edmonton Area and beyond, providing everything from emergency repairs to custom fabrication projects. Our commitment to quality, reliability, and customer service has made us a trusted partner for businesses of all sizes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
                            <p className="text-gray-600">Every weld meets the highest standards. We don't cut corners.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
                            <p className="text-gray-600">When we say we'll be there, we're there. On time, every time.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Safety</h3>
                            <p className="text-gray-600">Safety is paramount in everything we do, for our team and yours.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                            <p className="text-gray-600">Your success is our success. We're here to solve problems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                            className="text-xl font-semibold text-amber-600 hover:text-amber-700"
                        >
                            📞 {contactInfo.phone}
                        </a>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-xl font-semibold text-amber-600 hover:text-amber-700"
                        >
                            ✉️ {contactInfo.email}
                        </a>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    )
}
