import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Checks whether a file referenced by an absolute /public path (e.g. "/images/foo.jpg")
 * has actually been added to the public/ directory yet. Lets components fall back to a
 * design placeholder until real photography is dropped in.
 */
export function hasPublicAsset(publicPath: string): boolean {
  return existsSync(join(process.cwd(), "public", publicPath));
}
