export type ClassNameInput = string | null;

export function cx(...classNames: (string | null)[]): string {
  return classNames.filter(n => n != null && n !== "").join(" ");
}