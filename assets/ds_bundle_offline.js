/* @ds-bundle: {"format":3,"namespace":"CV_aa441c","components":[{"name":"Avatar","sourcePath":"components/foundation/Avatar.jsx"},{"name":"Badge","sourcePath":"components/foundation/Badge.jsx"},{"name":"Divider","sourcePath":"components/foundation/Divider.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/foundation/Icon.jsx"},{"name":"IconTile","sourcePath":"components/foundation/IconTile.jsx"},{"name":"Quote","sourcePath":"components/foundation/Quote.jsx"},{"name":"SectionTitle","sourcePath":"components/foundation/SectionTitle.jsx"},{"name":"Aside","sourcePath":"components/resume/Aside.jsx"},{"name":"ContactRow","sourcePath":"components/resume/ContactRow.jsx"},{"name":"EducationCard","sourcePath":"components/resume/EducationCard.jsx"},{"name":"ExperienceItem","sourcePath":"components/resume/ExperienceItem.jsx"},{"name":"LanguageRow","sourcePath":"components/resume/LanguageRow.jsx"},{"name":"ProjectCard","sourcePath":"components/resume/ProjectCard.jsx"},{"name":"SkillChip","sourcePath":"components/resume/SkillChip.jsx"},{"name":"SkillGroup","sourcePath":"components/resume/SkillGroup.jsx"},{"name":"SocialLink","sourcePath":"components/resume/SocialLink.jsx"},{"name":"ToolCard","sourcePath":"components/resume/ToolCard.jsx"}],"sourceHashes":{"components/foundation/Avatar.jsx":"5d64fefa84b9","components/foundation/Badge.jsx":"9cd834ec296c","components/foundation/Divider.jsx":"4179795da509","components/foundation/Icon.jsx":"436e42740218","components/foundation/IconTile.jsx":"0797b9802757","components/foundation/Quote.jsx":"482d090e9e25","components/foundation/SectionTitle.jsx":"104cfbb474ea","components/resume/Aside.jsx":"5b7e406d9d43","components/resume/ContactRow.jsx":"d4e648ce9e4c","components/resume/EducationCard.jsx":"9e3f97f2f8d9","components/resume/ExperienceItem.jsx":"dc670fc00045","components/resume/LanguageRow.jsx":"0834c26687dd","components/resume/ProjectCard.jsx":"8d54300019a8","components/resume/SkillChip.jsx":"3e83d0452b1c","components/resume/SkillGroup.jsx":"b3a10d84b19c","components/resume/SocialLink.jsx":"78793f1b8aad","components/resume/ToolCard.jsx":"e53cd68d862c","ui_kits/resume/resumeData.js":"4532fe846e0a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CV_aa441c = window.CV_aa441c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/foundation/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  alt = '',
  size = 96,
  ring = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-full)',
      flexShrink: 0,
      overflow: 'hidden',
      background: 'var(--bg-surface)',
      boxShadow: ring ? '0 0 0 4px var(--avatar-ring)' : 'none',
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline rule matching the aside dividers. */
function Divider({
  vertical = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: vertical ? {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--border-soft)',
      ...style
    } : {
      height: 1,
      width: '100%',
      background: 'var(--border-soft)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Divider.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style line icons (MIT, lucide.dev) — the .fig uses this exact
   thin 2px stroke-line family. Substituted from CDN-available Lucide. */
const PATHS = {
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  graduation: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: d || ''
    }
  }, rest));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    bg: 'var(--badge-success-bg)',
    fg: 'var(--badge-success-text)'
  },
  accent: {
    bg: 'rgba(123,97,255,0.14)',
    fg: 'var(--violet-500)'
  },
  blue: {
    bg: 'rgba(81,108,247,0.14)',
    fg: 'var(--blue-500)'
  },
  neutral: {
    bg: 'var(--bg-surface)',
    fg: 'var(--text-secondary)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--r-md)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-accent)',
      fontWeight: 500,
      fontSize: 'var(--fs-xs)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Badge.jsx", error: String((e && e.message) || e) }); }

// components/foundation/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Skeuomorphic rounded-square tile used for company logos, school crests,
   tool icons and education tiles. Accepts a letter/short text, an emoji,
   or an <img>/child. Optional colored drop-shadow matches the .fig tiles. */
const SHADOWS = {
  none: 'var(--shadow-sm)',
  coral: '0 6px 14px rgba(236,109,98,0.45)',
  yellow: '0 6px 14px rgba(245,196,81,0.45)',
  green: '0 6px 14px rgba(104,204,88,0.45)',
  blue: '0 6px 14px rgba(81,108,247,0.40)'
};
const SIZES = {
  sm: 36,
  md: 48,
  lg: 56
};
function IconTile({
  label,
  children,
  bg = 'var(--ink-900)',
  color = '#fff',
  size = 'md',
  radius = 12,
  shadow = 'none',
  img,
  alt = '',
  style,
  ...rest
}) {
  const px = SIZES[size] || size;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: px,
      height: px,
      flexShrink: 0,
      borderRadius: radius,
      background: img ? `center/cover no-repeat url(${img})` : bg,
      color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: px * 0.42,
      letterSpacing: '-0.02em',
      boxShadow: SHADOWS[shadow] || SHADOWS.none,
      overflow: 'hidden',
      ...style
    }
  }, rest), !img && (children ?? label));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pull-quote block from the aside — opening & closing quote glyphs around
   a short line, with a muted attribution underneath. */
function Quote({
  children,
  author,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quote",
    size: 18,
    color: "var(--text-body)",
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, children), author && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, author)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quote",
    size: 18,
    color: "var(--text-body)",
    style: {
      flexShrink: 0,
      alignSelf: 'flex-start',
      transform: 'rotate(180deg)'
    }
  }));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Quote.jsx", error: String((e && e.message) || e) }); }

// components/foundation/SectionTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Section heading with the timeline marker — a ringed dot to the left of
   an Outfit semibold title, exactly as the resume main column. Set
   `marker={false}` for a plain heading. */
function SectionTitle({
  children,
  marker = true,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      ...style
    }
  }, rest), marker && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-full)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--r-full)',
      background: 'var(--violet-500)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h1)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      color: color || 'var(--text-heading)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/resume/ContactRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Aside contact line: a soft-circle line-icon, a small grey label and the
   value on a second line. */
function ContactRow({
  icon,
  label,
  value,
  href,
  style,
  ...rest
}) {
  const Value = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-full)',
      flexShrink: 0,
      background: 'var(--bg-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-body)",
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.2
    }
  }, label), /*#__PURE__*/React.createElement(Value, {
    href: href,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)',
      textDecoration: 'none',
      lineHeight: 1.3,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/resume/EducationCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Education tile: logo + institution on one line, the qualification title
   below, and a small date caption. Matches the resume education grid. */
function EducationCard({
  logo,
  institution,
  title,
  date,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 20,
      borderRadius: 'var(--r-lg)',
      background: 'var(--bg-surface)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    size: "md",
    img: logo && logo.img,
    label: logo && logo.label,
    bg: logo && logo.bg || 'var(--ink-900)',
    shadow: logo && logo.shadow || 'none',
    radius: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-secondary)',
      lineHeight: 1.3
    }
  }, institution)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-strong)',
      lineHeight: 1.25,
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, date)));
}
Object.assign(__ds_scope, { EducationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/EducationCard.jsx", error: String((e && e.message) || e) }); }

// components/resume/ExperienceItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Meta({
  dateRange,
  location,
  present,
  align = 'right'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: align === 'right' ? 'flex-end' : 'flex-start',
      flexShrink: 0
    }
  }, present ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, "Present") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, dateRange), location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mapPin",
    size: 13,
    color: "var(--text-muted)",
    strokeWidth: 1.75
  }), location));
}
function RoleCompany({
  role,
  company
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.3
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-strong)',
      lineHeight: 1.25,
      letterSpacing: 'var(--ls-tight)'
    }
  }, company));
}

/* Work-experience entry.
   variant='card'     → filled card (the Resume-dark layout, theme-agnostic)
   variant='timeline' → light two-column timeline row with description */
function ExperienceItem({
  role,
  company,
  dateRange,
  location,
  present = false,
  description,
  logo,
  variant = 'card',
  style,
  ...rest
}) {
  const tile = logo ? /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    size: "md",
    img: logo.img,
    label: logo.label,
    bg: logo.bg || 'var(--ink-900)',
    radius: 10
  }) : /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    size: "md",
    label: (company || '?').charAt(0),
    bg: "var(--ink-900)",
    radius: 10
  });
  if (variant === 'timeline') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        gap: 24,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--ink-300)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 320px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-secondary)'
      }
    }, dateRange, location && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "mapPin",
      size: 13,
      color: "var(--text-muted)",
      strokeWidth: 1.75
    }), location), present && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "accent"
    }, "Present")), /*#__PURE__*/React.createElement(RoleCompany, {
      role: role,
      company: company
    })), description && /*#__PURE__*/React.createElement("p", {
      style: {
        flex: '1 1 360px',
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--text-body)'
      }
    }, description));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 20px',
      borderRadius: 'var(--r-lg)',
      background: 'var(--bg-surface)',
      ...style
    }
  }, rest), tile, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(RoleCompany, {
    role: role,
    company: company
  })), /*#__PURE__*/React.createElement(Meta, {
    dateRange: dateRange,
    location: location,
    present: present
  }));
}
Object.assign(__ds_scope, { ExperienceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/ExperienceItem.jsx", error: String((e && e.message) || e) }); }

// components/resume/LanguageRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Language row: flag chip + language name + proficiency caption.
   `flag` is a 2-letter ISO country code (rendered via flagcdn.com). */
function LanguageRow({
  flag,
  language,
  level,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: (window.__resources && window.__resources['flag_' + flag]) || `https://flagcdn.com/w40/${flag}.png`,
    srcSet: (window.__resources && window.__resources['flag_' + flag]) ? undefined : `https://flagcdn.com/w80/${flag}.png 2x`,
    alt: "",
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--r-full)',
      flexShrink: 0,
      objectFit: 'cover',
      boxShadow: '0 0 0 1px var(--border-soft)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, language), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.2
    }
  }, level)));
}
Object.assign(__ds_scope, { LanguageRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/LanguageRow.jsx", error: String((e && e.message) || e) }); }

// components/resume/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Project card: cover image, title, short description and a link row. */
function ProjectCard({
  image,
  title,
  description,
  linkLabel,
  href,
  linkIcon = 'link',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 16,
      borderRadius: 'var(--r-lg)',
      background: 'var(--bg-surface)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      background: `center/cover no-repeat url(${image})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)'
    }
  }, description)), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--fs-sm)',
      color: 'var(--link)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: linkIcon,
    size: 16,
    color: "var(--link)",
    strokeWidth: 1.9
  }), linkLabel));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/resume/SkillChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Skill chip. `solid` = filled dark navy emphasis tile (white text);
   default = soft surface tile with violet text. Pass `items` for a
   bulleted multi-skill tile, or plain children for a single label. */
function SkillChip({
  children,
  items,
  solid = false,
  style,
  ...rest
}) {
  const base = {
    minHeight: 56,
    padding: '12px 16px',
    borderRadius: 'var(--r-md)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 'var(--fs-sm)',
    lineHeight: 1.35,
    background: solid ? 'var(--ink-900)' : 'var(--bg-surface)',
    color: solid ? '#fff' : 'var(--violet-500)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), items ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      flexShrink: 0,
      background: solid ? 'var(--violet-400)' : 'var(--violet-500)'
    }
  }), it))) : children);
}
Object.assign(__ds_scope, { SkillChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/SkillChip.jsx", error: String((e && e.message) || e) }); }

// components/resume/SkillGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A skills category: violet round icon + label on the left, a responsive
   grid of SkillChip children on the right. */
function SkillGroup({
  icon = 'palette',
  label,
  children,
  columns = 2,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--r-full)',
      background: 'rgba(123,97,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--violet-500)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-sm)',
      color: 'var(--violet-500)',
      textAlign: 'center'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 12,
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
    }
  }, children));
}
Object.assign(__ds_scope, { SkillGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/SkillGroup.jsx", error: String((e && e.message) || e) }); }

// components/resume/SocialLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Brand-colored social link: filled round icon + network label + handle. */
const BRANDS = {
  github: {
    bg: '#1b1f24',
    icon: 'github'
  },
  linkedin: {
    bg: '#0a66c2',
    icon: 'linkedin'
  },
  facebook: {
    bg: '#1877f2',
    icon: 'facebook'
  }
};
function SocialLink({
  network,
  handle,
  href,
  style,
  ...rest
}) {
  const b = BRANDS[network] || {
    bg: 'var(--ink-900)',
    icon: 'link'
  };
  const label = network.charAt(0).toUpperCase() + network.slice(1);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-full)',
      flexShrink: 0,
      background: b.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: b.icon,
    size: 18,
    color: "#fff",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-muted)',
      lineHeight: 1.2
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)',
      lineHeight: 1.3,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, handle)));
}
Object.assign(__ds_scope, { SocialLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/SocialLink.jsx", error: String((e && e.message) || e) }); }

// components/resume/Aside.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GroupLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, children);
}

/* The full left column of the resume: avatar, name, role, quote, contacts,
   socials and languages. Pass plain data arrays; renders the dividers and
   group labels for you. */
function Aside({
  name,
  role,
  avatar,
  quote,
  contacts = [],
  socials = [],
  languages = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      width: 'var(--aside-width)',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    alt: name,
    size: 96
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-display)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-heading)',
      lineHeight: 1.1
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-role)'
    }
  }, role)), quote && /*#__PURE__*/React.createElement(__ds_scope.Quote, {
    author: quote.author
  }, quote.text), /*#__PURE__*/React.createElement(__ds_scope.Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, contacts.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.ContactRow, _extends({
    key: i
  }, c)))), socials.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GroupLabel, null, "Socials"), socials.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.SocialLink, _extends({
    key: i
  }, s))))), languages.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GroupLabel, null, "Languages"), languages.map((l, i) => /*#__PURE__*/React.createElement(__ds_scope.LanguageRow, _extends({
    key: i
  }, l))))));
}
Object.assign(__ds_scope, { Aside });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/Aside.jsx", error: String((e && e.message) || e) }); }

// components/resume/ToolCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tool card: centered app icon, name and a one-line caption. */
function ToolCard({
  logo,
  name,
  caption,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      padding: '24px 16px',
      borderRadius: 'var(--r-lg)',
      textAlign: 'center',
      background: 'var(--bg-surface)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    size: "lg",
    img: logo && logo.img,
    label: logo && logo.label,
    bg: logo && logo.bg || 'var(--ink-900)',
    shadow: logo && logo.shadow || 'none',
    radius: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-strong)'
    }
  }, name), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { ToolCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resume/ToolCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resume/resumeData.js
try { (() => {
/* Dimitar Kostov — résumé content.
   Sourced from the uploaded profile (facebook-info.png) + diploma PDFs.
   Swap any field freely; the components are fully data-driven.
   window.RESUME_DATA is read by index.html. */
window.RESUME_DATA = {
  name: 'Dimitar Kostov',
  role: 'Software Engineer',
  avatar: '../../assets/dimitar-avatar.png',
  quote: {
    text: 'Simple things should be simple, complex things should be possible.',
    author: 'Alan Kay'
  },
  contacts: [{
    icon: 'mail',
    label: 'Email',
    value: 'dimitar.kostov@gmail.com',
    href: 'mailto:dimitar.kostov@gmail.com'
  }, {
    icon: 'link',
    label: 'Website',
    value: 'github.com/dimitarkostov',
    href: 'https://github.com/dimitarkostov'
  }, {
    icon: 'phone',
    label: 'Phone',
    value: '+31 6 12 34 56 78'
  }, {
    icon: 'mapPin',
    label: 'Address',
    value: 'The Hague, Netherlands'
  }],
  socials: [{
    network: 'github',
    handle: 'dimitarkostov',
    href: 'https://github.com/dimitarkostov'
  }, {
    network: 'linkedin',
    handle: 'dimitar-kostov',
    href: 'https://linkedin.com/in/dimitar-kostov'
  }, {
    network: 'facebook',
    handle: 'dimitar.kostov',
    href: 'https://facebook.com/dimitar.kostov'
  }],
  languages: [{
    flag: 'bg',
    language: 'Bulgarian',
    level: 'Native'
  }, {
    flag: 'gb',
    language: 'English',
    level: 'Professional working'
  }, {
    flag: 'nl',
    language: 'Dutch',
    level: 'Limited working'
  }],
  experience: [{
    role: 'Software Development Engineer',
    company: 'Helikon',
    dateRange: 'Aug 2022 – Sep 2023',
    location: 'Bulgaria',
    logo: {
      label: 'H',
      bg: 'var(--blue-500)'
    },
    description: 'Built and maintained internal retail and inventory web applications across the full stack, shipping features used daily by store teams.'
  }, {
    role: 'Computer Science Lecturer',
    company: 'PMG "Akad. N. Obreshkov"',
    dateRange: 'Mar 2022 – Jun 2022',
    location: 'Burgas, BG',
    logo: {
      label: 'P',
      bg: 'var(--coral-500)',
      shadow: 'coral'
    },
    description: 'Taught programming fundamentals and web development to secondary-school students at one of Bulgaria\u2019s leading maths high schools.'
  }, {
    role: 'Software Engineer',
    company: 'Fiverr',
    dateRange: 'Oct 2019 – Dec 2020',
    location: 'Remote',
    logo: {
      label: 'fi',
      bg: 'var(--green-600)',
      shadow: 'green'
    },
    description: 'Delivered 50+ freelance web projects for international clients — landing pages, dashboards and integrations — with a 5-star rating.'
  }, {
    role: 'Full Stack Developer',
    company: 'MaxProgress',
    dateRange: 'Jun 2019 – Feb 2020',
    location: 'Burgas, BG',
    logo: {
      label: 'M',
      bg: 'var(--violet-500)'
    },
    description: 'Developed client websites and web apps end-to-end, from database schema and APIs to responsive front-ends.'
  }, {
    role: 'Computer Science Lecturer',
    company: 'Code-X Academy',
    dateRange: 'Oct 2017 – Sep 2019',
    location: 'Burgas, BG',
    logo: {
      label: 'C',
      bg: 'var(--ink-900)'
    },
    description: 'Designed and ran a hands-on coding curriculum, mentoring teens through their first real software projects.'
  }],
  education: [{
    institution: 'PMG "Akad. N. Obreshkov"',
    title: 'Secondary Diploma — Maths & Informatics',
    date: 'Class of 2020',
    logo: {
      label: 'P',
      bg: 'var(--coral-500)',
      shadow: 'coral'
    }
  }, {
    institution: 'PMG "Akad. N. Obreshkov"',
    title: 'Professional Qualification — Systems Programmer',
    date: '2020',
    logo: {
      label: 'S',
      bg: 'var(--green-600)',
      shadow: 'green'
    }
  }, {
    institution: 'Code-X Academy',
    title: 'Software Engineering Track',
    date: '2017',
    logo: {
      label: 'C',
      bg: 'var(--blue-500)',
      shadow: 'blue'
    }
  }],
  skills: [{
    icon: 'code',
    label: 'Frontend',
    columns: 2,
    chips: [{
      text: 'React'
    }, {
      text: 'TypeScript',
      solid: true
    }, {
      items: ['JavaScript', 'HTML / CSS']
    }, {
      text: 'Next.js',
      solid: true
    }]
  }, {
    icon: 'server',
    label: 'Backend',
    columns: 2,
    chips: [{
      text: 'Node.js'
    }, {
      text: 'PHP',
      solid: true
    }, {
      items: ['REST APIs', 'SQL']
    }, {
      text: 'Docker',
      solid: true
    }]
  }],
  projects: [{
    title: 'Helikon Retail Suite',
    linkLabel: 'github.com/dimitarkostov',
    href: 'https://github.com/dimitarkostov',
    description: 'Internal inventory & POS web app used across retail stores — React front-end, Node API, Postgres.'
  }, {
    title: 'Code-X Curriculum',
    linkLabel: 'code-x.academy',
    href: '#',
    description: 'An interactive, project-based programming curriculum for teenagers, taught to 100+ students.'
  }],
  tools: [{
    name: 'VS Code',
    caption: 'Editor',
    logo: {
      label: 'V',
      bg: 'var(--blue-500)',
      shadow: 'blue'
    }
  }, {
    name: 'Git',
    caption: 'Versioning',
    logo: {
      label: 'G',
      bg: 'var(--coral-500)',
      shadow: 'coral'
    }
  }, {
    name: 'Docker',
    caption: 'Containers',
    logo: {
      label: 'D',
      bg: 'var(--blue-300)',
      shadow: 'blue'
    }
  }, {
    name: 'Figma',
    caption: 'Design',
    logo: {
      label: 'F',
      bg: 'var(--violet-500)'
    }
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resume/resumeData.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Aside = __ds_scope.Aside;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.EducationCard = __ds_scope.EducationCard;

__ds_ns.ExperienceItem = __ds_scope.ExperienceItem;

__ds_ns.LanguageRow = __ds_scope.LanguageRow;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SkillChip = __ds_scope.SkillChip;

__ds_ns.SkillGroup = __ds_scope.SkillGroup;

__ds_ns.SocialLink = __ds_scope.SocialLink;

__ds_ns.ToolCard = __ds_scope.ToolCard;

})();
