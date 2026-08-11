use ratatui::layout::{Alignment, Constraint, Flex, Layout, Rect};
use ratatui::style::Modifier;
use ratatui::text::{Line, Span};
use ratatui::widgets::{Block, Borders, Padding, Paragraph};
use ratatui::Frame;

use crate::app::App;
use crate::ui::theme;

// ── Brand Mark ───────────────────────────────────────────────────────────────
// Large stylized brand rendered with Unicode block elements.
// Designed to feel like OpenCode's bold terminal branding.

const BRAND_ART: &[&str] = &[
    "███████ ██       ██████  ██     ██  ██████  ██████  ███    ██ ██   ██",
    "██      ██      ██    ██ ██     ██ ██      ██    ██ ████   ██  ██ ██ ",
    "█████   ██      ██    ██ ██  █  ██ ██      ██    ██ ██ ██  ██   ███  ",
    "██      ██      ██    ██ ██ ███ ██ ██      ██    ██ ██  ██ ██  ██ ██ ",
    "██      ███████  ██████   ███ ███   ██████  ██████  ██   ████ ██   ██",
];

const BRAND_ART_SMALL: &str = "F L O W C O N X";

/// Animated loading dots sequence.
const LOADING_FRAMES: &[&str] = &[
    "·        ",
    "· ·      ",
    "· · ·    ",
    "· · · ·  ",
    "· · · · ·",
    "  · · · ·",
    "    · · ·",
    "      · ·",
    "        ·",
    "         ",
];

/// Renders the full Coming Soon screen.
pub fn render(frame: &mut Frame, app: &App) {
    let area = frame.area();

    // Fill entire screen with pure black
    let bg = Block::default().style(theme::bg());
    frame.render_widget(bg, area);

    // Main vertical layout
    let layout = Layout::vertical([
        Constraint::Length(3), // header bar
        Constraint::Min(0),   // body
        Constraint::Length(3), // footer bar
    ])
    .split(area);

    render_header(frame, app, layout[0]);
    render_body(frame, app, layout[1]);
    render_footer(frame, app, layout[2]);
}

// ── Header Bar ───────────────────────────────────────────────────────────────

fn render_header(frame: &mut Frame, app: &App, area: Rect) {
    // Top padding line + content + bottom border
    let rows = Layout::vertical([
        Constraint::Length(1), // top padding
        Constraint::Length(1), // content
        Constraint::Length(1), // border
    ])
    .split(area);

    let content_area = rows[1];
    let border_area = rows[2];

    // Left: brand mark | Right: version + status
    let cols = Layout::horizontal([
        Constraint::Min(0),
        Constraint::Length(24),
    ])
    .split(content_area);

    // Brand mark — left
    let pulse = if (app.tick / 5) % 2 == 0 {
        Span::styled(" ◆ ", theme::brand())
    } else {
        Span::styled(" ◇ ", theme::label_accent())
    };

    let brand = Line::from(vec![
        pulse,
        Span::styled("FlowConX", theme::brand()),
    ]);
    frame.render_widget(Paragraph::new(brand).style(theme::bg()), cols[0]);

    // Right: status + version
    let status_dot = if (app.tick / 4) % 3 == 0 {
        Span::styled("● ", theme::status())
    } else {
        Span::styled("● ", theme::status_dim())
    };

    let right_info = Line::from(vec![
        status_dot,
        Span::styled("INITIALIZING", theme::text_dim()),
        Span::styled("  v0.1.0 ", theme::text_dim()),
    ]);
    frame.render_widget(
        Paragraph::new(right_info)
            .alignment(Alignment::Right)
            .style(theme::bg()),
        cols[1],
    );

    // Subtle bottom border
    let border_str: String = "─".repeat(area.width as usize);
    let border_line = Line::from(Span::styled(border_str, theme::rule()));
    frame.render_widget(Paragraph::new(border_line).style(theme::bg()), border_area);
}

// ── Body ─────────────────────────────────────────────────────────────────────

fn render_body(frame: &mut Frame, app: &App, area: Rect) {
    if area.height < 14 {
        render_body_compact(frame, app, area);
    } else {
        render_body_full(frame, app, area);
    }
}

fn render_body_full(frame: &mut Frame, app: &App, area: Rect) {
    // Total content: brand(3) + gap(2) + divider(1) + gap(2) + descriptor(1)
    //   + gap(1) + status_card(5) + gap(2) + copy(2) + gap(1) + loading(1) = 21
    let content_height: u16 = 23;

    // Vertically center
    let v_layout = Layout::vertical([Constraint::Length(content_height)])
        .flex(Flex::Center)
        .split(area);

    // Horizontally center — wider to accommodate brand art
    let max_width = area.width.min(76);
    let h_layout = Layout::horizontal([Constraint::Length(max_width)])
        .flex(Flex::Center)
        .split(v_layout[0]);

    let center = h_layout[0];

    let rows = Layout::vertical([
        Constraint::Length(5), // brand art
        Constraint::Length(2), // gap
        Constraint::Length(1), // divider
        Constraint::Length(2), // gap
        Constraint::Length(1), // descriptor
        Constraint::Length(1), // gap
        Constraint::Length(5), // status card
        Constraint::Length(2), // gap
        Constraint::Length(2), // copy
        Constraint::Length(1), // gap
        Constraint::Length(1), // loading animation
    ])
    .split(center);

    // ── Brand Art ──
    render_brand_art(frame, app, rows[0]);

    // ── Thin accent divider ──
    let div_width = center.width.min(28) as usize;
    let padding = (center.width as usize).saturating_sub(div_width) / 2;
    let divider = format!(
        "{}{}{}",
        " ".repeat(padding),
        "─".repeat(div_width),
        " ".repeat(padding),
    );
    let div_line = Line::from(Span::styled(divider, theme::rule_light()));
    frame.render_widget(Paragraph::new(div_line).style(theme::bg()), rows[2]);

    // ── Descriptor ──
    let descriptor = Line::from(vec![
        Span::styled("N E T W O R K   I N T E L L I G E N C E", theme::label()),
    ])
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(descriptor).style(theme::bg()), rows[4]);

    // ── Status Card ──
    render_status_card(frame, app, rows[6]);

    // ── Supporting Copy ──
    let copy = vec![
        Line::from(Span::styled(
            "Real-time network flow intelligence,",
            theme::text_dim(),
        ))
        .alignment(Alignment::Center),
        Line::from(Span::styled(
            "classification & observability.",
            theme::text_dim(),
        ))
        .alignment(Alignment::Center),
    ];
    frame.render_widget(Paragraph::new(copy).style(theme::bg()), rows[8]);

    // ── Loading Animation ──
    let loading_idx = (app.tick as usize / 2) % LOADING_FRAMES.len();
    let loading = Line::from(Span::styled(LOADING_FRAMES[loading_idx], theme::label_accent()))
        .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(loading).style(theme::bg()), rows[10]);
}

fn render_body_compact(frame: &mut Frame, app: &App, area: Rect) {
    let content_height: u16 = area.height.min(8);

    let v_layout = Layout::vertical([Constraint::Length(content_height)])
        .flex(Flex::Center)
        .split(area);

    let max_width = area.width.min(40);
    let h_layout = Layout::horizontal([Constraint::Length(max_width)])
        .flex(Flex::Center)
        .split(v_layout[0]);

    let center = h_layout[0];

    let rows = Layout::vertical([
        Constraint::Length(1), // brand
        Constraint::Length(1), // gap
        Constraint::Length(1), // descriptor
        Constraint::Length(1), // gap
        Constraint::Length(1), // status
        Constraint::Length(1), // gap
        Constraint::Length(1), // copy
        Constraint::Length(1), // loading
    ])
    .split(center);

    let brand = Line::from(Span::styled(BRAND_ART_SMALL, theme::brand_hero()))
        .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(brand).style(theme::bg()), rows[0]);

    let desc = Line::from(Span::styled("NETWORK INTELLIGENCE", theme::label()))
        .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(desc).style(theme::bg()), rows[2]);

    let status_dot = if (app.tick / 3) % 2 == 0 { "●" } else { "◉" };
    let status = Line::from(vec![
        Span::styled(format!("{status_dot} "), theme::status()),
        Span::styled("COMING SOON", theme::status()),
    ])
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(status).style(theme::bg()), rows[4]);

    let copy = Line::from(Span::styled(
        "Intelligent network flow analysis.",
        theme::text_dim(),
    ))
    .alignment(Alignment::Center);
    frame.render_widget(Paragraph::new(copy).style(theme::bg()), rows[6]);
}

// ── Brand Art Renderer ───────────────────────────────────────────────────────

fn render_brand_art(frame: &mut Frame, _app: &App, area: Rect) {
    let lines: Vec<Line> = BRAND_ART
        .iter()
        .enumerate()
        .map(|(i, line)| {
            // Top 2 lines bright white, bottom 3 lines dim gray (like opencode)
            let style = if i < 2 {
                theme::brand_hero()
            } else {
                theme::text_dim().add_modifier(Modifier::BOLD)
            };
            Line::from(Span::styled(*line, style))
                .alignment(Alignment::Center)
        })
        .collect();

    frame.render_widget(Paragraph::new(lines).style(theme::bg()), area);
}

// ── Status Card ──────────────────────────────────────────────────────────────

fn render_status_card(frame: &mut Frame, app: &App, area: Rect) {
    // Center the card
    let card_width = area.width.min(30);
    let h_layout = Layout::horizontal([Constraint::Length(card_width)])
        .flex(Flex::Center)
        .split(area);

    let card_area = h_layout[0];

    // Card with subtle border
    let card = Block::default()
        .borders(Borders::ALL)
        .border_style(theme::rule_light())
        .style(theme::bg())
        .padding(Padding::new(1, 1, 1, 1));

    let inner = card.inner(card_area);
    frame.render_widget(card, card_area);

    // Status content inside the card
    let status_dot = if (app.tick / 3) % 2 == 0 { "●" } else { "◉" };
    let status_line = Line::from(vec![
        Span::styled(format!("{status_dot} "), theme::status()),
        Span::styled("COMING SOON", theme::status().add_modifier(Modifier::BOLD)),
    ])
    .alignment(Alignment::Center);

    frame.render_widget(Paragraph::new(status_line), inner);
}

// ── Footer Bar ───────────────────────────────────────────────────────────────

fn render_footer(frame: &mut Frame, _app: &App, area: Rect) {
    let rows = Layout::vertical([
        Constraint::Length(1), // border
        Constraint::Length(1), // content
        Constraint::Length(1), // bottom padding
    ])
    .split(area);

    let border_area = rows[0];
    let content_area = rows[1];

    // Top border
    let border_str: String = "─".repeat(area.width as usize);
    let border_line = Line::from(Span::styled(border_str, theme::rule()));
    frame.render_widget(Paragraph::new(border_line).style(theme::bg()), border_area);

    // Footer keys — laid out professionally
    let cols = Layout::horizontal([
        Constraint::Min(0),
        Constraint::Length(40),
        Constraint::Min(0),
    ])
    .split(content_area);

    let keys = Line::from(vec![
        Span::styled(" ESC ", theme::key_badge()),
        Span::styled("Exit", theme::key_desc()),
        Span::styled("    ", theme::text_dim()),
        Span::styled(" q ", theme::key_badge()),
        Span::styled("Quit", theme::key_desc()),
        Span::styled("    ", theme::text_dim()),
        Span::styled("flowconx.dev", theme::text_ghost()),
    ]);

    frame.render_widget(
        Paragraph::new(keys)
            .alignment(Alignment::Center)
            .style(theme::bg()),
        cols[1],
    );
}
