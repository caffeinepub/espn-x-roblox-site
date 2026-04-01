# ESPN x Roblox Site

## Current State
New project. Only scaffold files exist (empty Motoko actor, no frontend content).

## Requested Changes (Diff)

### Add
- Animated scoreboard ticker at top with Roblox game stats (players online, top scores)
- Navigation bar combining ESPN red (#CC0000) and Roblox red/white with blocky/pixel font
- Hero/homepage section with bold ESPN broadcast energy + Roblox blocky design
- Sports news feed section with mock headlines and scores in Roblox-themed card UI
- Featured Games section styled like ESPN top stories but for Roblox games
- Player/athlete cards styled as Roblox avatars in ESPN sports card presentation
- Pixel/blocky fonts (e.g. Press Start 2P from Google Fonts) for headings

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: simple static data actor providing mock news items, game stats, and player cards
2. Frontend:
   - Install Press Start 2P pixel font via Google Fonts
   - Build animated ticker component (horizontal scroll of game stats)
   - Build navbar with ESPN red + Roblox-style blocky typography
   - Build hero section with bold full-width design
   - Build NewsCard component for sports news feed
   - Build GameCard component for Featured Games section
   - Build PlayerCard component with Roblox avatar aesthetic in ESPN card style
   - Assemble all sections on main page
