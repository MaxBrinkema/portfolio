import type * as React from 'react';

type Lang = 'de' | 'en';
/** Forces a visual state in previews and docs; real pages leave it unset. */
type PreviewState = 'hover' | 'focus' | 'active';

export interface WordmarkProps { variant?: 'wordmark' | 'monogram'; /** px, default 24 */ height?: number; label?: string; className?: string }
export declare function Wordmark(props: WordmarkProps): React.ReactElement;

export type IconName = 'arrow-right' | 'arrow-up-right' | 'download' | 'menu' | 'close' | 'sun' | 'moon' | 'check' | 'chevron-down'
  | 'status-proposed' | 'status-accepted' | 'status-superseded' | 'status-deprecated' | 'info' | 'learned' | 'warning' | 'mail' | 'arrow-left';
export interface IconProps { name: IconName; /** px, default 20 */ size?: number; strokeWidth?: number; /** set only when the icon carries meaning on its own */ label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'primary' | 'secondary'; icon?: IconName; iconPosition?: 'start' | 'end'; href?: string; state?: PreviewState; children: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { external?: boolean; arrow?: boolean; disabled?: boolean; lang?: Lang; state?: PreviewState }
export declare function TextLink(props: TextLinkProps): React.ReactElement;

export interface DownloadButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { label?: string; /** e.g. "PDF · 2 Seiten · 180 KB" */ meta?: string; lang?: Lang; disabled?: boolean; state?: PreviewState }
export declare function DownloadButton(props: DownloadButtonProps): React.ReactElement;

export interface LanguageSwitchProps { value: Lang; hrefs?: { de: string; en: string }; onChange?: (lang: Lang) => void; className?: string; state?: PreviewState | 'disabled'; stateFor?: Lang }
export declare function LanguageSwitch(props: LanguageSwitchProps): React.ReactElement;

export interface ThemeToggleProps { theme?: 'light' | 'dark'; onToggle?: (next: 'light' | 'dark') => void; lang?: Lang; disabled?: boolean; state?: PreviewState; className?: string }
export declare function ThemeToggle(props: ThemeToggleProps): React.ReactElement;

export type NavId = 'vorstellung' | 'projekte' | 'lebenslauf' | 'architektur';
export interface SiteHeaderProps {
  lang?: Lang; /** false = notice pages: wordmark + language only */ session?: boolean; current?: NavId;
  theme?: 'light' | 'dark'; onThemeToggle?: (next: 'light' | 'dark') => void; onLanguageChange?: (lang: Lang) => void;
  langHrefs?: { de: string; en: string }; skipHref?: string; menuOpen?: boolean; navState?: PreviewState; navStateFor?: NavId; className?: string;
}
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;

export interface SiteFooterProps { /** 'titleblock' = Schriftfeld (Richtung A) */ variant?: 'titleblock'; lang?: Lang; year?: number; email?: string; /** build date, e.g. "Oktober 2026" */ updated?: string; /** false on notice pages */ cta?: boolean; privacyHref?: string; architectureHref?: string; className?: string }
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;

export interface TocItem { id: string; label: string; /** 3 = sub-entry, unnumbered */ level?: 2 | 3; num?: string }
export interface TocProps { items: TocItem[]; current?: string; title?: string; lang?: Lang; open?: boolean; /** always collapsed (mobile, above the article) */ compact?: boolean; state?: PreviewState; stateFor?: string; className?: string }
export declare function Toc(props: TocProps): React.ReactElement;

export interface MetricProps { value: string; unit?: string; /** what was measured — bold */ label: string; /** why it matters — muted */ context?: string; size?: 'xl' | 'md' | 'sm'; tone?: 'accent'; className?: string }
export declare function Metric(props: MetricProps): React.ReactElement;

export interface AccentBandProps { label?: string; labelledBy?: string; children: React.ReactNode; className?: string }
export declare function AccentBand(props: AccentBandProps): React.ReactElement;

export interface CaseTeaserProps {
  number: string; title: string; summary?: string; href?: string; tags?: string[];
  /** e.g. ['Case Study 01', '2025', '6 Monate'] */ meta?: string[]; /** 1–3 key figures; the first is set in the accent colour */ kpis?: { value: string; label: string }[];
  /** view-transition-name of the title; default 'bk-case-<number>' when linked, false to disable */ transitionName?: string | false; /** build-up of the visual; default true */ motion?: boolean;
  /** small inline SVG sketch using the bk-dg-* classes */ visual?: React.ReactNode; /** extra block below the body, e.g. a DecisionCompare; sits above the stretched link */ detail?: React.ReactNode;
  variant?: 'feature' | 'row'; headingLevel?: 2 | 3 | 4; disabled?: boolean; lang?: Lang; state?: PreviewState; className?: string;
}
export declare function CaseTeaser(props: CaseTeaserProps): React.ReactElement;

export interface TagProps { children: React.ReactNode; href?: string; selected?: boolean; onClick?: () => void; disabled?: boolean; state?: PreviewState; className?: string }
export declare function Tag(props: TagProps): React.ReactElement;

export interface StatusBadgeProps { status: 'proposed' | 'accepted' | 'superseded' | 'deprecated'; /** e.g. 'ADR-004' or a count */ prefix?: string; lang?: Lang; className?: string }
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement;

export interface CalloutProps { variant?: 'learned' | 'note' | 'warning'; title?: string; lang?: Lang; children: React.ReactNode; className?: string }
export declare function Callout(props: CalloutProps): React.ReactElement;

export interface ProseProps { as?: keyof JSX.IntrinsicElements; lang?: string; children: React.ReactNode; className?: string }
export declare function Prose(props: ProseProps): React.ReactElement;

export interface CodeBlockProps { code?: string; children?: React.ReactNode; /** ts, js, tsx, astro, json, bash/sh get syntax highlighting */ language?: string; caption?: string; /** default true; only applies to `code` */ highlight?: boolean; lang?: Lang; className?: string }
export declare function CodeBlock(props: CodeBlockProps): React.ReactElement;

export interface TableColumn { key: string; label: string; align?: 'start' | 'end' }
export interface TableProps { caption: string; columns: TableColumn[]; rows: Record<string, React.ReactNode>[]; /** row index of the chosen option */ highlight?: number; highlightLabel?: string; note?: string; wide?: boolean; /** rows appear, then the marker sweeps the chosen row; default true */ motion?: boolean; lang?: Lang; className?: string }
export declare function Table(props: TableProps): React.ReactElement;

export interface FigureProps { /** inline <svg> using the .bk-dg-* classes */ children: React.ReactNode; caption?: string; label?: string; regionLabel?: string; wide?: boolean; grid?: boolean; /** build-up on first scroll-in; default true */ motion?: boolean; className?: string }
export declare function Figure(props: FigureProps): React.ReactElement;

export interface TimelineStep { title: string; period: string; current?: boolean; /** thesis title → pill 'Abschlussarbeit' */ thesis?: string; bullets?: string[] }
export interface TimelineItem { org: string; period: string; current?: boolean; /** square node: only a thesis at this organisation */ education?: boolean; description?: string; steps: TimelineStep[] }
export interface TimelineProps { items: TimelineItem[]; /** hide bullets (start page) */ compact?: boolean; label?: string; headingLevel?: 2 | 3 | 4; lang?: Lang; className?: string }
export declare function Timeline(props: TimelineProps): React.ReactElement;

export interface NoticePageProps { /** expired 410 · invalid 403 · invite (no code) · 404 · 500 */ variant: 'expired' | 'invalid' | 'invite' | '404' | '500'; lang?: Lang; title?: string; text?: string; email?: string; homeHref?: string; projectsHref?: string; className?: string }
export declare function NoticePage(props: NoticePageProps): React.ReactElement;

export declare function Mark(props: { children: React.ReactNode; className?: string }): React.ReactElement;
export interface PortraitProps { src?: string; alt?: string; lang?: Lang; className?: string }
export declare function Portrait(props: PortraitProps): React.ReactElement;
export interface HeroProps { /** 'blueprint' (A) */ variant?: 'blueprint'; /** replaces the portrait column */ aside?: React.ReactNode; status?: string; greeting?: string; role?: string; intro?: React.ReactNode; actions?: React.ReactNode; portrait?: PortraitProps | false; lang?: Lang; className?: string }
export declare function Hero(props: HeroProps): React.ReactElement;
export interface SubNavItem { id: string; label: string; count?: string; href?: string }
export interface SubNavProps { items: SubNavItem[]; current?: string; label?: string; lang?: Lang; state?: PreviewState; stateFor?: string; className?: string }
export declare function SectionNav(props: SubNavProps): React.ReactElement;
export declare function DocTabs(props: SubNavProps): React.ReactElement;
export interface SectionHeadingProps { children: React.ReactNode; id?: string; num?: string; level?: 2 | 3; anchor?: boolean; lang?: Lang; className?: string }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;
export interface FactListProps { items: { label: string; value: React.ReactNode }[]; className?: string }
export declare function FactList(props: FactListProps): React.ReactElement;
export interface PageHeaderProps { title: string; back?: { href: string; label: string }; eyebrow?: string[]; lead?: React.ReactNode; facts?: FactListProps['items']; actions?: React.ReactNode; band?: boolean; size?: 'xl'; /** view-transition-name of the h1, e.g. 'bk-case-01' */ transitionName?: string; children?: React.ReactNode; className?: string }
export declare function PageHeader(props: PageHeaderProps): React.ReactElement;
export interface FocusListProps { items: { title: string; text?: string; num?: string; meta?: string }[]; numbered?: boolean; headingLevel?: 3 | 4; className?: string }
export declare function FocusList(props: FocusListProps): React.ReactElement;
export interface Cert { issuer: string; name: string; date: string; verifyUrl: string; verifyLabel: string }
export interface CertListProps { items: Cert[]; lang?: Lang; state?: PreviewState; stateFor?: number; className?: string }
export declare function CertList(props: CertListProps): React.ReactElement;
export interface ADR { id: string; title: string; summary?: string; area: string; relation?: string; status: StatusBadgeProps['status']; date: string; href?: string }
export interface ADRListProps { items: ADR[]; filters?: { key: string; label: string; count: number }[]; activeFilter?: string; onFilter?: (key: string) => void; summary?: string; lang?: Lang; state?: PreviewState; stateFor?: string; className?: string }
export declare function ADRList(props: ADRListProps): React.ReactElement;
export interface ConsequencesProps { positive: React.ReactNode[]; negative: React.ReactNode[]; lang?: Lang; className?: string }
export declare function Consequences(props: ConsequencesProps): React.ReactElement;
export interface PagerProps { prev?: { label: string; title: string; href?: string }; next?: { label: string; title: string; href?: string }; label?: string; lang?: Lang; state?: PreviewState; stateFor?: 'prev' | 'next'; className?: string }
export declare function Pager(props: PagerProps): React.ReactElement;

export interface DecisionOption { name: string; values: Record<string, React.ReactNode>; chosen?: boolean }
export interface DecisionCompareProps { /** key figures of the chosen option, shown under a copper rule */ result?: { value: string; label: string }[]; resultLabel?: string; question: string; criteria: { key: string; label: string }[]; options: DecisionOption[]; eyebrow?: string; caption?: string; href?: string; linkLabel?: string; /** options → chosen → result on first scroll-in; default true */ motion?: boolean; lang?: Lang; className?: string }
export declare function DecisionCompare(props: DecisionCompareProps): React.ReactElement;

declare global {
  interface Window {
    Brinkema: {
      Wordmark: typeof Wordmark; Icon: typeof Icon; Button: typeof Button; TextLink: typeof TextLink; DownloadButton: typeof DownloadButton;
      LanguageSwitch: typeof LanguageSwitch; ThemeToggle: typeof ThemeToggle; SiteHeader: typeof SiteHeader; SiteFooter: typeof SiteFooter;
      Toc: typeof Toc; Metric: typeof Metric; AccentBand: typeof AccentBand; CaseTeaser: typeof CaseTeaser; Tag: typeof Tag; StatusBadge: typeof StatusBadge;
      Callout: typeof Callout; Prose: typeof Prose; CodeBlock: typeof CodeBlock; Table: typeof Table; Figure: typeof Figure; Timeline: typeof Timeline; NoticePage: typeof NoticePage;
      Mark: typeof Mark; Portrait: typeof Portrait; Hero: typeof Hero; SectionNav: typeof SectionNav; DocTabs: typeof DocTabs; SectionHeading: typeof SectionHeading; FactList: typeof FactList;
      PageHeader: typeof PageHeader; FocusList: typeof FocusList; CertList: typeof CertList; ADRList: typeof ADRList; Consequences: typeof Consequences; Pager: typeof Pager; DecisionCompare: typeof DecisionCompare;
    };
  }
}
