#![allow(dead_code)]

use ratatui::style::{Color, Modifier, Style};

// ── Color Palette ────────────────────────────────────────────────────────────

/// Near-black background.
pub const BG: Color = Color::Rgb(14, 16, 20);

/// Primary text — soft white.
pub const FG_PRIMARY: Color = Color::Rgb(210, 215, 224);

/// Secondary text — muted gray.
pub const FG_SECONDARY: Color = Color::Rgb(100, 110, 128);

/// Tertiary / dim text — very muted.
pub const FG_DIM: Color = Color::Rgb(60, 66, 78);

/// Primary brand accent — restrained cyan-blue.
pub const ACCENT: Color = Color::Rgb(86, 156, 214);

/// Status indicator — muted teal-green.
pub const STATUS_ACTIVE: Color = Color::Rgb(78, 186, 154);

/// Subtle border / rule color.
pub const BORDER: Color = Color::Rgb(40, 44, 52);

/// Slightly brighter border for emphasis.
pub const BORDER_LIGHT: Color = Color::Rgb(55, 60, 72);

// ── Styles ───────────────────────────────────────────────────────────────────

/// Background fill style.
pub fn bg() -> Style {
    Style::default().bg(BG)
}

/// Primary text.
pub fn text_primary() -> Style {
    Style::default().fg(FG_PRIMARY)
}

/// Secondary / muted text.
pub fn text_secondary() -> Style {
    Style::default().fg(FG_SECONDARY)
}

/// Dim / tertiary text.
pub fn text_dim() -> Style {
    Style::default().fg(FG_DIM)
}

/// Brand name text.
pub fn brand() -> Style {
    Style::default().fg(ACCENT).add_modifier(Modifier::BOLD)
}

/// Brand name text, larger emphasis (same color, no extra modifier — hierarchy
/// is achieved through spacing and positioning).
pub fn brand_hero() -> Style {
    Style::default().fg(FG_PRIMARY).add_modifier(Modifier::BOLD)
}

/// Subtitle / descriptor label.
pub fn label() -> Style {
    Style::default().fg(FG_SECONDARY)
}

/// Status indicator style.
pub fn status() -> Style {
    Style::default().fg(STATUS_ACTIVE)
}

/// Keyboard shortcut key.
pub fn key_hint() -> Style {
    Style::default().fg(FG_SECONDARY).add_modifier(Modifier::DIM)
}

/// Horizontal rule border style.
pub fn rule() -> Style {
    Style::default().fg(BORDER)
}

/// Slightly brighter rule.
pub fn rule_light() -> Style {
    Style::default().fg(BORDER_LIGHT)
}
