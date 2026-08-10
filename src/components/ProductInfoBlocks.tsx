import React from "react";
import { SEO_DATABASE } from "@/data/seoData";
import styles from "./ProductInfoBlocks.module.css";

interface ProductInfoBlocksProps {
  slug: string;
}

export default function ProductInfoBlocks({ slug }: ProductInfoBlocksProps) {
  const seo = SEO_DATABASE[slug];
  if (!seo) return null;

  const hasAnyBlock =
    seo.definition ||
    (seo.engineeringNotes && seo.engineeringNotes.length > 0) ||
    (seo.advantages && seo.advantages.length > 0) ||
    (seo.applications && seo.applications.length > 0) ||
    (seo.standards && seo.standards.length > 0) ||
    (seo.installationTips && seo.installationTips.length > 0) ||
    (seo.maintenanceTips && seo.maintenanceTips.length > 0) ||
    seo.comparison ||
    (seo.faqs && seo.faqs.length > 0);

  if (!hasAnyBlock) return null;

  const productName = seo.title.split("|")[0].trim();

  return (
    <div className={styles.infoBlocksWrapper} aria-label={`Detailed product information for ${productName}`}>

      {/* 1. Product Definition */}
      {seo.definition && (
        <section className={styles.block} aria-labelledby={`${slug}-definition-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Product Definition</span>
            <h2 id={`${slug}-definition-heading`} className={styles.blockTitle}>
              What is a {productName}?
            </h2>
            <div className={styles.definitionBox}>
              <div className={styles.definitionIcon} aria-hidden="true">📖</div>
              <p className={styles.definitionText}>{seo.definition}</p>
            </div>
          </div>
        </section>
      )}

      {/* 2. Engineering Notes */}
      {seo.engineeringNotes && seo.engineeringNotes.length > 0 && (
        <section className={styles.blockAlt} aria-labelledby={`${slug}-eng-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Engineering Notes</span>
            <h2 id={`${slug}-eng-heading`} className={styles.blockTitle}>
              Technical Design Details
            </h2>
            <ul className={styles.bulletList} role="list">
              {seo.engineeringNotes.map((note, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 3. Advantages */}
      {seo.advantages && seo.advantages.length > 0 && (
        <section className={styles.blockDark} aria-labelledby={`${slug}-adv-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrowLight}>Key Advantages</span>
            <h2 id={`${slug}-adv-heading`} className={styles.blockTitleLight}>
              Why Choose This Product
            </h2>
            <div className={styles.advantagesGrid}>
              {seo.advantages.map((adv, idx) => (
                <article key={idx} className={styles.advantageCard}>
                  <div className={styles.advantageNumber} aria-hidden="true">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className={styles.advantageTitle}>{adv.title}</h3>
                  <p className={styles.advantageDesc}>{adv.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Applications / Industry Use Cases */}
      {seo.applications && seo.applications.length > 0 && (
        <section className={styles.block} aria-labelledby={`${slug}-apps-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Industry Use Cases</span>
            <h2 id={`${slug}-apps-heading`} className={styles.blockTitle}>
              Where This Product Is Applied
            </h2>
            <div className={styles.applicationsGrid}>
              {seo.applications.map((app, idx) => (
                <article key={idx} className={styles.applicationCard}>
                  <h3 className={styles.applicationTitle}>{app.title}</h3>
                  <p className={styles.applicationDesc}>{app.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Standards & Compliance */}
      {seo.standards && seo.standards.length > 0 && (
        <section className={styles.blockAlt} aria-labelledby={`${slug}-std-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Standards &amp; Compliance</span>
            <h2 id={`${slug}-std-heading`} className={styles.blockTitle}>
              Applicable Certifications &amp; Standards
            </h2>
            <div className={styles.standardsGrid}>
              {seo.standards.map((std, idx) => (
                <div key={idx} className={styles.standardCard}>
                  <div className={styles.standardCode}>{std.code}</div>
                  <p className={styles.standardDesc}>{std.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6 & 7. Installation Tips + Maintenance Tips (side by side) */}
      {(seo.installationTips && seo.installationTips.length > 0) && (
        <section className={styles.block} aria-labelledby={`${slug}-install-heading`}>
          <div className={styles.container}>
            <div className={styles.tipsRow}>
              <div className={styles.tipsColumn}>
                <span className={styles.eyebrow}>Installation Tips</span>
                <h2 id={`${slug}-install-heading`} className={styles.blockTitle}>
                  Installation Best Practices
                </h2>
                <ol className={styles.numberedList}>
                  {seo.installationTips.map((tip, idx) => (
                    <li key={idx} className={styles.numberedItem}>
                      <span className={styles.numberedBadge} aria-hidden="true">{idx + 1}</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {seo.maintenanceTips && seo.maintenanceTips.length > 0 && (
                <div className={styles.tipsColumn}>
                  <span className={styles.eyebrow}>Maintenance Tips</span>
                  <h2 className={styles.blockTitle}>
                    Maintenance Best Practices
                  </h2>
                  <ol className={styles.numberedList}>
                    {seo.maintenanceTips.map((tip, idx) => (
                      <li key={idx} className={styles.numberedItem}>
                        <span className={styles.numberedBadgeAlt} aria-hidden="true">{idx + 1}</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 8. Product Comparison Table */}
      {seo.comparison && (
        <section className={styles.blockDark} aria-labelledby={`${slug}-cmp-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrowLight}>Product Comparison</span>
            <h2 id={`${slug}-cmp-heading`} className={styles.blockTitleLight}>
              {seo.comparison.title}
            </h2>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    {seo.comparison.columns.map((col, idx) => (
                      <th key={idx} scope="col">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {seo.comparison.rows.map((row, idx) => (
                    <tr key={idx}>
                      <th scope="row" className={styles.rowHeader}>{row.label}</th>
                      {row.values.map((val, vi) => (
                        <td key={vi}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQ Section — static expanded for maximum AI/crawler visibility */}
      {seo.faqs && seo.faqs.length > 0 && (
        <section className={styles.blockFaq} aria-labelledby={`${slug}-faq-heading`}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>Frequently Asked Questions</span>
            <h2 id={`${slug}-faq-heading`} className={styles.blockTitle}>
              Common Questions About {productName}
            </h2>
            <div className={styles.faqList}>
              {seo.faqs.map((faq, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>
                    <span className={styles.faqQIcon} aria-hidden="true">Q</span>
                    {faq.question}
                  </h3>
                  <p className={styles.faqAnswer}>
                    <span className={styles.faqAIcon} aria-hidden="true">A</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
