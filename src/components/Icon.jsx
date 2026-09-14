import {
  BarChart3, BookOpen, Braces, Bug, CheckCircle2, ClipboardCheck, Database,
  FileCheck2, GitBranch, Layers3, ListChecks, MessageSquareText, PlayCircle,
  Route, ScanSearch, Search, Send, ShoppingCart, Workflow,
} from 'lucide-react';

const icons = {
  bookOpen: BookOpen,
  braces: Braces,
  bug: Bug,
  chart: BarChart3,
  check: CheckCircle2,
  clipboard: ClipboardCheck,
  database: Database,
  fileCheck: FileCheck2,
  github: GitBranch,
  layers: Layers3,
  listChecks: ListChecks,
  message: MessageSquareText,
  play: PlayCircle,
  route: Route,
  scan: ScanSearch,
  search: Search,
  send: Send,
  shoppingCart: ShoppingCart,
  workflow: Workflow,
};

export function Icon({ name, ...props }) {
  const Component = icons[name] || CheckCircle2;
  return <Component aria-hidden="true" {...props} />;
}
