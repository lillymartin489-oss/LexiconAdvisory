import { Target, Heart, Award, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About LexiconAdvisory
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for ethical Wikipedia consulting and content services
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              LexiconAdvisory is a professional Wikipedia consulting and writing agency
              dedicated to helping individuals and organizations navigate the complex
              world of Wikipedia with integrity and transparency.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We understand that Wikipedia is a unique platform with its own culture,
              policies, and community standards. Our team of experienced Wikipedia
              editors and consultants brings deep knowledge of these guidelines to
              every project we undertake.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Unlike agencies that make unrealistic promises, we operate with complete
              honesty about what is possible within Wikipedia's framework. We believe
              that respecting the platform's policies and community is not just the
              right thing to do – it's the only sustainable approach to Wikipedia
              presence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Transparency First',
                description: 'We provide honest assessments of Wikipedia prospects and never guarantee page creation. Our clients always know exactly what to expect, including the challenges and limitations.',
              },
              {
                icon: Heart,
                title: 'Respect for Wikipedia',
                description: 'We deeply respect Wikipedia\'s mission, policies, and community. Every action we take is designed to uphold the platform\'s integrity and contribute positively to its ecosystem.',
              },
              {
                icon: Award,
                title: 'Professional Excellence',
                description: 'Our team consists of experienced Wikipedia editors who understand the nuances of content creation, sourcing, and community engagement. We deliver high-quality work that meets Wikipedia\'s standards.',
              },
              {
                icon: Target,
                title: 'Ethical Practice',
                description: 'We strictly adhere to Wikipedia\'s terms of use and conflict of interest guidelines. We never engage in sockpuppetry, undisclosed paid editing, or other prohibited practices.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="text-blue-200">Assessment:</strong> We begin every
                engagement with a thorough evaluation of notability and sourcing. If we
                don't believe a subject meets Wikipedia's criteria, we say so upfront.
              </p>
              <p>
                <strong className="text-blue-200">Strategy:</strong> For suitable
                subjects, we develop a strategic approach that aligns with Wikipedia
                policies and maximizes the chances of success while setting realistic
                expectations.
              </p>
              <p>
                <strong className="text-blue-200">Execution:</strong> Our team creates
                high-quality, well-sourced content that follows Wikipedia's neutral
                point of view and other content guidelines.
              </p>
              <p>
                <strong className="text-blue-200">Transparency:</strong> Throughout the
                process, we maintain open communication about progress, challenges, and
                outcomes. We disclose our paid editing in accordance with Wikipedia
                policies.
              </p>
              <p>
                <strong className="text-blue-200">Community Respect:</strong> We engage
                respectfully with the Wikipedia community and accept their editorial
                decisions, even when they differ from our clients' preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Important Disclaimer
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              LexiconAdvisory operates independently and is not affiliated with,
              endorsed by, or officially connected to Wikipedia or the Wikimedia
              Foundation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We are a private consulting service that helps clients understand and
              navigate Wikipedia's processes. All work is subject to Wikipedia's
              policies and community review.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold text-blue-700">
              Wikipedia page creation is never guaranteed. Success depends on
              notability, sources, and community acceptance of content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
