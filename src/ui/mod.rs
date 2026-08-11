pub mod components;
pub mod screens;
pub mod theme;

use ratatui::Frame;

use crate::app::{App, Screen};

/// Top-level render dispatcher. Routes rendering to the active screen.
pub fn render(frame: &mut Frame, app: &App) {
    match app.current_screen {
        Screen::ComingSoon => screens::coming_soon::render(frame, app),
    }
}
