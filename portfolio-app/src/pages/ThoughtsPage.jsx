// --- Thoughts Page Component ---
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // <--- Add this import

const ThoughtsPage = ({ setCurrentPage, currentPage }) => {
  useEffect(() => {
    if (currentPage === "thoughts") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const placeholderImages = [
    "src/assets/images/Carespot back.png",
    "src/assets/images/Carespot logo - IG --1.jpg",
    "src/assets/images/Carespot logo - IG -.jpg",
    "src/assets/images/Carespot logo - IG.jpg",
    "src/assets/images/Carespot logo.png",
    "src/assets/images/coding class-1.jpg",
    "src/assets/images/coding class-2.jpg",
    "src/assets/images/Mr ICT uni(2)(1).jpg",
  ];

  return (
    <div className="flex flex-col min-h-full bg-gray-900 text-gray-100 font-sans antialiased">
      <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Main content for Thoughts & Ideas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mb-16">
          {" "}
          {/* mb-16 for spacing before gallery */}
          {/* Left Column Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-100">RxCare</h2>
            <p className="text-lg leading-relaxed mb-4">
              Neonatal seizures are a silent threat in places like Ghana, often
              missed due to a critical lack of specialized diagnostic tools. My
              team and I, from a tech perspective, recognize this as a solvable
              challenge. Our initial research meticulously investigates the
              problem, surveys existing technological limitations, and outlines
              a robust framework for a novel, affordable, and non-invasive
              wearable seizure detection system for newborns. The paper isn't
              about already proven results, but about laying the groundwork –
              identifying the right sensors, the optimal TinyML approaches, and
              the necessary hardware/software architecture – to build a
              high-potential solution. We believe this foundational work
              provides a clear and viable path to developing a proof-of-concept,
              and subsequently a working product, that can revolutionize
              neonatal care. Next step: building and validating this promising
              technology, with the ultimate vision of significantly improving
              child health outcomes and strengthening healthcare infrastructure
              in low-resource settings.
            </p>
            <h2 className="text-3xl font-bold mb-6 text-gray-100 mt-8">
              Open-Source Intelligence (OSINT): Capabilities and Applications
            </h2>
            <p className="text-lg leading-relaxed">
              At its core, OSINT leverages publicly accessible information
              platforms including, but not limited to, social media, news
              archives, academic publications, government reports, financial
              disclosures, geospatial data, and deep web forums. OSINT's
              applications are vast and extend across intelligence, law
              enforcement, cybersecurity, journalism, business development, and
              academic research. Its power lies in its ethical
              foundation—relying exclusively on data intended for public
              consumption—and its capacity to provide timely, cost-effective,
              and often critical insights that inform strategic decisions and
              enhance situational awareness. As the digital landscape continues
              to expand, the methodologies and capabilities of OSINT remain
              indispensable for navigating and understanding complex information
              environments.
            </p>
          </div>
          {/* Right Column Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              The Inevitable Dawn: Adapting to an AI-Integrated Future
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              The rapid ascent of Artificial Intelligence from a niche
              technological pursuit to a pervasive force in daily life is
              undeniable. What was once the stuff of science fiction movies is
              now woven into the fabric of our existence, from the algorithms
              that curate our online experiences to the sophisticated tools
              enhancing productivity in every industry. This isn't a fleeting
              trend; AI is inevitably here to stay, fundamentally reshaping our
              interactions with INFORMATION, work, and creativity. Its
              permanence is etched in the efficiencies it unlocks, the
              innovations it sparks, and its seamless integration into the
              digital infrastructure that underpins modern society. This
              profound shift demands more than just passive observation; it
              necessitates a proactive re-evaluation of the status quo. The
              traditional paradigms that once defined success, learning, and
              problem-solving as we know it are rapidly becoming obsolete. In an
              era where AI can generate text, analyze complex data, and even
              create art, the value of simple information recall or repetitive
              tasks diminishes. We are compelled to seek new ways to challenge
              ourselves and our established systems, focusing on uniquely human
              capabilities that AI, for all its prowess, cannot replicate.
              Central to this new frontier is the emerging skill of prompting.
              No longer is it sufficient to merely ask a question; the ability
              to craft precise, insightful, and strategic prompts to guide AI
              models is becoming a critical differentiator.
            </p>
            <p className="text-lg leading-relaxed">
              The adoption of AI is not a threat to human ingenuity, but a
              powerful catalyst for its evolution. By embracing its
              inevitability and consciously seeking new ways to challenge our
              established norms, particularly in how we learn and how we prompt
              these powerful tools, we can ensure that humanity remains at the
              helm of progress, steering towards a future where intelligence,
              both artificial and human, thrives in synergy.
            </p>
          </div>
          {/* Right Column Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              A Song of Ice and Fire:
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              George R.R. Martin's A Song of Ice and Fire is a world that has
              saved me countless times. Disappearing into that vast world
              provides me with such a sense of wonder and awe.George R.R.
              Martin's A Song of Ice and Fire is not merely a fantasy saga; it
              is a brutal, unflinching deconstruction of power, morality, and
              the devastating consequences of human ambition. Within its
              sprawling, meticulously crafted tapestry of warring houses,
              ancient magic, and existential threats, the series resonates most
              profoundly through its relentless subversion of traditional heroic
              narratives. It is a world where virtue is often punished, and the
              most honorable intentions can pave the road to ruin.
            </p>
            <p className="text-lg leading-relaxed">
              George R.R. Martin's A Song of Ice and Fire is not merely a
              fantasy saga, it is a brutal, unflinching deconstruction of power,
              morality, and the devastating consequences of human ambition.
              Within its sprawling, meticulously crafted tapestry of warring
              houses, ancient magic, and existential threats, the series
              resonates most profoundly through its relentless subversion of
              traditional heroic narratives. It is a world where virtue is often
              punished, and the most honorable intentions can pave the road to
              ruin. Nowhere is this tragic resonance more acutely felt than in
              the arc of Robb Stark, the Young Wolf. Thrust into leadership by
              his father's unjust execution, Robb embodies the archetypal noble
              hero, he's courageous, charismatic, and fiercely loyal. He rallies
              the North, wins impossible victories(SOMEHOW LOSES THE WAR
              HOWEVER), and inspires unwavering devotion. Yet, his story becomes
              a searing indictment of how traditional chivalry and a rigid
              adherence to oaths can be fatal flaws in a game utterly devoid of
              rules(LIFE). Robb's fatal error is not a lack of military prowess
              or moral compass, but his inability to shed the idealism of his
              upbringing in a realm governed by treachery, broken promises, and
              the cold, hard calculus of power. His adherence to personal honor,
              his compassion, and his youthful belief in justice ultimately
              become the very vulnerabilities exploited by his cunning, ruthless
              adversaries. The Red Wedding, a moment of unparalleled shock and
              despair, serves as the series' most visceral testament to the
              brutal truth: in Westeros, the song of ice and fire is often a
              dirge for those who play by rules that no longer exist, leaving
              only ashes where noble intentions once burned bright.
            </p>
          </div>
        </section>

        {/* Photography Section */}
        <section className="mt-16 pt-8 border-t border-gray-700">
          {" "}
          {/* Added top border for separation */}
          <h2 className="text-3xl font-bold mb-2 text-gray-100 flex start">
            Gallery
          </h2>
          <p className="text-base text-gray-400 mb-8">
            Under construction!
            <img
              src="src/assets/under-construction.gif" // Dummy GIF URL (replace with your actual GIF URL)
              alt="Under Construction GIF"
              className="ml-2 w-6 h-6 inline-block" // Added margin-left, set width/height and inline-block for proper alignment
            />
          </p>{" "}
          {/* Changed arrow and added margin-bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
            {placeholderImages.map((src, index) => (
              <div key={index} className="bg-gray-800">
                {" "}
                {/* Added padding and rounded corners */}
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default ThoughtsPage;
