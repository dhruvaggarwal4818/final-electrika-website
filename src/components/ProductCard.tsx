import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card} aria-labelledby={`title-${product.slug}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.heroImage}
          alt={`${product.name} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className={styles.image}
        />
        <div className={styles.badgeWrapper}>
          <span className={styles.categoryBadge}>{product.category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 id={`title-${product.slug}`} className={styles.title}>
          {product.name}
        </h3>
        <p className={styles.summary}>
          {product.description.substring(0, 100)}...
        </p>
        <div className={styles.footer}>
          <Link href={`/products/${product.slug}`} className={styles.link}>
            View Technical Specs →
          </Link>
        </div>
      </div>
    </article>
  );
}
