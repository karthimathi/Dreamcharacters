import React from 'react'
import PricingCard from './PricingCard'

const plans = [
  { name: 'Starter', price: '49', features: ['5 Character Downloads', 'Basic License', 'Community Access', '24/7 Support'], popular: false },
  { name: 'Pro', price: '99', features: ['20 Character Downloads', 'Commercial License', 'Priority Support', 'Early Access', 'Creator Badge'], popular: true },
  { name: 'Elite', price: '249', features: ['Unlimited Downloads', 'Premium License', 'Dedicated Manager', 'Custom Requests', 'Elite Events'], popular: false },
]

const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-electricBlue to-neonPink bg-clip-text text-transparent">
            Premium Access
          </h2>
          <p className="text-gray-400">Choose your collector tier</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
