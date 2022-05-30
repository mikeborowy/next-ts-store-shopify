import { StylingContainer } from "@components/ui";
import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroProps {
  headline: string;
  description: string;
}

export const Hero = ({ headline, description }: HeroProps) => {
  return (
    <div className="bg-black">
      <StylingContainer>
        <div className={styles.root}>
          <h2 className={styles.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={styles.description}>{description}</p>
            <Link href="/">
              <a className={styles.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </StylingContainer>
    </div>
  );
};
