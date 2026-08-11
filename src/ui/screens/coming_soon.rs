use ratatui::layout::{Alignment, Constraint, Flex, Layout, Rect};
use ratatui::style::Modifier;
use ratatui::text::{Line, Span};
use ratatui::widgets::{Block, Paragraph};
use ratatui::Frame;

use crate::app::App;
use crate::ui::theme;

/// The animation frames for the subtle status pulse.
const PULSE_FRAMES: &[&str] = &["◆", "◇", "◆", "◆"];

/// Renders the full Coming Soon screen.
pub fn render(frame: &mut Frame, app: &App) {
    let area = frame.area();

    // Fill the entire background
    let bg_block = Block::default().style(theme::bg());
    frame.render_widget(bg_block, area);

    // ── Layout: vertical slices ──────────────────────────────────────────────
    // Header (1) | Spacer | Content | Spacer | Footer (1)
    let vertical = Layout::vertical([
        Constraint::Length(1), // header
        Constraint::Min(0),   // body (flex)
        Constraint::Length(1), // footer
    ])
    .split(area);

    let header_area = vertical[0];
    let body_area = vertical[1];
    let footer_area = vertical[2];

    render_header(frame, app, header_area);
    render_body(frame, app, body_area);
    render_footer(frame, app, footer_area);
}

// ── Header ───────────────────────────────────────────────────────────────────

fn render_header(frame: &mut Frame, app: &App, area: Rect) {
    // Pulse animation for the status diamond
    let pulse_idx = (app.tick as usize / 4) % PULSE_FRAMES.len();
    let diamond = PULSE_FRAMES[pulse_idx];

    let brand = Line::from(vec![
        Span::styled(format!(" {diamond} "), theme::brand()),
        Span::styled("FlowConX", theme::brand()),
    ]);

    let version = Line::from(vec![Span::styled("v0.1.0 ", theme::text_dim())]);

    // Render brand left, version right
    let header_cols = Layout::horizontal([Constraint::Min(0), Constraint::Length(8)]).split(area);

    frame.render_widget(
        Paragraph::new(brand).style(theme::bg()),
        header_cols[0],
    );
    frame.render_widget(
        Paragraph::new(version)
            .alignment(Alignment::Right)
            .style(theme::bg()),
        header_cols[1],
    );
}

// ── Body ─────────────────────────────────────────────────────────────────────

fn render_body(frame: &mut Frame, app: &App, area: Rect) {
    // Determine if we have enough vertical space for the full layout
    let compact = area.height < 16;

    if compact {
        render_body_compact(frame, app, area);
    } else {
        render_body_full(frame, app, area);
    }
}

fn render_body_full(frame: &mut Frame, app: &App, area: Rect) {
    // Calculate content block height
    // Rule(1) + gap(1) + brand(1) + gap(1) + descriptor(2) + gap(2) + status(1) + gap(2) + copy(2) + gap(1) + rule(1) = 15
    let content_height: u16 = 15;

    let vertical = Layout::vertical([Constraint::Length(content_height)])
        .flex(Flex::Center)
        .split(area);

    let content_area = vertical[0];

    // Horizontal centering — cap content width
    let max_width = area.width.min(64);
    let horizontal = Layout::horizontal([Constraint::Length(max_width)])
        .flex(Flex::Center)
        .split(content_area);

    let centered = horizontal[0];

    // Break the centered area into rows
    let rows = Layout::vertical([
        Constraint::Length(1), // top rule
        Constraint::Length(1), // gap
        Constraint::Length(1), // brand name
        Constraint::Length(1), // gap
        Constraint::Length(2), // descriptor
        Constraint::Length(2), // gap
        Constraint::Length(1), // status indicator
        Constraint::Length(2), // gap
        Constraint::Length(2), // supporting copy
        Constraint::Length(1), // gap
        Constraint::Length(1), // bottom rule
    ])
    .split(centered);

    // Top rule
    render_rule(frame, rows[0]);

    // Brand name — hero
    let brand_line = Line::from(vec![Span::styled(
        "FlowConX",
        theme::brand_hero(),
    )])
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(brand_line), rows[2]);

    // Descriptor
    let desc = vec![
        Line::from(Span::styled("NETWORK INTELLIGENCE", theme::label())).alignment(Alignment::Center),
        Line::from(Span::styled("PLATFORM", theme::label())).alignment(Alignment::Center),
    ];
    frame.render_widget(Paragraph::new(desc), rows[4]);

    // Status indicator with subtle animation
    let status_dot = if (app.tick / 3) % 2 == 0 { "●" } else { "◉" };
    let status_line = Line::from(vec![
        Span::styled(format!("{status_dot} "), theme::status()),
        Span::styled("COMING SOON", theme::status()),
    ])
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(status_line), rows[6]);

    // Supporting copy
    let copy = vec![
        Line::from(Span::styled(
            "Real-time network flow intelligence,",
            theme::text_secondary(),
        ))
        .alignment(Alignment::Center),
        Line::from(Span::styled(
            "classification & observability.",
            theme::text_secondary(),
        ))
        .alignment(Alignment::Center),
    ];
    frame.render_widget(Paragraph::new(copy), rows[8]);

    // Bottom rule
    render_rule(frame, rows[10]);
}

fn render_body_compact(frame: &mut Frame, app: &App, area: Rect) {
    // Minimal layout for very small terminals
    let content_height: u16 = area.height.min(7);

    let vertical = Layout::vertical([Constraint::Length(content_height)])
        .flex(Flex::Center)
        .split(area);

    let content_area = vertical[0];

    let max_width = area.width.min(48);
    let horizontal = Layout::horizontal([Constraint::Length(max_width)])
        .flex(Flex::Center)
        .split(content_area);

    let centered = horizontal[0];

    let rows = Layout::vertical([
        Constraint::Length(1), // brand
        Constraint::Length(1), // descriptor
        Constraint::Length(1), // gap
        Constraint::Length(1), // status
        Constraint::Length(1), // gap
        Constraint::Length(1), // copy
        Constraint::Length(1), // extra (if space)
    ])
    .split(centered);

    let brand_line = Line::from(Span::styled("FlowConX", theme::brand_hero()))
        .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(brand_line), rows[0]);

    let desc_line =
        Line::from(Span::styled("NETWORK INTELLIGENCE PLATFORM", theme::label()))
            .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(desc_line), rows[1]);

    let status_dot = if (app.tick / 3) % 2 == 0 { "●" } else { "◉" };
    let status_line = Line::from(vec![
        Span::styled(format!("{status_dot} "), theme::status()),
        Span::styled("COMING SOON", theme::status()),
    ])
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(status_line), rows[3]);

    let copy_line = Line::from(Span::styled(
        "Intelligent network flow analysis.",
        theme::text_secondary(),
    ))
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(copy_line), rows[5]);
}

// ── Footer ───────────────────────────────────────────────────────────────────

fn render_footer(frame: &mut Frame, _app: &App, area: Rect) {
    let footer = Line::from(vec![
        Span::styled("  ESC ", theme::text_secondary().add_modifier(Modifier::BOLD)),
        Span::styled("Exit", theme::text_dim()),
    ]);

    frame.render_widget(
        Paragraph::new(footer)
            .alignment(Alignment::Center)
            .style(theme::bg()),
        area,
    );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

fn render_rule(frame: &mut Frame, area: Rect) {
    let rule_char = "─";
    let rule_str: String = rule_char.repeat(area.width as usize);
    let rule_line = Line::from(Span::styled(rule_str, theme::rule_light()));
    frame.render_widget(
        Paragraph::new(rule_line).alignment(Alignment::Center),
        area,
    );
}
