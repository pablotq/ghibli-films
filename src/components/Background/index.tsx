import React, { useMemo } from "react";
import styles from "./leaves.module.css";

export const Background: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
    // Gera delays aleatórios apenas uma vez no mount do componente
    const leaves = useMemo(() => 
        Array.from({ length: 30 }, (_, index) => ({
            id: index,
            // eslint-disable-next-line react-hooks/purity
            delay: Math.random() * 25
        })),
        [] // Dependency array vazio = executa apenas uma vez
    );

    return (
        <div className={styles.bgWrapper}>
            <div className={styles.leavesContainer}>
                {leaves.map((leaf) => (
                    <i 
                        key={leaf.id}
                        className={styles.leaf}
                        style={{
                            animationDelay: `${leaf.delay}s`,
                            WebkitAnimationDelay: `${leaf.delay}s`
                        }}
                    ></i>
                ))}
            </div>
            <div className={styles.bgContent}>
                {children}
            </div>
        </div>
    );
}