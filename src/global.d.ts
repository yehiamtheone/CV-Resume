// global.d.ts
declare module '*.css' {
  const styles: { [key: string]: string };
  export default styles;
}