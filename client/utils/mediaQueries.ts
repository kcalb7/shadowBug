const width = {
  xs: '576px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
}

export const bootstrapMin = {
  xs: `(max-width: ${width.xs})`,
  sm: `(min-width: ${width.sm})`,
  md: `(min-width: ${width.md})`,
  lg: `(min-width: ${width.lg})`,
  xl: `(min-width: ${width.xl})`,
  xxl: `(min-width: ${width.xxl})`
}

export const bootstrapMax = {
  xs: `(max-width: ${width.xs})`,
  sm: `(max-width: ${width.sm})`,
  md: `(max-width: ${width.md})`,
  lg: `(max-width: ${width.lg})`,
  xl: `(max-width: ${width.xl})`,
  xxl: `(min-width: ${width.xxl})`
}
