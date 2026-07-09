import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import ClientPills from "@/components/ClientPills";

export const metadata = {
  title: "About Us | Electrika INC",
  description: "Learn more about Electrika INC, India's trusted B2B supplier of industrial electrical equipment since 2002.",
};

const clientNames = [
  "Maruti Suzuki India Ltd.", "Honda 2 Wheeler India", "L&T", "Indian Oil", "Adani Group",
  "Suzuki Motorcycle Ltd.", "HPCL", "APCPL", "DLF Ltd.", "Siemens", "Celebi International Cargo",
  "ACC Cement", "Hindustan National Glass", "Cairn Energy India", "Amul", "Metso",
  "Nerolac Paints", "Sona Koyo Steering", "Schneider Electric India", "Punj Lloyd Pvt Ltd.",
  "Lanco", "PCI Ltd.", "Jay Bharat Maruti Ltd.", "Orient Craft Ltd.", "Carrier Aircon",
  "Krishan Maruti Ltd.", "Neel Metal P. Ltd.", "Vatika Group", "Mindarika Group",
  "SMCC Projects", "A2Z Group", "AVL India Pvt Ltd.", "Oberoi Group", "Sunbeam Auto",
  "Rico Auto Ltd.", "Ligman Lighting", "Phoenix Mecano", "Moser Baer India Ltd.",
  "Saint-Gobain Glass India", "Haldiram Ltd.", "IL&FS"
];

export default function AboutUsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="/figma_assets_155/9ab8f696048eb5bbbe0bf237acb49dd3609cb593.png"
            alt="About Us Hero Background"
            fill
            className={styles.heroBg}
            priority
          />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <div className={styles.heroBadgeDot}></div>
              <p className={styles.heroBadgeText}>OUR STORY</p>
            </div>
            <h1 className={styles.heroTitle}>
              25+ Years of Powering <br />
              <span className={styles.heroTitleHighlight}>India's Industrial Growth</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From a single storefront in Gurugram to becoming one of the region's most trusted names in industrial electrical supply — this is the Electrika INC story.
            </p>
          </div>
        </section>

        {/* 2. Story Section */}
        <section className={styles.storySection}>
          <div className={styles.storyGrid}>
            <div className={styles.storyVisual}>
              <Image
                src="/figma_assets_155/e22a57039a95669074b53ee015fbe42d548adebd.png"
                alt="Electrika INC team at work"
                fill
                className={styles.storyImage}
              />
              <div className={styles.storyBadgeFloat}>
                <Image
                  src="/figma_assets_155/581acd37c505a472cad3e20a5700d6fab7cee64e.png"
                  alt="Story Badge Background"
                  fill
                  className={styles.storyBadgeBg}
                />
                <div className={styles.storyBadgeNum}>25+</div>
                <div className={styles.storyBadgeText}>YEARS STRONG</div>
              </div>
            </div>
            <div className={styles.storyContent}>
              <span className={styles.sectionEyebrow}>Who We Are</span>
              <h2 className={styles.sectionTitle}>A Legacy Built on Trust</h2>
              <Image src="/figma_assets_155/a8317246faaf92f71b30e0566c79a95a348fad75.png" alt="divider" width={36} height={4} className={styles.divider} />
              
              <p className={styles.storyText}>
                It gives us immense pleasure to share that Electrika INC has grown into <span className={styles.storyTextBold}>the leading supplier of industrial electrical goods in Gurugram (NCR)</span>. What began more than two decades ago as a focused commitment to quality has today become a milestone unmatched in the region.
              </p>
              <p className={styles.storyText}>
                We take pride in constantly raising our own bar — striving to become a name recognised not just across Haryana, but across the entire nation, in electrical and lighting products.
              </p>

              <div className={styles.storyQuote}>
                <p className={styles.storyQuoteText}>
                  "We Deliver What We Promise" — a principle that has guided every order, every relationship, and every year of our growth.
                </p>
              </div>

              <p className={styles.storyText}>
                Every product we supply carries that same promise: the right product, delivered at the right time, at the right price.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Pillars Section */}
        <section className={styles.pillarsSection}>
          <span className={styles.sectionEyebrow}>What Drives Us</span>
          <h2 className={styles.sectionTitle} style={{ fontSize: '32px' }}>Our Aim, Vision & Strength</h2>
          <Image src="/figma_assets_155/a8317246faaf92f71b30e0566c79a95a348fad75.png" alt="divider" width={36} height={4} className={styles.divider} />

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <Image src="/figma_assets_155/14c240f67bd29e64e21dbd2394dd2647bcda6e07.png" alt="accent line" width={594} height={4} className={styles.pillarTopLine} />
              <div className={styles.pillarIcon}>
                <Image src="/figma_assets_155/f71fce3c172334f11ada1863beff481a785c3d36.png" alt="icon background" fill className={styles.pillarIconBg} />
                <span className={styles.pillarIconEmoji}>🎯</span>
              </div>
              <h3 className={styles.pillarTitle}>Our Aim</h3>
              <p className={styles.pillarDesc}>
                To provide our customers with the latest and best electrical products — always focused on delivering the right product, at the right time, at the right price. We're backed by the best names in the industry, giving our principals direct insight into evolving customer needs.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <Image src="/figma_assets_155/a9c2a4b3caffe7d973f4e6cb3135996238bdf9ce.png" alt="accent line" width={594} height={4} className={styles.pillarTopLine} />
              <div className={styles.pillarIcon}>
                <Image src="/figma_assets_155/f71fce3c172334f11ada1863beff481a785c3d36.png" alt="icon background" fill className={styles.pillarIconBg} />
                <span className={styles.pillarIconEmoji}>🔭</span>
              </div>
              <h3 className={styles.pillarTitle}>Our Vision</h3>
              <p className={styles.pillarDesc}>
                To be the best and most reliable source for electrical products in India. Our business policy is shaped by a long-term entrepreneurial outlook — building permanent relationships, not one-time transactions, with every customer we serve.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <Image src="/figma_assets_155/93bdd0ae2fbb149f37b57107224316bdcf30b5ad.png" alt="accent line" width={594} height={4} className={styles.pillarTopLine} />
              <div className={styles.pillarIcon}>
                <Image src="/figma_assets_155/f71fce3c172334f11ada1863beff481a785c3d36.png" alt="icon background" fill className={styles.pillarIconBg} />
                <span className={styles.pillarIconEmoji}>💪</span>
              </div>
              <h3 className={styles.pillarTitle}>Our Strength</h3>
              <p className={styles.pillarDesc}>
                Authorized channel partnerships with the world's leading electrical brands — Crompton Greaves, Hensel, KEI, Polycab, Bajaj Electricals and more — letting us deliver exactly what we promise, every single time.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Milestones Section */}
        <section className={styles.milestonesSection}>
          <Image src="/figma_assets_155/25629af41b9749adafff1df93edb4c56e385b861.png" alt="Milestones bg" fill className={styles.milestonesBg} />
          <div className={styles.milestonesContent}>
            <span className={styles.sectionEyebrow} style={{ color: '#e8933a' }}>Our Journey</span>
            <h2 className={styles.sectionTitle} style={{ color: '#f0f2f5' }}>Two Decades of Growth</h2>
            <Image src="/figma_assets_155/a8317246faaf92f71b30e0566c79a95a348fad75.png" alt="divider" width={36} height={4} className={styles.divider} />
            
            <div className={styles.milestonesGrid}>
              <Image src="/figma_assets_155/0eae3996d44eed16a6bcccc8950c1f3b183b6de0.png" alt="line" width={1386} height={2} className={styles.milestonesLine} />
              
              <div className={styles.msItem}>
                <div className={styles.msDot}>
                  <Image src="/figma_assets_155/802441d455b2e099aa00bb97e95ccb1f41880f05.png" alt="dot bg" fill className={styles.msDotBg} />
                  <span className={styles.msEmoji}>🏁</span>
                </div>
                <span className={styles.msPhase}>THE BEGINNING</span>
                <h4 className={styles.msTitle}>Founded in Gurugram</h4>
                <p className={styles.msDesc}>Started as a focused industrial electrical supplier serving local contractors and industries.</p>
              </div>

              <div className={styles.msItem}>
                <div className={styles.msDot}>
                  <Image src="/figma_assets_155/ec5915ba241094d7f2ff449e55941e646866e25b.png" alt="dot bg" fill className={styles.msDotBg} />
                  <span className={styles.msEmoji}>🤝</span>
                </div>
                <span className={styles.msPhase}>EARLY GROWTH</span>
                <h4 className={styles.msTitle}>Major Brand Partnerships</h4>
                <p className={styles.msDesc}>Became an authorized channel partner for Crompton Greaves, KEI, Polycab and Bajaj Electricals.</p>
              </div>

              <div className={styles.msItem}>
                <div className={styles.msDot}>
                  <Image src="/figma_assets_155/802441d455b2e099aa00bb97e95ccb1f41880f05.png" alt="dot bg" fill className={styles.msDotBg} />
                  <span className={styles.msEmoji}>🏭</span>
                </div>
                <span className={styles.msPhase}>EXPANSION</span>
                <h4 className={styles.msTitle}>Industrial-Scale Clients</h4>
                <p className={styles.msDesc}>Earned the trust of Maruti Suzuki, Honda, L&T, Indian Oil, Adani Group and many more.</p>
              </div>

              <div className={styles.msItem}>
                <div className={styles.msDot}>
                  <Image src="/figma_assets_155/72823b9c1080cea80f80213edec835539fcdf9b7.png" alt="dot bg" fill className={styles.msDotBg} />
                  <span className={styles.msEmoji}>⚡</span>
                </div>
                <span className={styles.msPhase}>TODAY</span>
                <h4 className={styles.msTitle}>25+ Years & Growing</h4>
                <p className={styles.msDesc}>A trusted single-source supplier for electrical and lighting needs across India.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Stats Section */}
        <section className={styles.statsSection}>
          <Image src="/figma_assets_155/af45adde8bf20243cd5f2bda3619b5ab8531ce9c.png" alt="Stats background" fill className={styles.statsBg} />
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div><span className={styles.statNumber}>25</span><span className={styles.statPlus}>+</span></div>
              <span className={styles.statLabel}>Years in Industry</span>
            </div>
            <div className={styles.statItem}>
              <div><span className={styles.statNumber}>500</span><span className={styles.statPlus}>+</span></div>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <div><span className={styles.statNumber}>15</span><span className={styles.statPlus}>+</span></div>
              <span className={styles.statLabel}>Premium Brands</span>
            </div>
            <div className={styles.statItem}>
              <div><span className={styles.statNumber}>98</span><span className={styles.statPlus}>%</span></div>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </div>
        </section>

        {/* 6. Channel Partners */}
        <section className={styles.partnersSection}>
          <span className={styles.sectionEyebrow}>Channel Partners</span>
          <h2 className={styles.sectionTitle}>Brands We Represent</h2>
          <Image src="/figma_assets_155/a8317246faaf92f71b30e0566c79a95a348fad75.png" alt="divider" width={36} height={4} className={styles.divider} />
          <p className={styles.sectionIntroText}>
            As channel partners for some of the electrical industry's most renowned manufacturers, we deliver products backed by genuine documentation, full warranty, and proven reliability — never grey market substitutes.
          </p>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}><Image src="/figma_assets_155/3314c5863ad94a5674095fe86b2c43ea0d8c6784.png" alt="Bajaj" width={116} height={88} className={styles.partnerLogo}/></div>
            <div className={styles.partnerCard}><Image src="/figma_assets_155/84c18ec8b33e02297d337cac0c3210ce0bb26434.png" alt="Surya" width={209} height={44} className={styles.partnerLogo}/></div>
            <div className={styles.partnerCard}><Image src="/figma_assets_155/5f20f8f616b3fafd2ff95601308cde79d56c42f6.png" alt="Hensel" width={213} height={80} className={styles.partnerLogo}/></div>
            <div className={styles.partnerCard}>
              <Image src="/figma_assets_155/701133d47720789b84569e9d18059437cf8ef79a.png" alt="Transrail" width={112} height={37} className={styles.partnerLogo} />
            </div>
            
            <div className={styles.partnerCard}><Image src="/figma_assets_155/5d7ec0206edeb913077c94813a8d54fd3180fd94.png" alt="Valmont Industries" width={205} height={74} className={styles.partnerLogo}/></div>
            <div className={styles.partnerCard}>
              <Image src="/figma_assets_155/e594fac3b5e26a648d424ad8e33fd0edc8bf006b.png" alt="Utkarsh" width={96} height={37} className={styles.partnerLogo} />
            </div>
            <div className={styles.partnerCard}><Image src="/figma_assets_155/5d10b21ff7e99a932938483c934b6d7cc29e8e0f.png" alt="Hira RR Ispat" width={167} height={87} className={styles.partnerLogo}/></div>
            <div className={styles.partnerCard}><Image src="/figma_assets_155/da9b196635716ec04c7f237c4d82a28ddf3584c7.png" alt="PCE" width={181} height={88} className={styles.partnerLogo}/></div>
          </div>
        </section>

        {/* 7. Major Customers */}
        <section className={styles.customersSection}>
          <span className={styles.sectionEyebrow}>Our Major Customers</span>
          <h2 className={styles.sectionTitle}>Trusted by India's Biggest Names</h2>
          <Image src="/figma_assets_155/a8317246faaf92f71b30e0566c79a95a348fad75.png" alt="divider" width={36} height={4} className={styles.divider} />
          <p className={styles.sectionIntroText}>
            We are grateful for the unstinted support of our esteemed customers, which has always been our source of inspiration. We have earned the patronage of industries, consultants, architects, and domestic consumers alike — including:
          </p>
          <ClientPills clients={clientNames} />
        </section>

        {/* 8. Commitment */}
        <section className={styles.commitmentSection}>
          <div className={styles.commitGrid}>
            <div className={styles.commitVisual}>
              <Image src="/figma_assets_155/fba4f8b56d62ff55c6eaa8ffe5401bb98ea9e8ab.png" alt="Warehouse operations" fill className={styles.storyImage} />
            </div>
            <div className={styles.storyContent}>
              <span className={styles.sectionEyebrow}>Our Commitment</span>
              <h2 className={styles.sectionTitle}>A Single Source for All Your Electrical Needs</h2>
              <Image src="/figma_assets_155/a8317246faaf92f71b30e0566c79a95a348fad75.png" alt="divider" width={36} height={4} className={styles.divider} />
              <p className={styles.storyText} style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: 1.9 }}>
                We believe we can forge a long-lasting relationship — and that Electrika INC can serve as your single source for all your electrical and lighting needs, from a single junction box to full-scale industrial infrastructure.
              </p>
              <p className={styles.storyText} style={{ fontSize: '13.5px', color: '#6b7280', lineHeight: 1.9 }}>
                We extend our heartfelt gratitude for the confidence our customers have placed in us, which has been the driving force behind our success. We remain committed to serving you with the best products and services for many years to come.
              </p>

              <div className={styles.signatureBox}>
                <p className={styles.signatureName}>Pramod Aggarwal</p>
                <p className={styles.signatureTitle}>Founder, Electrika INC</p>
                <p className={styles.signatureMotto}>WE DELIVER WHAT WE PROMISE</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className={styles.ctaSection}>
          <Image src="/figma_assets_155/1df4a596f547510415456e12d76c77d03d15bb5f.png" alt="CTA Background" fill className={styles.ctaBg} priority />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Build a <br/>
              <span className={styles.ctaTitleHighlight}>Long-Term Partnership?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Whether you need rapid fulfillment for a critical project, or long-term supply for massive infrastructure — our team is ready to deliver. Get in touch today.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
