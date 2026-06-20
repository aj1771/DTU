/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A subtle, theme-aware ambient background that sits behind the entire page.
 * Pure CSS (no canvas/JS animation loop) so it's cheap, never blocks the
 * initial paint, and never competes with foreground content for attention.
 */
export default function DynamicBackground() {
  return (
    <div
      className="fixed inset-0 z-[60] overflow-hidden pointer-events-none mix-blend-overlay"
      aria-hidden="true"
    >
      <div className="dynamic-bg-blob dynamic-bg-blob-1" />
      <div className="dynamic-bg-blob dynamic-bg-blob-2" />
      <div className="dynamic-bg-blob dynamic-bg-blob-3" />
      <div className="dynamic-bg-grid" />
    </div>
  );
}
/** just created */