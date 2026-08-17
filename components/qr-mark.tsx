"use client";

function finderCell(px: number, py: number): boolean {
  const ring = px === 0 || py === 0 || px === 6 || py === 6;
  const center =
    (px >= 2 && px <= 4 && py >= 2 && py <= 4) ||
    (px >= 1 && px <= 5 && py >= 1 && py <= 5);
  if (center) return true;
  return ring;
}

function buildGrid(size = 29) {
  let seed = 1337;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const inFinder = (x: number, y: number) =>
    (x <= 6 && y <= 6) ||
    (x >= size - 7 && y <= 6) ||
    (x <= 6 && y >= size - 7);

  const cells: { x: number; y: number; dark: boolean }[] = [];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let dark: boolean;

      if (x <= 6 && y <= 6) {
        dark = finderCell(x, y);
      } else if (x >= size - 7 && y <= 6) {
        dark = finderCell(x - (size - 7), y);
      } else if (x <= 6 && y >= size - 7) {
        dark = finderCell(x, y - (size - 7));
      } else if (inFinder(x, y)) {
        dark = false;
      } else if (x === 6 || y === 6 || x === size - 8 || y === size - 8) {
        dark = false;
      } else {
        dark = rnd() > 0.5;
      }

      cells.push({ x, y, dark });
    }
  }

  return cells;
}

export function QrMark({ className }: { className?: string }) {
  const size = 29;
  const cells = buildGrid(size);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label="QR code"
      shapeRendering="crispEdges"
    >
      <rect width={size} height={size} fill="#FFFFFF" rx={1.5} />
      {cells
        .filter((cell) => cell.dark)
        .map((cell) => (
          <rect
            key={`${cell.x}-${cell.y}`}
            x={cell.x}
            y={cell.y}
            width={1}
            height={1}
            fill="#111827"
          />
        ))}
    </svg>
  );
}
