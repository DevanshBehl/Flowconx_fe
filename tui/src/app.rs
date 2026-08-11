use crossterm::event::{self, Event, KeyCode, KeyEventKind};
use ratatui::backend::CrosstermBackend;
use ratatui::Terminal;
use std::io::{self, Stdout};
use std::time::{Duration, Instant};

use crate::ui;

/// The currently active screen in the application.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Screen {
    ComingSoon,
}

/// Core application state.
#[allow(dead_code)]
pub struct App {
    /// Whether the application should exit.
    pub should_quit: bool,
    /// The currently active screen.
    pub current_screen: Screen,
    /// Monotonic tick counter, used for animations.
    pub tick: u64,
    /// Timestamp of when the app was created, used for elapsed-based animations.
    pub start_time: Instant,
}

impl App {
    pub fn new() -> Self {
        Self {
            should_quit: false,
            current_screen: Screen::ComingSoon,
            tick: 0,
            start_time: Instant::now(),
        }
    }

    /// Main event loop.
    pub async fn run(&mut self, terminal: &mut Terminal<CrosstermBackend<Stdout>>) -> io::Result<()> {
        let tick_rate = Duration::from_millis(150);
        let mut last_tick = Instant::now();

        loop {
            // Draw
            terminal.draw(|frame| {
                ui::render(frame, self);
            })?;

            // Event handling with tick timeout
            let timeout = tick_rate.saturating_sub(last_tick.elapsed());
            if event::poll(timeout)? {
                if let Event::Key(key) = event::read()? {
                    if key.kind == KeyEventKind::Press {
                        self.handle_key(key.code);
                    }
                }
            }

            // Tick
            if last_tick.elapsed() >= tick_rate {
                self.tick = self.tick.wrapping_add(1);
                last_tick = Instant::now();
            }

            if self.should_quit {
                return Ok(());
            }
        }
    }

    fn handle_key(&mut self, key: KeyCode) {
        match key {
            KeyCode::Char('q') | KeyCode::Esc => {
                self.should_quit = true;
            }
            _ => {}
        }
    }

    /// Returns elapsed seconds since the app started.
    #[allow(dead_code)]
    pub fn elapsed_secs(&self) -> f64 {
        self.start_time.elapsed().as_secs_f64()
    }
}
