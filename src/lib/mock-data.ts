export const dashboardStats = {
  streak: 5,
  morningStatus: 'In progress',
  oneThing: 'Ship Q2 onboarding deck before noon.',
  rescueUses: 2,
  nightStatus: 'Not started',
  weeklyTrend: '+18% morning consistency',
};

export const morningFlow = [
  'Don’t scroll yet',
  '90-second urge pause',
  'Breathing reset',
  '3-minute journal',
  'Today\'s One Thing',
  'Light + hydration + movement',
];

export const urgeOptions = [
  { id: 'scroll', label: 'I want to scroll', seconds: 90, tool: 'Urge surfing timer' },
  { id: 'anxious', label: 'I\'m anxious', seconds: 120, tool: 'Box breathing reset' },
  { id: 'overstimulated', label: 'I\'m overstimulated', seconds: 90, tool: 'Defusion prompt' },
  { id: 'avoidance', label: 'I\'m avoiding work', seconds: 60, tool: 'Stand + walk cue' },
  { id: 'stimulation', label: 'I want stimulation', seconds: 75, tool: 'Need-check prompt' },
];

export const insightCards = [
  { label: 'Mornings completed', value: '16 / 21' },
  { label: 'Most-used rescue', value: 'Urge surfing' },
  { label: 'Evening resets', value: '11 this month' },
  { label: 'Current streak', value: '5 days' },
  { label: 'Peak urge window', value: '3:00–4:30 PM' },
];
