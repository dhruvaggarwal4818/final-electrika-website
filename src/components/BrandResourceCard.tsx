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
      </div>
    </article>
  );
}
