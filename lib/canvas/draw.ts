export function drawBars({
  ctx,
  data,
  width,
  height,
  barColor,
  backgroundColor = "transparent",
  gap = 6,
  radius = 8
}: {
  ctx: CanvasRenderingContext2D;
  data: number[];
  width: number;
  height: number;
  barColor: string;
  backgroundColor?: string;
  gap?: number;
  radius?: number;
}) {
  ctx.clearRect(0, 0, width, height);
  if (backgroundColor !== "transparent") {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }
  const max = Math.max(...data, 1);
  const barWidth = (width - gap * (data.length - 1)) / data.length;
  data.forEach((value, index) => {
    const barHeight = (value / max) * height;
    const x = index * (barWidth + gap);
    const y = height - barHeight;
    ctx.fillStyle = barColor;
    drawRoundedRect(ctx, x, y, barWidth, barHeight, radius);
    ctx.fill();
  });
}

export function drawHistogram({
  ctx,
  data,
  width,
  height,
  barColor,
  gap = 4
}: {
  ctx: CanvasRenderingContext2D;
  data: number[];
  width: number;
  height: number;
  barColor: string;
  gap?: number;
}) {
  ctx.clearRect(0, 0, width, height);
  const max = Math.max(...data, 1);
  const barWidth = (width - gap * (data.length - 1)) / data.length;
  data.forEach((value, index) => {
    const barHeight = (value / max) * height;
    const x = index * (barWidth + gap);
    const y = height - barHeight;
    ctx.fillStyle = barColor;
    ctx.fillRect(x, y, barWidth, barHeight);
  });
}

export function drawWordCloud({
  ctx,
  data,
  width,
  height,
  palette
}: {
  ctx: CanvasRenderingContext2D;
  data: { word: string; weight: number }[];
  width: number;
  height: number;
  palette: string[];
}) {
  ctx.clearRect(0, 0, width, height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const centerX = width / 2;
  const centerY = height / 2;
  const max = Math.max(...data.map((item) => item.weight), 1);
  data.forEach((item, index) => {
    const size = 14 + (item.weight / max) * 26;
    ctx.font = `600 ${size}px sans-serif`;
    ctx.fillStyle = palette[index % palette.length];
    const angle = (index / data.length) * Math.PI * 2;
    const radius = 20 + (index % 5) * 16;
    ctx.fillText(item.word, centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
  });
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}
