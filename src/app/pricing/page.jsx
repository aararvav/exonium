"use client";

import React from "react";
import Nav from "@/components/nav/nav";
import { motion } from "framer-motion";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "",
      subtitle: "",
      description: "Free for everyone",
      badge: null,
      features: [
        "Unlimited members",
        "2 teams",
        "250 issues",
        "Slack and GitHub",
        "AI agents"
      ],
      buttonText: "Your current plan",
      buttonStyle: "bg-[#181a20] text-[#e6e8ee] border border-[rgba(255,255,255,0.08)]",
      popular: false
    },
    {
      name: "Basic",
      price: "8",
      period: "per user/month",
      subtitle: "Billed yearly",
      description: "",
      badge: null,
      features: [
        "All Free features +",
        "5 teams",
        "Unlimited issues",
        "Unlimited file uploads",
        "Admin roles"
      ],
      buttonText: "Upgrade to Basic",
      buttonStyle: "bg-[#181a20] text-[#e6e8ee] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)]",
      popular: true
    },
    {
      name: "Business",
      price: "14",
      period: "per user/month",
      subtitle: "Billed yearly",
      description: "",
      badge: null,
      features: [
        "All Basic features +",
        "Unlimited teams",
        "Private teams and guests",
        "Product intelligence",
        "Linear Insights",
        "Linear Asks",
        "Zendesk and Intercom integrations"
      ],
      buttonText: "Get Business",
      buttonStyle: "bg-[#181a20] text-[#e6e8ee] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)]",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Contact us",
      period: "",
      subtitle: "Annual billing only",
      description: "",
      badge: null,
      features: [
        "All Business features +",
        "Issue SLAs",
        "Sub-initiatives",
        "Advanced Linear Asks",
        "Dashboards",
        "SAML and SCIM",
        "Advanced security",
        "Migration and onboarding support"
      ],
      buttonText: "Get Enterprise",
      buttonStyle: "bg-[#181a20] text-[#e6e8ee] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)]",
      popular: false
    }
  ];

  return (
    //change bg color from here -->
    <main className="min-h-screen bg-[#131822] text-white">
      <Nav />
      <div className="pt-20 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-normal mb-4">
              Upgrade your plan
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative rounded-2xl p-6 border bg-[#181a20] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)] transition-all duration-300"
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-[#5e6ad2] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    {plan.name === "Enterprise" ? (
                      <span className="text-lg font-normal text-[#b4bcd0]">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-sm text-[#b4bcd0]">$</span>
                        <span className="text-4xl font-normal">{plan.price}</span>
                        {plan.period && <span className="text-sm text-[#b4bcd0] ml-1">{plan.period}</span>}
                      </>
                    )}
                  </div>
                  {plan.subtitle && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-4 bg-[#5e6ad2] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-xs text-[#b4bcd0]">{plan.subtitle}</span>
                    </div>
                  )}
                  {plan.description && <p className="text-sm text-[#e6e8ee]">{plan.description}</p>}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 mb-6 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                          <path
                            d="M13.5 4.5L6 12L2.5 8.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#b4bcd0]"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-[#e6e8ee] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {index === 0 && (
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                    <p className="text-xs text-[#b4bcd0]">
                      Have an existing plan? See billing help
                    </p>
                  </div>
                )}

                {index === 1 && (
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                    <p className="text-xs text-[#b4bcd0]">
                      Only available in certain regions. Limits apply
                    </p>
                  </div>
                )}

                {index === 3 && (
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                    <p className="text-xs text-[#b4bcd0]">
                      Unlimited subject to abuse guardrails. Learn more
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
