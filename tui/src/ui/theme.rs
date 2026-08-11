#![allow(dead_code)]

use ratatui::style::{Color, Modifier, Style};

// ── Color Palette ────────────────────────────────────────────────────────────

/// Pure black background.
pub const BG: Color = Color::Rgb(0, 0, 0);

/// Slightly elevated surface — for subtle panels.
pub const SURFACE: Color = Color::Rgb(10, 10, 12);

/// Panel border / elevated card.
pub const SURFACE_RAISED: Color = Color::Rgb(18, 18, 22);

/// Primary text — crisp white.
pub const FG_PRIMARY: Color = Color::Rgb(230, 233, 240);

/// Secondary text — cool gray.
pub const FG_SECONDARY: Color = Color::Rgb(120, 128, 145);

/// Tertiary / dim text — very muted.
pub const FG_DIM: Color = Color::Rgb(55, 60, 72);

/// Ghost text — barely visible.
pub const FG_GHOST: Color = Color::Rgb(35, 38, 46);

/// Primary brand accent — electric indigo-blue.
pub const ACCENT: Color = Color::Rgb(99, 140, 255);

/// Brand accent dimmed.
pub const ACCENT_DIM: Color = Color::Rgb(60, 85, 160);

/// Status indicator — soft teal.
pub const STATUS_ACTIVE: Color = Color::Rgb(72, 199, 162);

/// Status indicator dimmed.
pub const STATUS_DIM: Color = Color::Rgb(40, 110, 90);

/// Warning / attention.
pub const WARN: Color = Color::Rgb(230, 180, 80);

/// Subtle border / rule color.
pub const BORDER: Color = Color::Rgb(30, 32, 38);

/// Slightly brighter border for emphasis.
pub const BORDER_LIGHT: Color = Color::Rgb(45, 48, 58);

// ── Styles ───────────────────────────────────────────────────────────────────

/// Background fill style.
pub fn bg() -> Style {
    Style::default().bg(BG)
}

/// Surface fill style.
pub fn surface() -> Style {
    Style::default().bg(SURFACE)
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

/// Ghost text — barely visible structural elements.
pub fn text_ghost() -> Style {
    Style::default().fg(FG_GHOST)
}

/// Brand name — bold accent.
pub fn brand() -> Style {
    Style::default().fg(ACCENT).add_modifier(Modifier::BOLD)
}

/// Brand name hero — large, bright, commanding.
pub fn brand_hero() -> Style {
    Style::default()
        .fg(FG_PRIMARY)
        .add_modifier(Modifier::BOLD)
}

/// Subtitle / descriptor label — uppercase tracking feel.
pub fn label() -> Style {
    Style::default().fg(FG_SECONDARY)
}

/// Label with accent color.
pub fn label_accent() -> Style {
    Style::default().fg(ACCENT_DIM)
}

/// Status indicator style.
pub fn status() -> Style {
    Style::default().fg(STATUS_ACTIVE)
}

/// Status indicator dimmed.
pub fn status_dim() -> Style {
    Style::default().fg(STATUS_DIM)
}

/// Keyboard shortcut key badge.
pub fn key_badge() -> Style {
    Style::default()
        .fg(FG_SECONDARY)
        .add_modifier(Modifier::BOLD)
}

/// Key description text.
pub fn key_desc() -> Style {
    Style::default().fg(FG_DIM)
}

/// Horizontal rule / border style.
pub fn rule() -> Style {
    Style::default().fg(BORDER)
}

/// Slightly brighter rule.
pub fn rule_light() -> Style {
    Style::default().fg(BORDER_LIGHT)
}
