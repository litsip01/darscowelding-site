import Hero from '@/components/sections/Hero'
import { brandName, contactInfo, cities } from '@/lib/data'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Get a Welding Quote | Darsco Welding',
    description: 'Get in touch with Darsco Welding for professional welding services. Call (780) 405-3244 for mobile welding anywhere in the Edmonton area.',
}

export default function ContactPage() {
    return (
        <>
            <Hero
                badge="Contact Us"
                title="Let's Discuss Your Project"
                subtitle="Ready to get started? Contact us for a free quote on your welding or fabrication project."
                primaryCTA={{ text: "Call Now", href: `tel:${contactInfo.phone.replace(/[^0-9]/g, '')}` }}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                            <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="text-amber-600 hover:text-amber-700 text-lg font-medium">
                                                {contactInfo.phone}
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">24/7 Emergency Service Available</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href={`mailto:${contactInfo.email}`} className="text-amber-600 hover:text-amber-700 text-lg font-medium">
                                                {contactInfo.email}
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                                            <p className="text-gray-700">{contactInfo.address.street}</p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                Serving: {cities.map(c => c.name).join(', ')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                                            <p className="text-gray-700">Monday - Friday: 7:00 AM - 6:00 PM</p>
                                            <p className="text-gray-700">Saturday: 8:00 AM - 4:00 PM</p>
                                            <p className="text-amber-600 font-medium mt-1">24/7 Emergency Service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>

                                <form className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="mig-tig">MIG/TIG Welding</option>
                                            <option value="structural">Structural Welding</option>
                                            <option value="mobile">Mobile Welding</option>
                                            <option value="fabrication">Fabrication</option>
                                            <option value="repairs">Repairs & Maintenance</option>
                                            <option value="custom">Custom Metalwork</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            placeholder="Tell us about your project..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-lg font-bold hover:from-amber-600 hover:to-amber-700 transition shadow-md hover:shadow-lg"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
