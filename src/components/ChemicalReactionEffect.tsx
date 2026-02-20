import { motion } from "framer-motion";

// Molecule-like layout: nodes (atoms) and bonds (pairs of connected node indices)
const NODES = [
  { x: 50, y: 35 },   // 0 center-top
  { x: 28, y: 48 },   // 1 left
  { x: 72, y: 48 },   // 2 right
  { x: 20, y: 62 },   // 3 bottom-left
  { x: 50, y: 68 },   // 4 center-bottom
  { x: 80, y: 62 },   // 5 bottom-right
  { x: 50, y: 50 },   // 6 center (reaction core)
];
const BONDS: [number, number][] = [
  [0, 6], [1, 6], [2, 6], [6, 4], [1, 3], [2, 5], [6, 3], [6, 5],
];

const TOTAL_DURATION = 3.2;
const STAGGER_BOND = 0.22;
const STAGGER_NODE = 0.2;
// Reaction order: center (6) first, then outer atoms
const REACTION_ORDER = [6, 0, 1, 2, 3, 4, 5];
const nodeDelay = (i: number) => REACTION_ORDER.indexOf(i) * STAGGER_NODE;

const ChemicalReactionEffect = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bondGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <filter id="atomGlow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Bonds – lines that "draw in" then glow (bond forming in reaction) */}
        <g stroke="hsl(var(--primary))" strokeWidth="0.4" fill="none" strokeLinecap="round">
          {BONDS.map(([a, b], i) => {
            const n1 = NODES[a];
            const n2 = NODES[b];
            const len = Math.hypot(n2.x - n1.x, n2.y - n1.y);
            return (
              <motion.line
                key={`bond-${i}`}
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                strokeDasharray={len}
                initial={{ strokeDashoffset: len, opacity: 0.3 }}
                animate={{
                  strokeDashoffset: 0,
                  opacity: [0.3, 0.95, 0.5],
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.1 + i * STAGGER_BOND,
                  repeat: Infinity,
                  repeatDelay: TOTAL_DURATION - 0.35,
                }}
              />
            );
          })}
        </g>

        {/* Atoms – nodes that pulse when "reaction" hits them */}
        {NODES.map((node, i) => (
          <motion.g key={`node-${i}`} filter="url(#atomGlow)">
            <motion.circle
              r={i === 6 ? 1.8 : 1.2}
              cx={node.x}
              cy={node.y}
              fill="hsl(var(--primary))"
              initial={{ opacity: 0.4, scale: 0.9 }}
              animate={{
                opacity: [0.4, 1, 0.5],
                scale: [0.9, 1.35, 1],
              }}
              transition={{
                duration: 0.5,
                delay: nodeDelay(i),
                repeat: Infinity,
                repeatDelay: TOTAL_DURATION - 0.5,
              }}
            />
            {/* Outer glow ring on reaction */}
            <motion.circle
              r={i === 6 ? 2.8 : 2}
              cx={node.x}
              cy={node.y}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.25"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0.8, 1.4, 1.2],
              }}
              transition={{
                duration: 0.6,
                delay: nodeDelay(i),
                repeat: Infinity,
                repeatDelay: TOTAL_DURATION - 0.6,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default ChemicalReactionEffect;
