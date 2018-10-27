import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";

export function isSmartphone(width: Breakpoint): boolean {
  return isWidthDown("xs", width);
}

export function isTablet(width: Breakpoint): boolean {
  return isWidthDown("sm", width);
}

export function isMobile(width: Breakpoint): boolean {
  return isTablet(width);
}

export function isDesktop(width: Breakpoint): boolean {
  return isWidthUp("md", width);
}
