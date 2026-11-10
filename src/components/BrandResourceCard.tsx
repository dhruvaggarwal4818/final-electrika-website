import Image from "next/image";
import type { BrandResource } from "@/data/priceListData";
import styles from "./BrandResourceCard.module.css";

interface BrandResourceCardProps {
  item: BrandResource;
  largeText?: boolean;
}

export default function BrandResourceCard({ item, largeText = false }: BrandResourceCardProps) {
  const label = item.downloadName
    ? "Download ›"
    : item.file
      ? `${item.fileLabel ?? "View Price List"} ›`
      : "Request Price List ›";
  const opensInNewTab = Boolean(item.file && !item.downloadName);
  // Price lists get separate View and Download buttons. Every other card
  // (including the home page downloads) keeps its single button.
  const priceList = item.file ? item.priceList : undefined;

  return (
    <article className={styles.card}>
      <div className={styles.logoBox} style={{ backgroundColor: item.logoBackground }}>
        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          fill
          sizes="150px"
          className={item.logoFit === "cover" ? styles.logoCover : styles.logoContain}
          style={item.logoWidth ? { padding: `0 ${(100 - item.logoWidth) / 2}%` } : undefined}
        />
      </div>
      <div className={styles.body}>
        <p className={largeText ? styles.textLarge : styles.text}>{item.text}</p>
        {priceList ? (
          <>
            <p className={styles.meta}>
              {priceList.effectiveLabel}
              {priceList.reference ? ` · ${priceList.reference}` : ""}
            </p>
            <div className={styles.buttonRow}>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                View {item.name} Price List ›
              </a>
              <a
                href={item.file}
                download={priceList.downloadName}
                aria-label={`Download ${item.name} price list PDF (${priceList.fileSize})`}
                className={styles.buttonOutline}
              >
                Download PDF ({priceList.fileSize})
              </a>
            </div>
          </>
        ) : (
          <a
            href={item.file ?? "#enquiry-form"}
            download={item.downloadName}
            target={opensInNewTab ? "_blank" : undefined}
            rel={opensInNewTab ? "noopener noreferrer" : undefined}
            aria-label={`${label.replace(" ›", "")}: ${item.name}`}
            className={styles.button}
          >
            {label}
          </a>
        )}
      </div>
    </article>
  );
}
