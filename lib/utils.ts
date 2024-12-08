// lib/utils.ts

/**
 * クラス名を結合するユーティリティ関数
 * @param classes - 結合するクラス名の配列
 * @returns 結合されたクラス名の文字列
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
